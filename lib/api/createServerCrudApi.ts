import { serverHttp } from "@/lib/http/server";

export function createServerCrudApi<
  T,
  TCreate = Partial<T>,
  TUpdate = Partial<T>,
>(endpoint: string) {
  return {
    getMany() {
      return serverHttp<T[]>(endpoint);
    },

    getOne(id: string) {
      return serverHttp<T>(`${endpoint}/${id}`);
    },

    create(body: TCreate) {
      return serverHttp<T>(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    },

    update(id: string, body: TUpdate) {
      return serverHttp<T>(`${endpoint}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    },

    delete(id: string) {
      return serverHttp<void>(`${endpoint}/${id}`, {
        method: "DELETE",
      });
    },
  };
}
