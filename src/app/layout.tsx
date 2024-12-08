import type { Metadata } from "next";
import "@/shared/styles";
import { QueryProvider } from "@/shared/components/QueryProvider";

export const metadata: Metadata = {
  title: "쇼핑을 쉽게, 스타일링은 즐겁게! 오늘의집 쇼핑",
  description:
    "가구 · 소품은 물론 이제 가전, 주방용품, 데코/식물, 생활용품, 생필품, 반려동물, 캠핑용품, 실내운동까지 모두 '쇼핑'에 있어요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
