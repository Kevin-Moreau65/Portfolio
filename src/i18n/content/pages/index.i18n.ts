import type { LocaleContent } from "../../config/locales";

type i18nContent = {
  test: string;
};

const localeContentindexPage = {
  en: {
    test: "test en",
  },
  fr: {
    test: "test fr",
  },
} as const satisfies LocaleContent<i18nContent>;

export default localeContentindexPage;
