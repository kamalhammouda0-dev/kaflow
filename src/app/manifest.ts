import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Websites & AI-agents`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#3b5ef5",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
    ],
  };
}
