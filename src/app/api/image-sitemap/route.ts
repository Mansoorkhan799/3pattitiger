import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://3pattitigergame.com.pk';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger.ico</image:loc>
      <image:title>3 Patti Tiger Favicon</image:title>
      <image:caption>3 Patti Tiger site icon and favicon</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger.webp</image:loc>
      <image:title>3 Patti Tiger Logo</image:title>
      <image:caption>3 Patti Tiger - Pakistan's Premier Card Gaming Platform</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger-logo.webp</image:loc>
      <image:title>3 Patti Tiger Official Logo</image:title>
      <image:caption>Official 3 Patti Tiger logo for social media and branding</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger-game-interface.webp</image:loc>
      <image:title>3 Patti Tiger Game Interface</image:title>
      <image:caption>3 Patti Tiger mobile app game interface and loading screen</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger-game-2026.webp</image:loc>
      <image:title>3 Patti Tiger Games Collection</image:title>
      <image:caption>3 Patti Tiger games collection showing Teen Patti, Rummy, Dragon vs Tiger and more</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger-bonuses.webp</image:loc>
      <image:title>3 Patti Tiger Bonuses &amp; Rewards</image:title>
      <image:caption>3 Patti Tiger bonuses, rewards, and referral program interface</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger-add-money.webp</image:loc>
      <image:title>3 Patti Tiger Deposit Money</image:title>
      <image:caption>3 Patti Tiger deposit money interface with JazzCash and EasyPaisa payment methods</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger-withdraw-money.webp</image:loc>
      <image:title>3 Patti Tiger Withdraw Money</image:title>
      <image:caption>3 Patti Tiger withdraw money interface for fast withdrawals via JazzCash and EasyPaisa</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger-refer-and-earn.webp</image:loc>
      <image:title>3 Patti Tiger Refer and Earn</image:title>
      <image:caption>3 Patti Tiger referral program to earn money by inviting friends</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger-free-spin.webp</image:loc>
      <image:title>3 Patti Tiger Recharge Rebate</image:title>
      <image:caption>3 Patti Tiger recharge rebate and VIP bonus system</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/3-patti-tiger-account.webp</image:loc>
      <image:title>3 Patti Tiger Account Security</image:title>
      <image:caption>3 Patti Tiger account security and email binding interface</image:caption>
    </image:image>
  </url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
