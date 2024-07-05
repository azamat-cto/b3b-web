import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

type RootLayoutProps = {
  children: Readonly<React.ReactNode>;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
