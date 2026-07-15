import type { LocaleContent } from "../../config/locales";
type Experience = {
  title: string;
  infos: string;
  tags: {
    title: string;
    color: string;
  }[];
  content: string;
};
type i18nContent = {
  title: string;
  tldr: {
    title: string;
    content: string;
  };
  bac3: Experience;
  bac5: Experience;
  now: Experience;
};

const localeExperiencesPage = {
  en: {
    title: "Experiences",
    tldr: {
      title: "TL;DR",
      content: "",
    },
    bac3: {
      title: "Bac +3 //TODO",
      infos: "School : CESI | Company : Inetum | Oct. 2020 - Sep. 2023",
      tags: [
        {
          title: "Web development",
          color: "lightblue",
        },
        {
          title: "DevOps",
          color: "grey",
        },
        {
          title: "SQL",
          color: "//TODO",
        },
        {
          title: "NoSQL",
          color: "//TODO",
        },
        {
          title: "Azure",
          color: "blue",
        },
        {
          title: "Agile",
          color: "//TODO",
        },
      ],
      content: ``,
    },
    bac5: {
      title: "Bac +5 //TODO",
      infos: "School : CESI | Company : Inetum | Oct. 2023 - Sep. 2025",
      tags: [
        {
          title: "Project management",
          color: "lightblue",
        },
        {
          title: "Lean",
          color: "grey",
        },
      ],
      content: ``,
    },
    now: {
      title: "Now",
      infos: "Inetum Oct. 2025 - now",
      tags: [
        {
          title: "Project management",
          color: "lightblue",
        },
        {
          title: "Lean",
          color: "grey",
        },
      ],
      content: ``,
    },
  },
  fr: {
    title: "Experiences",
    tldr: {
      title: "Résumé",
      content:
        "Ayant été développeur en alternance de 2020 à 2025 (Bachelor CDA option DevOps puis Mastère) au sein d'une ESN, j'ai pu découvrir et m'adapter a énormément d'environnement.",
    },
    bac3: {
      title:
        "Bachelor Concepteur Développeur d'Application option DevOps en alternance",
      infos: "Ecole : CESI | Entreprise : Inetum | Oct. 2020 - Sep. 2023",
      tags: [
        {
          title: "Développement web",
          color: "lightblue",
        },
        {
          title: "DevOps",
          color: "grey",
        },
        {
          title: "SQL",
          color: "//TODO",
        },
        {
          title: "NoSQL",
          color: "//TODO",
        },
        {
          title: "Azure",
          color: "blue",
        },
        {
          title: "Agile",
          color: "//TODO",
        },
      ],
      content: ``,
    },
    bac5: {
      title: "Mastère en alternance",
      infos: "Ecole : CESI | Entreprise : Inetum | Oct. 2023 - Sep. 2025",
      tags: [
        {
          title: "Gestion de projet",
          color: "lightblue",
        },
        {
          title: "Lean",
          color: "grey",
        },
      ],
      content: ``,
    },
    now: {
      title: "CDI",
      infos: "Inetum Oct. 2025 - maintenant",
      tags: [
        {
          title: "Gestion de projet",
          color: "lightblue",
        },
        {
          title: "Lean",
          color: "grey",
        },
      ],
      content: ``,
    },
  },
} satisfies LocaleContent<i18nContent>;

export default localeExperiencesPage;
