import { PaginatedResult, PaginationParams } from "@/types/common/panigation";
import type { AxiosInstance } from "axios";

export function createCrudApi<T, TCreate = Partial<T>, TUpdate = Partial<T>>(
  api: AxiosInstance,
  endpoint: string,
) {
  return {
    // ======================================================
    // FIND ALL
    // ======================================================

    async getMany(params?: PaginationParams): Promise<PaginatedResult<T>> {
      const { data } = await api.get<PaginatedResult<T>>(endpoint, {
        params,
      });

      return data;
    },

    // ======================================================
    // FIND ONE
    // ======================================================

    async getOne(id: string): Promise<T> {
      const { data } = await api.get<T>(`${endpoint}/${id}`);

      return data;
    },

    // ======================================================
    // CREATE
    // ======================================================

    async create(body: TCreate): Promise<T> {
      const { data } = await api.post<T>(endpoint, body);

      return data;
    },

    // ======================================================
    // UPDATE
    // ======================================================

    async update(id: string, body: TUpdate): Promise<T> {
      const { data } = await api.patch<T>(`${endpoint}/${id}`, body);

      return data;
    },

    // ======================================================
    // DELETE
    // ======================================================

    async delete(id: string): Promise<void> {
      await api.delete(`${endpoint}/${id}`);
    },
  };
}
