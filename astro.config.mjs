// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";
const defaultLocale = "en";
const locales = {
    en: "en-US", // the `defaultLocale` value must present in `locales` keys
    fr: "fr-CA",
};
// https://astro.build/config
export default defineConfig( {
    site: "https://kevin-moreau.dev/",
    trailingSlash: "never",
    build: {
        format: "file",
    },
    integrations: [
        i18n( {
            locales,
            defaultLocale,
        } ),
        sitemap( {
            i18n: {
                locales,
                defaultLocale,
            },
            filter: filterSitemapByDefaultLocale( { defaultLocale } ),
        } ),
    ],
    vite: {
        plugins: [ tailwindcss() ],
    },
} );
