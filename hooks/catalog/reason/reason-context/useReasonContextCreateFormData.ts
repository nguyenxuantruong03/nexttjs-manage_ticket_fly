"use client";

export const useReasonContextCreateFormData = () => {
  return {
    data: undefined,
    isLoading: false,
    isFetching: false,
    isError: false,
    errors: {message: ""},
    refetch: async () => {},
  };
};
