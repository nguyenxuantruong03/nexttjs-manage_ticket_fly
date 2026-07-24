import { CurrencyFormSchema } from "@/app/(home)/currency/components/form/schema";
import { Currency } from "@/types/bookings/location/currency";
import { currencyDefaultValues } from "./default-values";

export function initCurrencyFormValues(
  currency?: Currency,
): CurrencyFormSchema {
  if (!currency) {
    return structuredClone(currencyDefaultValues);
  }

  return structuredClone(currency);
}
