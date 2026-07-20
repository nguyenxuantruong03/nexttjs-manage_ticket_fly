import { AxiosInstance } from "axios";

export function createCrudApi<T, TCreate = Partial<T>, TUpdate = Partial<T>>(
  api: AxiosInstance,
  endpoint: string,
) {
  return {
    async getMany() {
      const { data } = await api.get<T[]>(endpoint);

      return data;
    },

    async getOne(id: string) {
      const { data } = await api.get<T>(`${endpoint}/${id}`);

      return data;
    },

    async create(body: TCreate) {
      const { data } = await api.post<T>(endpoint, body);

      return data;
    },

    async update(id: string, body: TUpdate) {
      const { data } = await api.patch<T>(`${endpoint}/${id}`, body);

      return data;
    },

    async delete(id: string) {
      await api.delete(`${endpoint}/${id}`);
    },
  };
}
