import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3pattitigergame.com.pk';
  
  // Define page type
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };
  
  // Main pages with high priority
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/3-patti-tiger.webp',
          title: '3 Patti Tiger Logo',
          caption: 'The official logo of 3 Patti Tiger gaming platform'
        },
        {
          loc: '/3-patti-tiger-logo.webp',
          title: '3 Patti Tiger Hero Image',
          caption: '3 Patti Tiger gaming platform showcase'
        }
      ]
    },
    {
      url: '/download-3-patti-tiger',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/3-patti-tiger.webp',
          title: 'Download 3 Patti Tiger',
          caption: 'Download 3 Patti Tiger APK for Android'
        }
      ]
    },
    {
      url: '/deposit-money-in-3-patti-tiger',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/withdraw-money-from-3-patti-tiger',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/3-patti-tiger-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/3-patti-tiger.webp',
          title: '3 Patti Tiger for PC',
          caption: 'Play 3 Patti Tiger on PC using Android Emulator'
        }
      ]
    },
    {
      url: '/about-us-3-patti-tiger-pakistan',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/3-patti-tiger.webp',
          title: 'About Us 3 Patti Tiger Pakistan',
          caption: 'Learn about 3 Patti Tiger Pakistan gaming platform'
        }
      ]
    },
    {
      url: '/blog',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/3-patti-tiger.webp',
          title: '3 Patti Tiger Blog',
          caption: 'Guides and tutorials for 3 Patti Tiger gaming platform'
        }
      ]
    },
    {
      url: '/contact-us-3-patti-tiger-pakistan',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/privacy-3-patti-tiger-pakistan',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    },
    {
      url: '/disclaimer-3-patti-tiger-pakistan',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    }
  ];

  // Blog posts (all live blog routes)
  const blogPosts: PageType[] = [
    { url: '/blog/is-3-patti-tiger-real-or-fake', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/create-3-patti-tiger-account-and-login', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/tips-to-win-big-in-3-patti-tiger', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/how-to-use-3-patti-tiger-app-pakistan-guide-2026', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/dragon-vs-tiger-andar-bahar-high-payout-games', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/is-3-patti-tiger-safe-legal-pakistan', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3-patti-tiger-bonuses-vip-guide', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3-patti-tiger-tips-10-smart-tricks', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/responsible-gaming-guide-3-patti-tiger', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3-patti-tiger-app-review-2026', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.9 },
    { url: '/blog/3patti-blue-vs-3-patti-tiger', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3patti-gold-vs-3-patti-tiger', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3patti-lucky-vs-3-patti-tiger', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3patti-room-vs-3-patti-tiger', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/ips-exceed-issue-3-patti-tiger-how-to-fix', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3-patti-tiger-old-version-features-review-2026', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/3-patti-tiger-latest-version-new-features-2026-updates', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/ways-to-earn-money-with-3-patti-tiger-2026', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 }
  ];

  // Only include existing pages
  const allPages = [...mainPages, ...blogPosts];
  
  // Generate XML with mobile and image extensions
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
} 