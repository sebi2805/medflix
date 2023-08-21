import { MetadataRoute } from "next";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://medflix.education",
      lastModified: new Date(),
    },
    {
      url: "https://medflix.education/services",
      lastModified: new Date(),
    },
    {
      url: "https://medflix.education/contact",
      lastModified: new Date(),
    },
  ];
}
