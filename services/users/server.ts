import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { serverHttp, ServerHttpError } from "@/lib/http/server";
import { getSession } from "@/lib/session";
import { User } from "@/types/users/auth/users";

const crud = createServerCrudApi<User>(API.USER);

const endpoint = API.USER;

export type GetMeResult =
  | {
      status: "authenticated";
      user: User;
    }
  | {
      status: "unauthenticated";
      user: null;
    }
  | {
      status: "banned";
      user: null;
      reason: string;
      banUntil: string | null;
    };

export const UserServerService = {
  ...crud,

  getMe: async (): Promise<GetMeResult> => {
    const session = await getSession();

    if (!session?.accessToken) {
      return {
        status: "unauthenticated",
        user: null,
      };
    }

    try {
      const user = await serverHttp<User>(`${endpoint}/me`);

      return {
        status: "authenticated",
        user,
      };
    } catch (error) {
      if (error instanceof ServerHttpError && error.code === "USER_BANNED") {
        return {
          status: "banned",
          user: null,
          reason: error.message || "Your account is currently banned.",
          banUntil: error.banUntil ?? null,
        };
      }

      return {
        status: "unauthenticated",
        user: null,
      };
    }
  },

  updateMe: (body: Partial<User>) =>
    serverHttp<User>(`${endpoint}/me`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
