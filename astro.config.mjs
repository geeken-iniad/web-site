import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://geeken-iniad.github.io",
  base: "/web-site/",
  output: "static",

  env: {
    schema: {
      MICROCMS_SERVICE_DOMAIN: {
        type: "string",
    context: "server",
    access: "secret",
      },
      MICROCMS_API_KEY: {
        type: "string",
    context: "server",
    access: "secret",
      },
    },
  },

  // Astroの統合機能に一度任せるため
  // vite: {
  //   plugins: [tailwindcss()],
  // },

  integrations: [
    react(),
    tailwind(),
  ],
});