const BASE = "https://3pattitigergame.com.pk";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export type FaqItem = {
  question: string;
  answer: string;
};

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  breadcrumbOnly?: boolean;
  /** Key summary or first 2-3 paragraphs for AI parsing and articleBody */
  articleBody?: string;
  /** FAQ items for FAQPage rich result */
  faqItems?: FaqItem[];
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = `${BASE}/3-patti-tiger-logo.webp`,
  breadcrumbOnly = false,
  articleBody,
  faqItems,
}: BlogPostSchemaProps) {
  const url = `${BASE}/blog/${slug}`;
  const today = new Date().toISOString();
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };
  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    image,
    author: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "3 Patti Tiger",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "3 Patti Tiger",
      logo: { "@type": "ImageObject", url: `${BASE}/3-patti-tiger-logo.webp` },
    },
    datePublished,
    dateModified: dateModified ?? today,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-US",
    isPartOf: { "@id": `${BASE}/#website` },
    ...(articleBody && { articleBody }),
  };

  const faqSchema = faqItems && faqItems.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      }
    : null;

  return (
    <div suppressHydrationWarning style={{ display: "contents" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      {!breadcrumbOnly && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
      )}
    </div>
  );
}
