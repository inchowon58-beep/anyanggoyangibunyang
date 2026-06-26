export const siteUrl = "https://anyanggoyangibunyang.vercel.app";

export const targetKeywords = ['안양고양이분양', '안양 고양이 분양', '평촌 고양이 분양', '산본 고양이 분양', '건강한 고양이 분양', '안양 반려묘 분양'] as const;

export const siteTitle = "안양고양이분양, 건강하고 사랑스러운 가족을 만나는 곳";

export const siteDescription =
  "안양고양이분양 전문 안양고양이분양에서 건강하고 예쁜 고양이를 만나보세요. 투명한 분양 과정과 철저한 건강 관리로 평생 함께할 반려묘를 안심하고 선택하실 수 있습니다. 안양, 평촌, 산본 등 안양 전 지역 방문 환영.";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "안양고양이분양",
        description: siteDescription,
        inLanguage: "ko-KR",
        telephone: "0505-464-1004",
        knowsAbout: [...targetKeywords],
      },
    ],
  };
}
