export const onRequestPost: PagesFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const optin = formData.get("optin");

  // Validierung
  if (!email || !optin) {
    return new Response("Fehlende Daten", { status: 400 });
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: "info@faktum-app.de" }],
        subject: "Neue Newsletter-Anmeldung",
      },
    ],
    from: { email: "no-reply@faktum-app.de" }, // ❗ Muss mit deiner Domain bei Mailchannels übereinstimmen
    content: [
      {
        type: "text/plain",
        value: `Neue Newsletter-Anmeldung von: ${email}`,
      },
    ],
  };

  try {
    const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      return new Response(`Mailchannels-Fehler: ${res.status} – ${errorText}`, {
        status: 500,
      });
    }

    // Redirect bei Erfolg
    return Response.redirect("/?success=true", 303);
  } catch (err) {
    return new Response("Serverfehler beim Senden", { status: 500 });
  }
};