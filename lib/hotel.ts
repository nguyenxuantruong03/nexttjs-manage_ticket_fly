"use server";

import { authFetch } from "./authFetch";

export const getHotel = async () => {
  const response = await authFetch(`${process.env.NEXT_PUBLIC_BACKEND_HOTEL}`);
  const result = await response.json();
  return result;
};
