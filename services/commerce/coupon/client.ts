import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Coupon } from "@/types/common/commerce/coupon";

export const CouponService = createCrudApi<Coupon>(
  clientHttp,
  API.COUPON,
);
