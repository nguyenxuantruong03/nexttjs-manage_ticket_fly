import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { serverHttp } from "@/lib/http/server";
import { User } from "@/types/bookings/auth/users";

const crud = createServerCrudApi<User>(API.USER);

const endpoint = API.USER;

export const UserServerService = {
  ...crud,

  getMe: () => serverHttp<User>(`${endpoint}/me`),

  updateMe: (body: Partial<User>) =>
    serverHttp<User>(`${endpoint}/me`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
