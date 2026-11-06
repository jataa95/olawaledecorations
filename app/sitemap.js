const siteUrl = "https://olawaledecorations.vercel.app";

export default function sitemap() {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/works`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
