const CAREERS_API_BASE = (import.meta.env.VITE_CAREERS_API_BASE || '').replace(/\/$/, '');

export interface CareerJob {
  id: number;
  slug: string;
  title: string;
  titleEn: string | null;
  team: string | null;
  location: string;
  employmentType: string;
  summary: string | null;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
  techStack: string | null;
  formTemplateUrl: string | null;
  formTemplateName: string | null;
}

interface ApplyPayload {
  jobId: number | null;
  name: string;
  email: string;
  phone: string;
  link: string;
  fileUrl: string;
  fileName: string;
  privacyConsent: true;
  privacyConsentAt: string;
  source: 'tsa-careers';
}

async function parseError(response: Response, fallback: string): Promise<Error> {
  const body = await response.json().catch(() => null);
  const message = body && typeof body.error === 'string' ? body.error : fallback;
  return new Error(message);
}

export async function fetchCareerJobs(signal?: AbortSignal): Promise<CareerJob[]> {
  const response = await fetch(`${CAREERS_API_BASE}/api/careers/jobs`, { signal });
  if (!response.ok) throw await parseError(response, '공고를 불러오지 못했습니다.');
  const body = (await response.json()) as { data?: CareerJob[] };
  return Array.isArray(body.data) ? body.data : [];
}

export async function uploadCareerFile(
  file: File,
  applicant: { name: string; phone: string },
): Promise<{ url: string; name: string }> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', applicant.name);
  formData.append('phone', applicant.phone);

  const response = await fetch(`${CAREERS_API_BASE}/api/careers/upload`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) throw await parseError(response, '지원서 업로드에 실패했습니다.');
  return response.json();
}

export async function submitCareerApplication(payload: ApplyPayload): Promise<void> {
  const response = await fetch(`${CAREERS_API_BASE}/api/careers/apply`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw await parseError(response, '지원 접수에 실패했습니다.');
}
