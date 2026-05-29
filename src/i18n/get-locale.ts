import { getLocale } from "astro-i18n-aut";
import type { LocaleKeys } from "./config/locales";

const customGetLocale = (url: URL): LocaleKeys => {
  return getLocale(url) as LocaleKeys;
};
export default customGetLocale;
