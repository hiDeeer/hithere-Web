import type { Metadata } from "next";
import QueryClientProvider from "@/components/common/provider/query-provider";
import Layout from "@/components/common/layout";
import { HiThereThemeProvider } from "@hithere/styled-theme";

export const metadata: Metadata = {
  title: "HiThere",
  description: "HiThere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = "LIGHT"

  return (
    <html lang="ko">
      <body>       
        <QueryClientProvider>
          <HiThereThemeProvider theme={theme}>
              <Layout>
                {children}
              </Layout>
            </HiThereThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
