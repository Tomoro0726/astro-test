// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
    assets: "_custom",
  },
  base: "/astro-test",
  site: "https://tomoro0726.github.io",
});
