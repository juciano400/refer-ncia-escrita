import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Disable Cloudflare preset and target Vercel for production deploys.
// Lovable preview still works because the cloudflare plugin only runs at build time.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
});
