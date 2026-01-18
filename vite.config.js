import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/StoryGame/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "favicon-32x32.png", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Story Game",
        short_name: "StoryGame",
        description: "Fantasy választós játék",
        theme_color: "#0b1020",
        background_color: "#0b1020",
        display: "standalone",
        start_url: "/StoryGame/",
        scope: "/StoryGame/",
        icons: [
          {
            src: "/StoryGame/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/StoryGame/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/StoryGame/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },

      // fejlesztéshez (dev) is engedi a SW-t, könnyebb tesztelni
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
