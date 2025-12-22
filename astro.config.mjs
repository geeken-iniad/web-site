import { defineConfig } from 'astro/config';

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
});
