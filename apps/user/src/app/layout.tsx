import type { Metadata } from "next";
import QueryClientProvider from "@/components/common/provider/query-provider";
import Layout from "@/components/common/layout";
import { HiThereThemeProvider } from "@hithere/styled-theme";
import useTheme from "@/hooks/theme/useTheme";
// import StyledComponentsRegistry from "@hithere/util";

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
      {/* <StyledComponentsRegistry> */}
        <QueryClientProvider>
          <HiThereThemeProvider theme={theme}>
              <Layout>
                {children}
              </Layout>
            </HiThereThemeProvider>
        </QueryClientProvider>
        {/* </StyledComponentsRegistry> */}
      </body>
    </html>
  );
}
