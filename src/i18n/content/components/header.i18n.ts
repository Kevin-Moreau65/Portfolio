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
      href: "/index.html",
      text: "Home",
    },
    projects: {
      href: "/projects.html",
      text: "Projects",
    },
  },
  fr: {
    home: {
      href: "/fr.html",
      text: "Acceuil",
    },
    projects: {
      href: "/fr/projects.html",
      text: "Projets",
    },
  },
} as const satisfies LocaleContent<i18nContent>;

export default localeContentHeaderComponent;
