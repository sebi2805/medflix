import { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://medflix.com",
      lastModified: new Date(),
    },
    {
      url: "https://medflix.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://medflix.com/contact",
      lastModified: new Date(),
    },
  ];
}
