"use client";

export const useWhitelistEntryCreateFormData = (enabled = true) => {
  return {
    data: undefined,

    isLoading: false,

    isFetching: false,

    isError: false,

    errors: {
      whitelistEntry: null as Error | null,
    },

    refetch: async () => {},
  };
};
