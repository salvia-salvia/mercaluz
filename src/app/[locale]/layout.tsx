import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  if (locale === "es") {
    return {
      title: "Mercaluz - Exportación marroquí de mariscos de alta calidad",
      description:
        "Mercaluz es una empresa marroquí de confianza especializada en la exportación de mariscos de alta calidad a mercados internacionales. Ubicada en Safi, ofrecemos pescado fresco y congelado cumpliendo normas internacionales de seguridad alimentaria y sostenibilidad.",
      keywords:
        "Mercaluz, exportación mariscos, pescado fresco Marruecos, pescado congelado, Safi, seguridad alimentaria, sostenibilidad, exportación marroquí, mariscos de alta calidad",
      authors: [{ name: "Mercaluz" }],
      openGraph: {
        title: "Mercaluz - Exportación marroquí de mariscos de alta calidad",
        description:
          "Empresa marroquí ubicada en Safi, que garantiza calidad y sostenibilidad en la exportación de mariscos frescos y congelados a Europa, Asia, África, América y Oriente Medio.",
        type: "website",
        locale: "es_ES",
      },
      twitter: {
        card: "summary_large_image",
        title: "Mercaluz - Exportación marroquí de mariscos de alta calidad",
        description:
          "Calidad y transparencia en la exportación de mariscos desde Marruecos hacia mercados internacionales.",
      },
    };
  } else if (locale === "fr") {
    return {
      title:
        "Mercaluz - Exportateur marocain de produits de la mer haut de gamme",
      description:
        "Mercaluz est une entreprise marocaine basée à Safi, spécialisée dans l’exportation de poissons frais et surgelés vers les marchés internationaux. Qualité, sécurité alimentaire et durabilité garanties.",
      keywords:
        "Mercaluz, exportation produits de la mer, poissons frais Maroc, poissons surgelés, Safi, produits de la mer haut de gamme, export Maroc, sécurité alimentaire, durabilité, export poisson Afrique, export poisson Europe",
      authors: [{ name: "Mercaluz" }],
      openGraph: {
        title:
          "Mercaluz - Exportateur marocain de produits de la mer haut de gamme",
        description:
          "Entreprise marocaine basée à Safi, exportant poissons frais et surgelés vers l’Europe, Asie, Afrique, Amérique et Moyen-Orient.",
        type: "website",
        locale: "fr_FR",
      },
      twitter: {
        card: "summary_large_image",
        title:
          "Mercaluz - Exportateur marocain de produits de la mer haut de gamme",
        description:
          "Exportation de produits de la mer frais et surgelés depuis le Maroc, avec contrôle qualité rigoureux et respect des normes internationales.",
      },
    };
  }

  return {
    title: "Mercaluz - Trusted Moroccan Premium Seafood Exporter",
    description:
      "Mercaluz is a trusted Moroccan company specializing in the export of premium-quality seafood to international markets. Located in Safi, we source fresh and frozen fish from major Moroccan ports, ensuring quality and sustainability.",
    keywords:
      "Mercaluz, seafood export, Moroccan seafood, fresh fish Morocco, frozen fish Morocco, Safi port, food safety, sustainability, premium seafood export",
    authors: [{ name: "Mercaluz" }],
    openGraph: {
      title: "Mercaluz - Trusted Moroccan Premium Seafood Exporter",
      description:
        "Based in Safi, Mercaluz exports fresh and frozen seafood worldwide with strict quality control and adherence to global safety standards.",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mercaluz - Trusted Moroccan Premium Seafood Exporter",
      description:
        "Mercaluz delivers premium seafood from Morocco to global markets with quality, transparency, and sustainability.",
    },
  };
};
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
