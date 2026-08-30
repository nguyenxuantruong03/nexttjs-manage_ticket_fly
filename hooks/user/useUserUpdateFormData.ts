"use client";

import { useQuery } from "@tanstack/react-query";

import { UserService } from "@/services/users/client";

export const useUserUpdateFormData = (userId: string, enabled = true) => {
  const query = useQuery({
    queryKey: ["user-update-form-data", userId],

    enabled: enabled && !!userId,

    staleTime: 1000 * 60 * 5,

    queryFn: async () => {
      const [initialData] = await Promise.all([UserService.getOne(userId)]);

      return {
        initialData,
      };
    },
  });

  return {
    data: query.data,

    isLoading: query.isLoading,
    isFetching: query.isFetching,

    isError: query.isError,
    errors: {
      user: query.error as Error | null,
    },

    refetch: query.refetch,
  };
};