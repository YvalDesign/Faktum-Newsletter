globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, locals }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const optin = formData.get("optin")?.toString();
  if (!email || !optin) {
    return new Response("Fehlende Daten", { status: 400 });
  }
  const RESEND_API_KEY = locals.runtime.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error("Resend API Key fehlt");
    return new Response("Resend API Key fehlt", { status: 500 });
  }
  const payload = {
    from: "Faktum Newsletter <info@faktum-app.de>",
    to: ["info@faktum-app.de"],
    subject: "Neue Newsletter-Anmeldung",
    text: `Neue Anmeldung: ${email}`
  };
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const errText = await response.text();
      console.error("Fehler bei Resend:", errText);
      return new Response("Fehler bei Resend: " + errText, { status: 500 });
    }
    return new Response(null, {
      status: 303,
      headers: { Location: "/?success=true" }
    });
  } catch (error) {
    console.error("Serverfehler:", error.message);
    return new Response("Serverfehler: " + error.message, { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
