import { defineConfig } from "astro/config";
import tailwindcss, { type PluginOptions } from "@tailwindcss/vite";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";
import { defaultLocale, locales } from "./src/i18n/config/locales";
// https://astro.build/config
export default defineConfig({
  site: "https://kevin-moreau.dev/",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
