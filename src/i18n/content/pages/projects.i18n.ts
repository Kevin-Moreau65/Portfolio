import type { LocaleContent } from "../../config/locales";
import MoviesOfUsScreenshot from "../../../assets/projects/movies-of-us.png?url";
import PokemonSwissKnifeScreenshot from "../../../assets/projects/pokemon-swiss-knife.png?url";
type Project = {
  name: string;
  picture: string;
  description: string;
  access: string;
  sourceCode: string;
};
type i18nContent = {
  projects: {
    CoupleFilms: Project;
    PokemonSwissKnife: Project;
    // Portfolio: Project;
    // INRSWebSite: Project;
  };
};

const localeContentProjectsPage = {
  en: {
    projects: {
      CoupleFilms: {
        name: "Movies of us",
        description:
          "Simple website to track movies and series seen with my girlfriend (stats included !).",
        picture: MoviesOfUsScreenshot,
        sourceCode: "https://github.com/Kevin-Moreau65/NextFilm",
        access: "https://next-film.kevin-moreau.dev",
      },
      PokemonSwissKnife: {
        name: "Pokemon swiss knife",
        access: "https://pokemon-swiss-knife.kevin-moreau.dev",
        description:
          "A tool to know strength and weakness of a combinaison of types of pokemon.",
        picture: PokemonSwissKnifeScreenshot,
        sourceCode: "https://github.com/Kevin-Moreau65/pokemon-swiss-knife",
      },
    },
  },
  fr: {
    projects: {
      CoupleFilms: {
        name: "Date films",
        description:
          "Site trackant les films et séries vu avec ma copine (incluaént des stats !).",
        picture: MoviesOfUsScreenshot,
        sourceCode: "https://github.com/Kevin-Moreau65/NextFilm",
        access: "https://next-film.kevin-moreau.dev",
      },
      PokemonSwissKnife: {
        name: "TODO",
        access: "https://pokemon-swiss-knife.kevin-moreau.dev",
        description: "TODO",
        picture: PokemonSwissKnifeScreenshot,
        sourceCode: "https://github.com/Kevin-Moreau65/pokemon-swiss-knife",
      },
    },
  },
} satisfies LocaleContent<i18nContent>;

export default localeContentProjectsPage;
