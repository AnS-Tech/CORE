"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthContextProvider } from "src/contexts/AuthContext";
import GlobalStyles from "src/styles/globalStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <html
        lang="pt-br"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <body
          style={{
            height: "100%",
            width: "100%",
            padding: 0,
            margin: 0,
            color: "#d8d3cf",
            backgroundColor: "#272c30",
          }}
        >
          <AuthContextProvider>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
          </AuthContextProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
