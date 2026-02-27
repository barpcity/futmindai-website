import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030303",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://futmind.ai"),
  title: {
    default: "Futmind AI | Yapay Zeka & Özel Yazılım Çözümleri — Türkiye",
    template: "%s | Futmind AI",
  },
  description:
    "Türkiye merkezli yapay zeka yazılım şirketi. Kurumsal AI danışmanlığı, özel yazılım geliştirme, LLM entegrasyonu, otomasyon ve dijital dönüşüm çözümleri sunuyoruz. 50+ başarılı proje, %98 müşteri memnuniyeti.",
  keywords: [
    "yapay zeka yazılım şirketi",
    "AI danışmanlığı Türkiye",
    "özel yazılım geliştirme",
    "LLM entegrasyonu",
    "ChatGPT entegrasyonu",
    "kurumsal AI çözümleri",
    "dijital dönüşüm",
    "otomasyon yazılımı",
    "SaaS geliştirme",
    "React Next.js geliştirme",
    "AI chatbot geliştirme",
    "RAG sistemi",
    "veri analitiği",
    "Futmind AI",
    "futmind",
  ],
  authors: [{ name: "Futmind AI Technologies" }],
  creator: "Futmind AI Technologies",
  publisher: "Futmind AI Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://futmind.ai",
    siteName: "Futmind AI",
    title: "Futmind AI | Yapay Zeka & Özel Yazılım Çözümleri",
    description:
      "Kurumsal AI danışmanlığı, özel yazılım geliştirme ve dijital dönüşüm çözümleri. 50+ başarılı proje ile Türkiye'nin lider AI yazılım şirketi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Futmind AI — Yapay Zeka ile Geleceği İnşa Ediyoruz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futmind AI | Yapay Zeka & Özel Yazılım Çözümleri",
    description:
      "Kurumsal AI danışmanlığı, özel yazılım geliştirme ve dijital dönüşüm çözümleri. Türkiye'nin lider AI yazılım şirketi.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Extract and await locale from params
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!['tr', 'en'].includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <GoogleAnalytics gaId="G-SNX2J6HCTM" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
