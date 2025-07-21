import type React from "react";
import { CssBaseline } from "@mui/material";
import "../app/globals.css"; // Import global CSS
import { Providers } from "@components/providers";
import { AppLayout } from "@/components/common/app-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CssBaseline />
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
