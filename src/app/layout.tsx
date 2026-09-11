import type { Metadata, Viewport } from 'next';
import {
  defaultMeta,
  organizationSchema,
  webSiteSchema,
  SITE_NAME,
  SITE_URL,
  SITE_LOGO_ICON,
  SITE_OG_IMAGE,
} from '@/config/meta.config';

// ============================================================
// Metadata
// ============================================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: defaultMeta.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultMeta.description,
  keywords: defaultMeta.keywords,

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: SITE_URL,
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${defaultMeta.title}`,
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: 'summary_large_image',
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [SITE_OG_IMAGE],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Иконки — Next.js сам сгенерирует <link rel="icon">
  icons: {
    icon: '/images/logo/ico-logo.svg',
    shortcut: '/images/logo/ico-logo.svg',
    apple: '/images/logo/ico-logo.svg',
  },

  // PWA
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: SITE_NAME,
  },

  verification: {
    // google: 'твой-код-из-google-search-console',
    // yandex: 'твой-код-из-яндекс-вебмастера',
  },

  category: 'automotive',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

// ============================================================
// Стили и провайдеры
// ============================================================
import '@/assets/styles/main.scss';
import styles from './layout.module.scss';
import Providers from './providers';
import ScrollToTop from './ScrollToTop';
import ThemeScript from '@/assets/utils/theme';
import JsonLd from './components/JsonLd/JsonLd';
import YandexMetrika from './components/yandex-metrika/block';

// ============================================================
// Layout
// ============================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={styles.layout} suppressHydrationWarning>
      <head>
        {/* JSON-LD — структурированные данные */}
        <JsonLd data={webSiteSchema} />
        <JsonLd data={organizationSchema} />
        <meta name="google-site-verification" content="3_mfEeZLIa5Mpj8mgCuTKbx75N0CJ2uHEpy3-PA5uAs" />
      </head>

      <body className={styles.container} suppressHydrationWarning>
        <ThemeScript />
        <Providers>{children}</Providers>
        <ScrollToTop />
        <YandexMetrika />
      </body>
    </html>
  );
}