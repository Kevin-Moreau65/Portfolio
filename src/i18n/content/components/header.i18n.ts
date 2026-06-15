import type { LocaleContent } from "../../config/locales";

type i18nContent = {
  home: {
    text: string;
    href: string;
  };
  projects: {
    text: string;
    href: string;
  };
};

const localeContentHeaderComponent = {
  en: {
    home: {
      href: "/",
      text: "Home",
    },
    projects: {
      href: "/projects",
      text: "Projects",
    },
  },
  fr: {
    home: {
      href: "/fr",
      text: "Acceuil",
    },
    projects: {
      href: "/fr/projects",
      text: "Projets",
    },
  },
} as const satisfies LocaleContent<i18nContent>;

export default localeContentHeaderComponent;
