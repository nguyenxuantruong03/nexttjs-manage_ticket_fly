"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";

import type { User } from "@/types/users/auth/users";

import { UserService } from "@/services/users/client";

import { getSocket } from "@/services/realtime/socket";

import { handleLogout } from "@/services/auth/logout";

interface UserProviderProps {
  initialUser: User | null;
  children: ReactNode;
}

interface UserContextValue {
  user: User | null;
  isLoading: boolean;
  isFetching: boolean;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  isLoading: false,
  isFetching: false,
});

export function UserProvider({ initialUser, children }: UserProviderProps) {
  const {
    data: user,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: () => UserService.getMe(),
    initialData: initialUser,

    refetchOnWindowFocus: true,
    refetchOnReconnect: true,

    retry: false,
  });

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const socket = getSocket();

    const handleConnect = () => {
      console.log("[Socket] Connected:", socket.id);
    };

    const handleDisconnect = (reason: string) => {
      console.log("[Socket] Disconnected:", reason);
    };

    /**
     * ========================================
     * USER BANNED
     * ========================================
     *
     * Admin ban user
     *
     * Redis
     *   ↓
     * Socket.IO
     *   ↓
     * user:banned
     *   ↓
     * logout
     *   ↓
     * /auth/banned
     */
    const handleUserBanned = (data: {
      userId: string;
      reason: string;
      banUntil: string | null;
    }) => {
      if (data.userId !== user.id) {
        return;
      }

      console.log("[Realtime] User banned:", data);

      void handleLogout({
        type: "banned",
        reason: data.reason,
        banUntil: data.banUntil,
      });
    };

    /**
     * ========================================
     * FORCE LOGOUT
     * ========================================
     *
     * Admin force logout
     *
     * Redis
     *   ↓
     * Socket.IO
     *   ↓
     * user:force-logout
     *   ↓
     * logout
     *   ↓
     * /auth/login
     */
    const handleForceLogout = (data: { userId: string }) => {
      if (data.userId !== user.id) {
        return;
      }

      console.log("[Realtime] Force logout");

      void handleLogout({
        type: "login",
      });
    };

    socket.on("connect", handleConnect);

    socket.on("disconnect", handleDisconnect);

    socket.on("user:banned", handleUserBanned);

    socket.on("user:force-logout", handleForceLogout);

    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      socket.off("connect", handleConnect);

      socket.off("disconnect", handleDisconnect);

      socket.off("user:banned", handleUserBanned);

      socket.off("user:force-logout", handleForceLogout);
    };
  }, [user?.id]);

  return (
    <UserContext.Provider
      value={{
        user: user ?? null,
        isLoading,
        isFetching,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
