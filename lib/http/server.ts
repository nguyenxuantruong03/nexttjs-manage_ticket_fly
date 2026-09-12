import { authFetch } from "./authFetch";

export async function serverHttp<T>(
  url: string,
  init: RequestInit = {},
): Promise<T> {
  const response = await authFetch(url, init);

  if (!response.ok) {
    const text = await response.text();

    let error: {
      code?: string;
      message?: string;
      banUntil?: string | null;
    } = {};

    try {
      error = text ? JSON.parse(text) : {};
    } catch {
      // Response không phải JSON
    }

    throw new ServerHttpError(
      error.message || text || response.statusText || "Request failed",
      response.status,
      error.code,
      error.banUntil,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export class ServerHttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code?: string,
    public readonly banUntil?: string | null,
  ) {
    super(message);

    this.name = "ServerHttpError";
  }
}
