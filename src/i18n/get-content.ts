import type { Components } from "./config/components";
import type { LocaleKeys } from "./config/locales";
import type { Pages } from "./config/pages";
import i18nContent from "./content";
import type { I18nContent } from "./content";
import customGetLocale from "./get-locale";

const geti18nContent = {
  page: <T extends keyof I18nContent["pages"]>(
    page: T,
    url: URL,
  ): I18nContent["pages"][T][LocaleKeys] => {
    const locale = customGetLocale(url);
    const contentToReturn = i18nContent.pages[page][locale];
    return contentToReturn as I18nContent["pages"][T][LocaleKeys];
  },
  component: <T extends keyof I18nContent["components"]>(
    component: T,
    url: URL,
  ): I18nContent["components"][T][LocaleKeys] => {
    const locale = customGetLocale(url);
    const contentToReturn = i18nContent.components[component][locale];
    return contentToReturn as I18nContent["components"][T][LocaleKeys];
  },
};
export default geti18nContent;
