"use client";

import { useQuery } from "@tanstack/react-query";

import { LanguageService } from "@/services/location/language/client";

export const useLanguageUpdateFormData = (
  languageId: string,
  enabled = true,
) => {
  return useQuery({
    queryKey: ["language-update-form-data", languageId],
    enabled: enabled && !!languageId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const [initialData] = await Promise.all([
        LanguageService.getOne(languageId),
      ]);

      return {
        initialData,
      };
    },
  });
};
