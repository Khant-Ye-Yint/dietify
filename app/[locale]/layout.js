import './globals.css';
import '@fontsource/lobster-two';
import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';
import '@fontsource/odibee-sans';

import Header from '@/components/header';

import { notFound } from 'next/navigation';

const locales = ['en', 'mm'];

export const metadata = {
  title: 'Dietify',
  description: 'Identify your food nutritions with natural language',
};

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale}>
      <body className="font-montserrat text-night">
        <div className="flex flex-col items-center justify-between min-h-screen bg-white">
          <Header />
          <div className="container flex-1 px-5">{children}</div>
          <footer className="flex items-center justify-center min-h-[10vh]">
            <p className="text-center">
              khantyeyint &copy; {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
