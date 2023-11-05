import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}