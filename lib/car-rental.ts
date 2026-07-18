"use server";

import { authFetch } from "./authFetch";

export const getCarRental = async () => {
  const response = await authFetch(`${process.env.NEXT_PUBLIC_BACKEND_CARRENTAL}`);
  const result = await response.json();
  return result;
};
