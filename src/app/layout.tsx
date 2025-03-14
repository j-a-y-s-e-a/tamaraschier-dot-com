import "~/styles/globals.css";

import { type Metadata } from "next";
import { PostHogProvider } from "~/app/analytics/providers";
import { PageLayout } from "~/components/layout/page-layout";

export const metadata: Metadata = {
  title: "Tamara Schier | Product Designer",
  description: "Tamara Schier, Product Designer",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PostHogProvider>
          <PageLayout>
            {children}
          </PageLayout>
        </PostHogProvider>
      </body>
    </html>
  );
}
