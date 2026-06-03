import type { LocaleContent } from "../../config/locales";

type i18nContent = {
  tags: {
    devops: string;
    devFullstack: string;
    techEntusiast: string;
  };
  quotation: string;
  description: string;
  titles: {
    whoAmI: string;
  };
  alts: {
    face: string;
  };
};

const localeContentindexPage = {
  en: {
    tags: {
      devops: "DevOps",
      devFullstack: "Fullstack developer",
      techEntusiast: "Tech entusiast",
    },
    description: `Mauris varius est sit amet urna faucibus blandit. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Maecenas ut ullamcorper sapien, at venenatis justo. Sed
          sodales accumsan est, ut molestie libero blandit congue. Aenean eget
          dapibus ipsum. Duis semper malesuada velit, eu auctor arcu hendrerit
          a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          a odio ac odio gravida porta eu eget ante. Aenean interdum eget dui
          vehicula luctus. Proin non ultrices nunc. Nulla congue magna at
          lacinia interdum. Integer venenatis dolor ut sem ultrices, vitae
          bibendum urna consequat. Proin turpis ipsum, ullamcorper ac
          condimentum vel, pretium ac nunc. Nulla nec mauris dolor. Aenean
          commodo leo eu scelerisque interdum.`,
    quotation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
          eleifend augue. Nullam lacus sem.`,
    titles: {
      whoAmI: "Who am I ?",
    },
    alts: {
      face: "Me",
    },
  },
  fr: {
    tags: {
      devops: "DevOps",
      devFullstack: "Développeur fullstack",
      techEntusiast: "Curieux de la tech",
    },
    description: `Mauris varius est sit amet urna faucibus blandit. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Maecenas ut ullamcorper sapien, at venenatis justo. Sed
          sodales accumsan est, ut molestie libero blandit congue. Aenean eget
          dapibus ipsum. Duis semper malesuada velit, eu auctor arcu hendrerit
          a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          a odio ac odio gravida porta eu eget ante. Aenean interdum eget dui
          vehicula luctus. Proin non ultrices nunc. Nulla congue magna at
          lacinia interdum. Integer venenatis dolor ut sem ultrices, vitae
          bibendum urna consequat. Proin turpis ipsum, ullamcorper ac
          condimentum vel, pretium ac nunc. Nulla nec mauris dolor. Aenean
          commodo leo eu scelerisque interdum.`,
    quotation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
          eleifend augue. Nullam lacus sem.`,
    titles: {
      whoAmI: "Qui suis-je ?",
    },
    alts: {
      face: "Moi",
    },
  },
} as const satisfies LocaleContent<i18nContent>;

export default localeContentindexPage;
