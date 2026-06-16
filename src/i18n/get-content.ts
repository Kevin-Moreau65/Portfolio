import type { Components } from "./config/components";
import type { LocaleKeys } from "./config/locales";
import type { Pages } from "./config/pages";
import i18nContent from "./content";
import type { I18nContent } from "./content";
import customGetLocale from "./get-locale";

const geti18nContent = {
  page: (
    page: Pages,
    url: URL,
  ): I18nContent["pages"][typeof page][LocaleKeys] => {
    const locale = customGetLocale(url);
    const contentToReturn = i18nContent.pages[page][locale];
    return contentToReturn;
  },
  component: (
    component: Components,
    url: URL,
  ): I18nContent["components"][typeof component][LocaleKeys] => {
    const locale = customGetLocale(url);
    const contentToReturn = i18nContent.components[component][locale];
    return contentToReturn;
  },
};

export default geti18nContent;
