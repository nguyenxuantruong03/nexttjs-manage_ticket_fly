"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify, SignJWT } from "jose";
import { Role } from "@/types/users/auth/users";

export type Session = {
  user: {
    id: string;
    name: string;
    role: Role;
    isTwoFactorEnabled?: boolean;
  };
  accessToken: string;
  refreshToken: string;
};

const secret = process.env.SESSION_SECRET_KEY!;

const key = new TextEncoder().encode(secret);

const isProduction = process.env.NODE_ENV === "production";

/**
 * ------------------------------------------------------------------
 * Create Session
 * ------------------------------------------------------------------
 */
export async function createSession(session: Session) {
  const jwt = await new SignJWT(session)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setSubject(session.user.id)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(key);

  (await cookies()).set("session", jwt, {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
}

/**
 * ------------------------------------------------------------------
 * Get Session
 * ------------------------------------------------------------------
 */
export async function getSession(): Promise<Session | null> {
  const cookie = (await cookies()).get("session");

  if (!cookie) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(cookie.value, key);

    return payload as unknown as Session;
  } catch {
    return null;
  }
}

/**
 * ------------------------------------------------------------------
 * Delete Session
 * ------------------------------------------------------------------
 */
export async function deleteSession() {
  (await cookies()).delete("session");
}

/**
 * ------------------------------------------------------------------
 * Update Access Token
 * ------------------------------------------------------------------
 */
export async function updateSessionToken(
  accessToken: string,
  refreshToken?: string,
): Promise<boolean> {
  const session = await getSession();

  console.log("[Auth] updateSessionToken - session exists:", Boolean(session));

  if (!session) {
    return false;
  }

  await createSession({
    ...session,
    accessToken,
    refreshToken: refreshToken ?? session.refreshToken,
  });

  return true;
}

/**
 * ------------------------------------------------------------------
 * Refresh Token
 * ------------------------------------------------------------------
 */
export async function refreshToken(
  currentRefreshToken: string,
): Promise<string | null> {
  try {
    console.log("[Auth] Refresh started");

    console.log("[Auth] Has refresh token:", Boolean(currentRefreshToken));

    const response = await fetch(
      `${process.env.BACKEND_INTERNAL_URL}/auth/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: currentRefreshToken,
        }),
        cache: "no-store",
      },
    );

    console.log("[Auth] Refresh response:", response.status);

    if (!response.ok) {
      const errorText = await response.text();

      console.error("[Auth] Refresh failed:", response.status, errorText);

      await deleteSession();

      return null;
    }

    const data = await response.json();

    const { accessToken, refreshToken: newRefreshToken } = data;

    console.log("[Auth] New access token:", Boolean(accessToken));

    console.log("[Auth] New refresh token:", Boolean(newRefreshToken));

    if (!accessToken) {
      console.error("[Auth] Backend did not return accessToken");

      await deleteSession();

      return null;
    }

    const updated = await updateSessionToken(accessToken, newRefreshToken);

    console.log("[Auth] Session updated:", updated);

    if (!updated) {
      return null;
    }

    return accessToken;
  } catch (error) {
    console.error("[Auth] Refresh token exception:", error);

    await deleteSession();

    return null;
  }
}
