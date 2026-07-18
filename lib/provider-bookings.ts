"use server";

import { typeServiceBooings } from "@/types/bookings/provider-bookings";
import { authFetch } from "./authFetch";


export const getProviderBookings = async (serviceType: typeServiceBooings) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_BACKEND_PROVIDERBOOKING}`);

  // Nếu có serviceType (và không phải chuỗi rỗng), thêm vào query
  if (serviceType && serviceType) {
    url.searchParams.append("service", serviceType as string);
  }

  // Nếu serviceType là undefined hoặc rỗng, URL sẽ giữ nguyên
  // thành /provider-booking -> Lấy tất cả (All)
  const response = await authFetch(url.toString());
  return await response.json();
};
