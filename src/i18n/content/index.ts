import type { Pages } from "../config/pages";
import localeContentindexPage from "./pages/index.i18n";

const i18nContent = { index: localeContentindexPage } as const satisfies Record<
  Pages,
  object
>;
export type I18nContent = typeof i18nContent;
export default i18nContent;
