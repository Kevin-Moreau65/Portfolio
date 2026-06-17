import type { LocaleContent } from "../../config/locales";
type Project = {
  name: string;
  picture: string;
  description: string;
  access?: string;
  sourceCode: string;
};
type i18nContent = {
  projects: {
    coupleFilms: Project;
    // PokemonSwissKnife: Project;
    // Portfolio: Project;
    // INRSWebSite: Project;
  };
};

const localeContentProjectsPage = {
  en: {
    projects: {
      coupleFilms: {
        name: "Movies of us",
        description:
          "Simple website to track movies and series seen with my girlfriend (stats included !).",
        picture: "",
        sourceCode: "https://github.com/Kevin-Moreau65/NextFilm",
      },
    },
  },
  fr: {
    projects: {
      coupleFilms: {
        name: "Date films",
        description:
          "Site trackant les films et séries vu avec ma copine (incluaént des stats !).",
        picture: "",
        sourceCode: "https://github.com/Kevin-Moreau65/NextFilm",
      },
    },
  },
} as const satisfies LocaleContent<i18nContent>;

export default localeContentProjectsPage;
