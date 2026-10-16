import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { default: "Relay Lab", template: "%s | Relay Lab" },
  description: "A small test site for Relay's GitHub publishing checks.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a> · <a href="/about">About</a> ·{" "}
          <a href="/pricing">Pricing</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
