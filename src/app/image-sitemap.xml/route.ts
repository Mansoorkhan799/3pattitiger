import { NextResponse } from 'next/server';

const baseUrl = 'https://3pattitigergame.com.pk';

const images = [
  { loc: '/3-patti-tiger.ico', title: '3 Patti Tiger Favicon', caption: '3 Patti Tiger site icon and favicon' },
  { loc: '/3-patti-tiger.webp', title: '3 Patti Tiger Logo', caption: "3 Patti Tiger - Pakistan's Premier Card Gaming Platform" },
  { loc: '/3-patti-tiger-logo.webp', title: '3 Patti Tiger Official Logo', caption: 'Official 3 Patti Tiger logo for social media and branding' },
  { loc: '/3-patti-tiger-game-interface.webp', title: '3 Patti Tiger Game Interface', caption: '3 Patti Tiger mobile app game interface and loading screen' },
  { loc: '/3-patti-tiger-game-2026.webp', title: '3 Patti Tiger Games Collection', caption: '3 Patti Tiger games collection showing Teen Patti, Rummy, Dragon vs Tiger and more' },
  { loc: '/3-patti-tiger-bonuses.webp', title: '3 Patti Tiger Bonuses & Rewards', caption: '3 Patti Tiger bonuses, rewards, and referral program interface' },
  { loc: '/3-patti-tiger-add-money.webp', title: '3 Patti Tiger Deposit Money', caption: '3 Patti Tiger deposit money interface with JazzCash and EasyPaisa payment methods' },
  { loc: '/3-patti-tiger-withdraw-money.webp', title: '3 Patti Tiger Withdraw Money', caption: '3 Patti Tiger withdraw money interface for fast withdrawals via JazzCash and EasyPaisa' },
  { loc: '/3-patti-tiger-refer-and-earn.webp', title: '3 Patti Tiger Refer and Earn', caption: '3 Patti Tiger referral program to earn money by inviting friends' },
  { loc: '/3-patti-tiger-free-spin.webp', title: '3 Patti Tiger Recharge Rebate', caption: '3 Patti Tiger recharge rebate and VIP bonus system' },
  { loc: '/3-patti-tiger-account.webp', title: '3 Patti Tiger Account Security', caption: '3 Patti Tiger account security and email binding interface' },
];

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const imageEntries = images
    .map(
      (img) => `    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
${imageEntries}
  </url>
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
