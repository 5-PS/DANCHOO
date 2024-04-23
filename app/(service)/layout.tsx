import Gnb from '@/components/gnb/gnb';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Gnb />
      {children}
    </>
  );
}
