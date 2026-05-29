import type { LocaleKeys } from "./config/locales";
import type { Pages } from "./config/pages";
import i18nContent from "./content";
import type { I18nContent } from "./content";
import customGetLocale from "./get-locale";

const geti18nContent = (
  page: Pages,
  url: URL,
): I18nContent[typeof page][LocaleKeys] => {
  const locale = customGetLocale(url);
  const contentToReturn = i18nContent[page][locale];
  return contentToReturn;
};

export default geti18nContent;
