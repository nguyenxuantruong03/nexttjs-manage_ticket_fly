"use client";

export const useBlacklistEntryCreateFormData = (enabled = true) => {
  return {
    data: undefined,

    isLoading: false,

    isFetching: false,

    isError: false,

    errors: {
      blacklistEntry: null as Error | null,
    },

    refetch: async () => {},
  };
};
