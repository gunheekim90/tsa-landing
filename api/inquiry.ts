/**
 * POST /api/inquiry
 *
 * Forwards a website inquiry to a Slack incoming webhook.
 * Set SLACK_WEBHOOK_URL in Vercel project env vars (Production + Preview).
 *
 * Body: { name, company, email, interest?, message, _hp? }
 */

export const config = { runtime: 'edge' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 4000;

const INTEREST_LABEL: Record<string, string> = {
  ax: 'AX 도입 · AI 상담/자동화/에이전트',
  dx: 'DX 구축 · SaaS/관제/CRM 개발',
  aicx: 'AICX · AI 전화/채팅 응대',
  studio: '스튜디오 협업 · 제휴',
  other: '기타',
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

function clip(s: unknown, n = MAX_LEN): string {
  const str = typeof s === 'string' ? s : '';
  return str.length > n ? str.slice(0, n) + '…' : str;
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return jsonResponse({ error: 'method_not_allowed' }, 405);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: 'invalid_json' }, 400);
  }

  // Honeypot — silently drop bot traffic so they think it worked.
  if (body._hp) return jsonResponse({ ok: true });

  const name = clip(body.name, 200).trim();
  const company = clip(body.company, 200).trim();
  const email = clip(body.email, 200).trim();
  const interestKey = clip(body.interest, 40).trim() || 'other';
  const message = clip(body.message).trim();
  const interest = INTEREST_LABEL[interestKey] ?? interestKey;

  if (!name || !company || !email || !message) {
    return jsonResponse({ error: 'missing_fields' }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return jsonResponse({ error: 'invalid_email' }, 400);
  }
  if (message.length < 10) {
    return jsonResponse({ error: 'message_too_short' }, 400);
  }

  const webhookUrl = (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env?.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('SLACK_WEBHOOK_URL not configured');
    return jsonResponse({ error: 'webhook_not_configured' }, 500);
  }

  const ua = req.headers.get('user-agent') ?? 'unknown';
  const referer = req.headers.get('referer') ?? '';
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  const slackMessage = {
    text: `📬 New inquiry · ${company} (${name})`,
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: `📬 New inquiry · ${company}`, emoji: true },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Name*\n${name}` },
          { type: 'mrkdwn', text: `*Company*\n${company}` },
          { type: 'mrkdwn', text: `*Email*\n<mailto:${email}|${email}>` },
          { type: 'mrkdwn', text: `*Interest*\n${interest}` },
        ],
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*Message*\n${message}` },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `via twostepsahead.co.kr · ${new Date().toISOString()} · ip ${ip} · ${referer || 'direct'}`,
          },
        ],
      },
    ],
  };

  try {
    const r = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(slackMessage),
    });
    if (!r.ok) {
      const txt = await r.text().catch(() => '');
      console.error('slack webhook failed', r.status, txt);
      return jsonResponse({ error: 'slack_failed' }, 502);
    }
  } catch (e) {
    console.error('slack fetch error', e);
    return jsonResponse({ error: 'slack_unreachable' }, 502);
  }

  void ua; // reserved for future logging
  return jsonResponse({ ok: true });
}
