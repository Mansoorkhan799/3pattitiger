import { MetadataRoute } from "next";

const BASE = "https://3pattitigergame.com.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${BASE}/3-patti-tiger.webp`,
        `${BASE}/3-patti-tiger-logo.webp`,
        `${BASE}/feature/og-image.webp`,
      ],
    },
    {
      url: `${BASE}/download-3-patti-tiger`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/deposit-money-in-3-patti-tiger`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${BASE}/3-patti-tiger-add-money.webp`],
    },
    {
      url: `${BASE}/withdraw-money-from-3-patti-tiger`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${BASE}/3-patti-tiger-withdraw-money.webp`],
    },
    {
      url: `${BASE}/3-patti-tiger-for-pc`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/about-us-3-patti-tiger-pakistan`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${BASE}/3-patti-tiger-logo.webp`],
    },
    {
      url: `${BASE}/contact-us-3-patti-tiger-pakistan`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/privacy-3-patti-tiger-pakistan`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE}/disclaimer-3-patti-tiger-pakistan`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },

    // Blog posts
    {
      url: `${BASE}/blog/3-patti-tiger-app-review-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/is-3-patti-tiger-real-or-fake`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/create-3-patti-tiger-account-and-login`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger-account.webp`],
    },
    {
      url: `${BASE}/blog/tips-to-win-big-in-3-patti-tiger`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/how-to-use-3-patti-tiger-app-pakistan-guide-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/dragon-vs-tiger-andar-bahar-high-payout-games`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger-game-interface.webp`],
    },
    {
      url: `${BASE}/blog/is-3-patti-tiger-safe-legal-pakistan`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/3-patti-tiger-bonuses-vip-guide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger-bonuses.webp`],
    },
    {
      url: `${BASE}/blog/3-patti-tiger-tips-10-smart-tricks`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/responsible-gaming-guide-3-patti-tiger`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/3patti-blue-vs-3-patti-tiger`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/3patti-gold-vs-3-patti-tiger`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/3patti-lucky-vs-3-patti-tiger`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/3patti-room-vs-3-patti-tiger`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/ips-exceed-issue-3-patti-tiger-how-to-fix`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/3-patti-tiger-old-version-features-review-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/3-patti-tiger-latest-version-new-features-2026-updates`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
    {
      url: `${BASE}/blog/ways-to-earn-money-with-3-patti-tiger-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE}/3-patti-tiger.webp`],
    },
  ];
}
