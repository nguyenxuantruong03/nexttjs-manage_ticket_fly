import { createCrudApi } from "@/lib/api/createCrudApi";
import { API } from "@/lib/api/endpoints";
import { clientHttp } from "@/lib/http/client";
import { Language } from "@/types/bookings/location/language";

export const LanguageService = createCrudApi<Language>(
  clientHttp,
  API.LANGUAGE,
);
