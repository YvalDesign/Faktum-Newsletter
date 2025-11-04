export const onRequestPost: PagesFunction = async (context) => {
  const formData = await context.request.formData();

  const email = formData.get("email");
  const optin = formData.get("optin");

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
    from: { email: "noreply@pages.cloudflare.email" }, // ✅ Das funktioniert
    content: [
      {
        type: "text/plain",
        value: `Neue Newsletter-Anmeldung: ${email}`,
      },
    ],
  };

  const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return Response.redirect("/?success=true", 303);
  }

  return new Response("Fehler beim Versenden", { status: 500 });
};
