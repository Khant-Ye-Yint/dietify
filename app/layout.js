import './globals.css';
import '@fontsource/lobster-two';
import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';
import '@fontsource/odibee-sans';

import Link from 'next/link';

export const metadata = {
  title: 'Dietify',
  description: 'Identify your food nutritions with natural language',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat text-night">
        <div className="flex flex-col items-center justify-between min-h-screen bg-white">
          <header className="flex justify-center items-center min-h-[10vh]">
            <Link href="/">
              <h1 className="text-4xl font-bold text-center cursor-pointer font-lobster">
                Dietify
              </h1>
            </Link>
          </header>
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
