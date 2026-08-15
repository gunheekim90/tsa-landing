export const GA_MEASUREMENT_ID = 'G-14Y2FCV8KK';

/** Google Ads 전환 ID — index.html에서 gtag('config', ...)로 함께 로드됨 */
export const ADS_CONVERSION_ID = 'AW-18267771264';

/**
 * Google Ads 전환 액션 라벨.
 * `lead` = 광고 계정의 "리드 양식 제출"(SUBMIT_LEAD_FORM, ID 7677367112).
 * 라벨은 Google Ads > 전환 > 액션에서 태그 스니펫을 열면 확인할 수 있습니다.
 */
export const ADS_CONVERSION_LABELS = {
  lead: 'e7uzCMim7cwcEICj4IZE',
} as const;

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params?: Record<string, string | number>) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
}

/**
 * Google Ads 전환 전송.
 * ⚠ 실제로 전환이 성립한 시점(예: 문의 전송 성공 응답)에서만 호출할 것 —
 * 제출 시도 시점에 부르면 실패한 제출까지 전환으로 집계됩니다.
 */
export function trackAdsConversion(
  label: keyof typeof ADS_CONVERSION_LABELS,
  params?: Record<string, string | number>,
) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${ADS_CONVERSION_ID}/${ADS_CONVERSION_LABELS[label]}`,
      ...params,
    });
  }
}
