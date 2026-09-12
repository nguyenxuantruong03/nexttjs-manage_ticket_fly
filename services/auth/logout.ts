"use client";

import axios from "axios";

interface LogoutOptions {
  type?: "login" | "banned";
  reason?: string;
  banUntil?: string | null;
}

export const handleLogout = async (options: LogoutOptions = {}) => {
  try {
    await axios.get("/api/auth/logout");
  } catch (error) {
    console.error("[Logout] Failed:", error);
  } finally {
    /**
     * USER BANNED
     */
    if (options.type === "banned") {
      const params = new URLSearchParams();

      if (options.reason) {
        params.set("reason", options.reason);
      }

      if (options.banUntil) {
        params.set("banUntil", options.banUntil);
      }

      const query = params.toString();

      window.location.href = query ? `/auth/banned?${query}` : "/auth/banned";

      return;
    }

    /**
     * FORCE LOGOUT / NORMAL LOGOUT
     */
    const currentPath = window.location.pathname + window.location.search;

    window.location.href = `/auth/login?redirect=${encodeURIComponent(
      currentPath,
    )}`;
  }
};
