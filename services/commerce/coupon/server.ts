import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Coupon } from "@/types/common/commerce/coupon";

export const CouponServerService = createServerCrudApi<Coupon>(API.COUPON);
