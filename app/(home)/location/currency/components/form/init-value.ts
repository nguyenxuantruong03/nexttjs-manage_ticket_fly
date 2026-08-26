import { CurrencyFormSchema } from "@/app/(home)/location/currency/components/form/schema";
import { currencyDefaultValues } from "./default-values";
import { Currency } from "@/types/location/currency";

export function initCurrencyFormValues(
  currency?: Currency,
): CurrencyFormSchema {
  if (!currency) {
    return structuredClone(currencyDefaultValues);
  }

  return structuredClone(currency);
}
