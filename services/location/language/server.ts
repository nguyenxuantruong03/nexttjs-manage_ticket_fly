import { createServerCrudApi } from "@/lib/api/createServerCrudApi";
import { API } from "@/lib/api/endpoints";
import { Language } from "@/types/bookings/location/language";

export const LanguageServerService = createServerCrudApi<Language>(
  API.LANGUAGE,
);
