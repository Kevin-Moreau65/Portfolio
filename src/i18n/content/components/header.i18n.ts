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
  experiences: {
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
    experiences: {
      href: "/experiences.html",
      text: "Experiences",
    },
  },
  fr: {
    home: {
      href: "/fr.html",
      text: "Accueil",
    },
    projects: {
      href: "/fr/projects.html",
      text: "Projets",
    },
    experiences: {
      href: "/fr/experiences.html",
      text: "Expériences",
    },
  },
} as const satisfies LocaleContent<i18nContent>;

export default localeContentHeaderComponent;
