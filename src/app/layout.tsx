import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crazedev04.github.io/Dise-oIntegral"),
  title: "DB Diseño Integral | Diseño de interiores, renders y asesorías",
  description: "Diseño integral de espacios, interiores, fachadas, renders y asesorías online o presenciales para proyectos residenciales y comerciales.",
  keywords: [
    "diseño integral",
    "diseño de interiores",
    "renders",
    "fachadas",
    "asesoría de diseño",
    "proyectos residenciales",
    "proyectos comerciales",
    "diseño de espacios",
  ],
  authors: [{ name: "DB Diseño Integral" }],
  openGraph: {
    title: " Diseño Integral | Diseño de interiores, renders y asesorías",
    description: "Diseño integral de espacios, interiores, fachadas, renders y asesorías online o presenciales para proyectos residenciales y comerciales.",
    url: "https://dbdisenointegral.com",
    siteName: "DB Diseño Integral",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DB Diseño Integral",
    description: "Diseño integral de espacios, interiores, fachadas, renders y asesorías.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSerif.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "DB Diseño Integral",
              description: "Diseño integral de espacios, interiores, fachadas, renders y asesorías online o presenciales para proyectos residenciales y comerciales.",
              url: "https://dbdisenointegral.com",
              sameAs: [
                "https://www.instagram.com/db.disenointegral/",
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="bg-bg text-text">
        {children}
      </body>
    </html>
  );
}