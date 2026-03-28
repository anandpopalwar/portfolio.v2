import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Disallow private or draft folders if you have them
      disallow: ["/private/", "/api/"],
    },
    sitemap: "https://anandpopalwar-portfolio-v2.vercel.app/sitemap.xml",
  };
}
