import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig( {
  site: 'https://kevin-moreau.vercel.app',
  integrations: [ svelte(), sitemap(), image( {
    serviceEntryPoint: '@astrojs/image/sharp'
  } ) ]
} );