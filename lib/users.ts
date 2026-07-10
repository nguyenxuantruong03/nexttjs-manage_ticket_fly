"use server";

import { authFetch } from "./authFetch";

export const getUsers = async () => {
  const response = await authFetch(`${process.env.NEXT_PUBLIC_BACKEND_USERS}`);
  const result = await response.json();
  return result;
};
