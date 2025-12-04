import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const optin = formData.get("optin")?.toString();

  if (!email || !optin) {
    return new Response("Fehlende Daten", { status: 400 });
  }

  // Resend API-Key aus Cloudflare Environment Variable (Pages-kompatibel)
  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error("Resend API Key fehlt");
    return new Response("Resend API Key fehlt", { status: 500 });
  }

  const payload = {
    from: "Faktum Newsletter <info@faktum-app.de>",
    to: ["info@faktum-app.de"],
    subject: "Neue Newsletter-Anmeldung",
    text: `Neue Anmeldung: ${email}`,
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Fehler bei Resend:", errText);
      return new Response("Fehler bei Resend: " + errText, { status: 500 });
    }

    return new Response(null, {
      status: 303,
      headers: { Location: "/?success=true" },
    });
  } catch (error: any) {
    console.error("Serverfehler:", error.message);
    return new Response("Serverfehler: " + error.message, { status: 500 });
  }
};
