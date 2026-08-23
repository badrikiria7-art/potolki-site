/* global process */

const TELEGRAM_REQUEST_TIMEOUT_MS = 8000;

function asText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return response.status(500).json({ ok: false, error: "Server is not configured" });
  }

  let body;

  try {
    body = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
  } catch {
    return response.status(400).json({ ok: false, error: "Invalid JSON" });
  }
  const name = asText(body?.name, 100);
  const phone = asText(body?.phone, 50);
  const service = asText(body?.service, 100);
  const message = asText(body?.message, 2000);

  if (!name || !phone) {
    return response.status(400).json({ ok: false, error: "Name and phone are required" });
  }

  const text = `
🔥 Новая заявка с сайта

👤 Имя: ${name}
📞 Телефон: ${phone}
📌 Услуга: ${service}
📝 Задача: ${message}

🌐 Источник: сайт
`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TELEGRAM_REQUEST_TIMEOUT_MS);

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
        signal: controller.signal,
      }
    );
    const telegramResult = await telegramResponse.json().catch(() => null);

    if (!telegramResponse.ok || !telegramResult?.ok) {
      return response.status(502).json({ ok: false, error: "Telegram request failed" });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    const status = error?.name === "AbortError" ? 504 : 502;
    return response.status(status).json({ ok: false, error: "Telegram is unavailable" });
  } finally {
    clearTimeout(timeout);
  }
}
