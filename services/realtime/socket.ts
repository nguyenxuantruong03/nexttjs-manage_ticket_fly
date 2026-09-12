"use client";

import { io, type Socket } from "socket.io-client";

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (socket) {
    return socket;
  }

  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  socket = io(`${apiUrl}/realtime`, {
    withCredentials: true,

    transports: ["websocket"],

    autoConnect: false,
  });

  socket.on("connect_error", (error) => {
    console.error("[Socket] Connection error:", error);
  });

  return socket;
}

export function disconnectSocket() {
  if (!socket) {
    return;
  }

  socket.disconnect();
}
