import type { Metadata } from "next";
import QueryClientProvider from "@/components/common/provider/query-provider";
import Layout from "@/components/common/layout";
export const metadata: Metadata = {
  title: "HiDeeer",
  description: "HiDeeer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryClientProvider>
          <Layout>
            {children}
          </Layout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
