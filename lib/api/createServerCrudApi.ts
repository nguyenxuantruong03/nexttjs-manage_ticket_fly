import { serverHttp } from "@/lib/http/server";
import { PaginatedResult, PaginationParams } from "@/types/common/panigation";

export function createServerCrudApi<
  T,
  TCreate = Partial<T>,
  TUpdate = Partial<T>,
>(endpoint: string) {
  return {
    // ======================================================
    // FIND ALL
    // ======================================================

    getMany(params?: PaginationParams) {
      const searchParams = new URLSearchParams();

      if (params?.page !== undefined) {
        searchParams.set("page", String(params.page));
      }

      if (params?.limit !== undefined) {
        searchParams.set("limit", String(params.limit));
      }

      const query = searchParams.toString();

      const url = query ? `${endpoint}?${query}` : endpoint;

      return serverHttp<PaginatedResult<T>>(url);
    },

    // ======================================================
    // FIND ONE
    // ======================================================

    getOne(id: string) {
      return serverHttp<T>(`${endpoint}/${id}`);
    },

    // ======================================================
    // CREATE
    // ======================================================

    create(body: TCreate) {
      return serverHttp<T>(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    },

    // ======================================================
    // UPDATE
    // ======================================================

    update(id: string, body: TUpdate) {
      return serverHttp<T>(`${endpoint}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    },

    // ======================================================
    // DELETE
    // ======================================================

    delete(id: string) {
      return serverHttp<void>(`${endpoint}/${id}`, {
        method: "DELETE",
      });
    },
  };
}
