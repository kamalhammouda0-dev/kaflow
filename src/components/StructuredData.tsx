import { SITE } from "@/lib/seo";

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    identifier: {
      "@type": "PropertyValue",
      name: "KvK-nummer",
      value: SITE.kvk,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.latitude,
      longitude: SITE.longitude,
    },
    areaServed: [
      { "@type": "State", name: "Gelderland" },
      { "@type": "Country", name: "Nederland" },
      ...SITE.regionCities.map((city) => ({ "@type": "City", name: city })),
    ],
    knowsAbout: ["Webdesign", "Webontwikkeling", "AI-agents", "Automatisering", "SEO"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Websites op maat",
          description:
            "Maatwerk websites voor ZZP'ers en MKB, ontworpen en gebouwd rond het merk en de werkwijze van de klant.",
          areaServed: { "@type": "Country", name: "Nederland" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-agents & automatisering",
          description:
            "Ontwikkeling van AI-agents en automatiseringen die terugkerend werk overnemen, zoals klantcontact, leadopvolging en administratie.",
          areaServed: { "@type": "Country", name: "Nederland" },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqSchema({ items }: { items: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
