import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config

// https://astro.build/config
export default defineConfig( {
  site: 'https://kevin-moreau.vercel.app',
  output: 'static',
  adapter: vercelStatic(),
  integrations: [ sitemap(), image( {
    serviceEntryPoint: '@astrojs/image/sharp'
  } ) ]
} );