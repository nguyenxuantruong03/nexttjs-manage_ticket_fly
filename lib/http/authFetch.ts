"use server";

import { refreshToken, getSession } from "../session";

const BACKEND_URL = process.env.BACKEND_INTERNAL_URL!;

export async function authFetch(
  url: string,
  init: RequestInit = {},
): Promise<Response> {
  const session = await getSession();

  /**
   * Không có session
   */
  if (!session) {
    return new Response(
      JSON.stringify({
        message: "Unauthenticated",
        code: "UNAUTHENTICATED",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const headers = new Headers(init.headers);

  headers.set("Authorization", `Bearer ${session.accessToken}`);

  /**
   * Request lần 1
   */
  let response = await fetch(`${BACKEND_URL}${url}`, {
    ...init,
    headers,
    cache: "no-store",
  });

  /**
   * Không phải 401
   *
   * 200, 201, 400, 403, 404, 500...
   * trả thẳng về cho serverHttp xử lý.
   */
  if (response.status !== 401) {
    return response;
  }

  /**
   * Access token hết hạn
   * → Refresh
   */
  const newAccessToken = await refreshToken(session.refreshToken);

  /**
   * Refresh thất bại
   */
  if (!newAccessToken) {
    return new Response(
      JSON.stringify({
        message: "Unauthenticated",
        code: "REFRESH_TOKEN_EXPIRED",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  /**
   * Token mới
   */
  const retryHeaders = new Headers(init.headers);

  retryHeaders.set("Authorization", `Bearer ${newAccessToken}`);

  /**
   * Retry
   */
  return fetch(`${BACKEND_URL}${url}`, {
    ...init,
    headers: retryHeaders,
    cache: "no-store",
  });
}
