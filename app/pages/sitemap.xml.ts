import { GetServerSidePropsContext } from "next";

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const baseUrl = "https://trimio-eta.vercel.app";
  const date = new Date().toISOString();

  const urls = [
    { loc: `${baseUrl}/`, priority: "1.0" },
    { loc: `${baseUrl}/#services`, priority: "0.8" },
    { loc: `${baseUrl}/#contact`, priority: "0.9" },
    { loc: `${baseUrl}/politique-confidentialite`, priority: "0.3" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${date}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
