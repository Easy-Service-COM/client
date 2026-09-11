import { NextResponse } from 'next/server';

const BASE_URL = 'https://easytronicservice.ru';

export async function GET() {
  const urls = [
    {
      loc: BASE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: '1.0',
    },
    {
      loc: `${BASE_URL}/catalog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: '0.8',
    },
    {
      loc: `${BASE_URL}/durashift-oshibka-p1607`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: '0.7',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}