import "~/styles/globals.css";

import { type Metadata } from "next";
import { PostHogProvider } from "~/app/analytics/providers";
import { Layout } from "~/components/layout";

export const metadata: Metadata = {
  title: "Tamara Schier | Product Designer",
  description: "Tamara Schier, Product Designer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PostHogProvider>
          <Layout>
            {children}
          </Layout>
        </PostHogProvider>
      </body>
    </html>
  );
}
