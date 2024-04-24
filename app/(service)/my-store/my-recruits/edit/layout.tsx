import { ReactNode } from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Julge',
  description: 'The Julge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <body className="bg-gary-5">{children}</body>;
}
