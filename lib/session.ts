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
 * Require Session
 * Redirect nếu chưa login
 * ------------------------------------------------------------------
 */
export async function requireSession(): Promise<Session> {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return session;
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
) {
  const session = await requireSession();

  await createSession({
    ...session,
    accessToken,
    refreshToken: refreshToken ?? session.refreshToken,
  });
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
      },
    );

    if (!response.ok) {
      await deleteSession();
      return null;
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await response.json();

    await updateSessionToken(accessToken, newRefreshToken);

    return accessToken;
  } catch (error) {
    console.error("Refresh token failed:", error);

    await deleteSession();

    return null;
  }
}
