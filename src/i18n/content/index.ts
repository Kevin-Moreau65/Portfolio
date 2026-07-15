import type { Components } from "../config/components";
import type { Pages } from "../config/pages";
import localeContentHeaderComponent from "./components/header.i18n";
import localeContentExperiencesPage from "./pages/experiences.i18n";
import localeContentindexPage from "./pages/index.i18n";
import localeContentProjectsPage from "./pages/projects.i18n";

const i18nContent = {
  pages: {
    index: localeContentindexPage,
    projects: localeContentProjectsPage,
    experiences: localeContentExperiencesPage,
  },
  components: {
    header: localeContentHeaderComponent,
  },
} as const satisfies {
  pages: Record<Pages, object>;
  components: Record<Components, object>;
};
export type I18nContent = typeof i18nContent;

export default i18nContent;
