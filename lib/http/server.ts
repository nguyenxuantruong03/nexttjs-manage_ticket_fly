"use server";

import { authFetch } from "./authFetch";

export async function serverHttp<T>(
  url: string,
  init: RequestInit = {},
): Promise<T> {
  const response = await authFetch(
    url,
    init,
  );

  if (!response.ok) {
    const text = await response.text();

    throw new Error(
      text || response.statusText,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}