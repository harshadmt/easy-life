import type { Metadata, Viewport } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Easy Life Manager | Sayana Charitable Society',
  description:
    'A structured community empowerment and lifestyle management platform by Sayana Charitable Society. Access valuable products, financial support, work-from-home opportunities, and milestone progression.',
  keywords: [
    'Easy Life Manager',
    'Sayana Charitable Society',
    'Community Empowerment',
    'Work From Home Kerala',
    'Membership Plans',
    'Financial Assistance',
  ],
  authors: [{ name: 'Sayana Charitable Society' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#191c1d] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
