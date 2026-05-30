export type Locale = "ja" | "en";

export type LocaleOption = {
  locale: Locale;
  label: string;
};

export const defaultLocale: Locale = "ja";
