import type { Metadata } from "next";
import { MSWProvider } from "./providers/MSWProvider";
import { QueryProvider } from "./providers/QueryProvider";
import "@/shared/styles";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "내일의집",
  description: "감각적인 공간을 위한 고품질 가구 & 인테리어 쇼핑몰",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <MSWProvider>
          <QueryProvider>
            <Suspense>{children}</Suspense>
          </QueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
