import { CurrencyFormSchema } from "@/app/(home)/location/currency/components/form/schema";

import { currencyDefaultValues } from "./default-values";

import { Currency } from "@/types/location/currency";

export function initCurrencyFormValues(
  currency?: Currency,
): CurrencyFormSchema {
  if (!currency) {
    return structuredClone(currencyDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    code: currency.code ?? "",
    numericCode: currency.numericCode ?? null,
    symbol: currency.symbol ?? null,
    symbolNative: currency.symbolNative ?? null,
    name: currency.name ?? "",
    nativeName: currency.nativeName ?? null,
    decimalDigits: currency.decimalDigits ?? 0,
    rounding: currency.rounding ?? 0,

    // ======================================================
    // DISPLAY
    // ======================================================

    flagEmoji: currency.flagEmoji ?? null,
    locale: currency.locale ?? null,
    thumbnail: currency.thumbnail ?? "",
    coverImage: currency.coverImage ?? "",
    bannerImage: currency.bannerImage ?? "",
    images: currency.images ?? [],
    video: currency.video ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    active: currency.active ?? true,
    isDefault: currency.isDefault ?? false,
  };
}
