import type { Metadata } from "next";
import {
  getStructuredData,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anyangcat.dmcmusic.co.kr"),
  title: "안양고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
  description: "안양고양이분양 전문 안양고양이분양에서 건강하고 예쁜 고양이를 만나보세요. 투명한 분양 과정과 철저한 건강 관리로 평생 함께할 반려묘를 안심하고 선택하실 수 있습니다. 안양, 평촌, 산본 등 안양 전 지역 방문 환영.",
  keywords: ["https://anyangcat.dmcmusic.co.kr/"],
  authors: [{ name: "https://anyangcat.dmcmusic.co.kr/" }],
  creator: "https://anyangcat.dmcmusic.co.kr/",
  publisher: "https://anyangcat.dmcmusic.co.kr/",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://anyangcat.dmcmusic.co.kr",
    siteName: "https://anyangcat.dmcmusic.co.kr/",
    title: "안양고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
    description: "안양고양이분양 전문 안양고양이분양에서 건강하고 예쁜 고양이를 만나보세요. 투명한 분양 과정과 철저한 건강 관리로 평생 함께할 반려묘를 안심하고 선택하실 수 있습니다. 안양, 평촌, 산본 등 안양 전 지역 방문 환영.",
    images: [{ url: "/images/landing-01.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "안양고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
    description: "안양고양이분양 전문 안양고양이분양에서 건강하고 예쁜 고양이를 만나보세요. 투명한 분양 과정과 철저한 건강 관리로 평생 함께할 반려묘를 안심하고 선택하실 수 있습니다. 안양, 평촌, 산본 등 안양 전 지역 방문 환영.",
    images: ["/images/landing-01.jpg"],
  },
  alternates: {
    canonical: "https://anyangcat.dmcmusic.co.kr",
  },
  category: "https://anyangcat.dmcmusic.co.kr/",
  verification: {
    other: {
      "naver-site-verification": "56d17e3c5ee58f2da9214a65339204932ddf7733",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();

  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="56d17e3c5ee58f2da9214a65339204932ddf7733" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans pb-safe-floating lg:pb-0">{children}</body>
    </html>
  );
}
