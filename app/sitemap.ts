import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace this with your actual domain once live on Vercel
  const baseUrl = "https://anandpopalwar.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // If you create separate pages for your major projects:
    // {
    //   url: `${baseUrl}/projects/gmr-energy`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/projects/mahindra-logistics`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
