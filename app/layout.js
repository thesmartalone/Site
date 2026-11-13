import './globals.css';

const SITE_URL = 'https://bhimmajhi.github.io';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Bhim Majhi',
  description: 'Bhim Majhi — portrait, night aur landscape photography ki cinematic frames.',
  alternates: { canonical: '/' },
  icons: {
    icon: '/assets/images/logo.png',
    shortcut: '/favicon.ico',
    apple: '/assets/images/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Bhim Majhi',
    description: 'Portrait, night aur landscape photography.',
    url: SITE_URL,
    siteName: 'Bhim Majhi',
    images: ['/assets/images/photo1.jpg'],
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bhim Majhi',
    url: SITE_URL,
    sameAs: [
      'https://instagram.com/smrtalone',
      'https://facebook.com/Thesmartalone',
    ],
    jobTitle: 'Photographer',
  };

  return (
    <html lang="hi">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
