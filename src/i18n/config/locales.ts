export const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  fr: "fr-CA",
} as const satisfies Record<string, string>;
export type LocaleKeys = keyof typeof locales;
export const defaultLocale = "en" as const satisfies keyof typeof locales;
export type LocaleContent<T extends {}> = { [x in LocaleKeys]: T };
