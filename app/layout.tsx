import type { Metadata } from "next";
import {
  getStructuredData,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anyanggoyangibunyang.vercel.app"),
  title: "안양고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
  description: "안양고양이분양 전문 안양고양이분양에서 건강하고 예쁜 고양이를 만나보세요. 투명한 분양 과정과 철저한 건강 관리로 평생 함께할 반려묘를 안심하고 선택하실 수 있습니다. 안양, 평촌, 산본 등 안양 전 지역 방문 환영.",
  keywords: ["안양고양이분양", "안양 고양이 분양", "평촌 고양이 분양", "산본 고양이 분양", "건강한 고양이 분양", "안양 반려묘 분양"],
  authors: [{ name: "안양고양이분양" }],
  creator: "안양고양이분양",
  publisher: "안양고양이분양",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://anyanggoyangibunyang.vercel.app",
    siteName: "안양고양이분양",
    title: "안양고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
    description: "안양고양이분양 전문 안양고양이분양에서 건강하고 예쁜 고양이를 만나보세요. 투명한 분양 과정과 철저한 건강 관리로 평생 함께할 반려묘를 안심하고 선택하실 수 있습니다. 안양, 평촌, 산본 등 안양 전 지역 방문 환영.",
    images: [{ url: "/https://anyanggoyangibunyang.vercel.app/images/landing/anyanggoyangibunyang/\uba54\uc778\ucfe4\ubd84\uc591KakaoTalk_20260509_154040995_09.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "안양고양이분양, 건강하고 사랑스러운 가족을 만나는 곳",
    description: "안양고양이분양 전문 안양고양이분양에서 건강하고 예쁜 고양이를 만나보세요. 투명한 분양 과정과 철저한 건강 관리로 평생 함께할 반려묘를 안심하고 선택하실 수 있습니다. 안양, 평촌, 산본 등 안양 전 지역 방문 환영.",
    images: ["/https://anyanggoyangibunyang.vercel.app/images/landing/anyanggoyangibunyang/\uba54\uc778\ucfe4\ubd84\uc591KakaoTalk_20260509_154040995_09.jpg"],
  },
  alternates: {
    canonical: "https://anyanggoyangibunyang.vercel.app",
  },
  category: "안양고양이분양",
  verification: {
    other: {
      "naver-site-verification": "PENDING",
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
        <meta name="naver-site-verification" content="PENDING" />
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
