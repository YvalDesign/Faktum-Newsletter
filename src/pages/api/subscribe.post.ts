import type { APIRoute } from "astro";
console.log("RESEND_API_KEY:", RESEND_API_KEY);


export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const optin = formData.get("optin");

  if (!email || !optin) {
    return new Response("Fehlende Daten", { status: 400 });
  }

  // Resend API-Key aus Cloudflare Variable
  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    return new Response("Resend API Key fehlt", { status: 500 });
  }

  // Nachricht an euch (Weiterleitung)
  const payload = {
    from: "Faktum Newsletter <info@faktum-app.de>", // Bei nicht verifizierter Domain ersetzen durch: "onboarding@resend.dev"
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
      return new Response("Fehler bei Resend: " + errText, { status: 500 });
    }

    // Redirect zurück zur Startseite mit success=true
    return new Response(null, {
      status: 303,
      headers: { Location: "/?success=true" },
    });
  } catch (error: any) {
    return new Response("Serverfehler: " + error.message, { status: 500 });
  }
};
