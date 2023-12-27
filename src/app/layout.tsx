"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import { LoadingPage } from "src/components";
import { AuthContextProvider } from "src/contexts/AuthContext";
import GlobalStyles from "src/styles/globalStyles";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <html
        lang="pt-br"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          style={{
            minHeight: "100vh",
            width: "100vw",
            padding: 0,
            margin: 0,
            color: "#d8d3cf",
            backgroundColor: "#272c30",
            boxSizing: "border-box",
          }}
        >
          <AuthContextProvider>
            {isClient ? children : <LoadingPage />}
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
          </AuthContextProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
