"use server";

import { requireSession, refreshToken } from "../session";

const BACKEND_URL = process.env.BACKEND_INTERNAL_URL!;

export async function authFetch(
  url: string,
  init: RequestInit = {},
): Promise<Response> {
  const session = await requireSession();

  const headers = new Headers(init.headers);

  headers.set("Authorization", `Bearer ${session.accessToken}`);

  let response = await fetch(`${BACKEND_URL}${url}`, {
    ...init,
    headers,
  });

  /**
   * Token còn hạn
   */
  if (response.status !== 401) {
    return response;
  }

  /**
   * Refresh Token
   */
  const newAccessToken = await refreshToken(session.refreshToken);

  if (!newAccessToken) {
    throw new Error("Refresh token failed");
  }

  headers.set("Authorization", `Bearer ${newAccessToken}`);

  /**
   * Retry
   */
  return fetch(`${BACKEND_URL}${url}`, {
    ...init,
    headers,
  });
}
