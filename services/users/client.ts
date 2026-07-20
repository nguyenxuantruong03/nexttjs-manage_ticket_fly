import { createCrudApi } from "@/lib/api/createCrudApi";
import { clientHttp } from "@/lib/http/client";
import { User } from "@/types/bookings/auth/users";

export const UserService = {
  ...createCrudApi<User>(clientHttp, "/user"),

  async getMe() {
    return clientHttp.get("/user/me").then((r) => r.data);
  },

  async updateMe(dto: any) {
    return clientHttp.patch("/user/me", dto).then((r) => r.data);
  },
};
