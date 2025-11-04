export const onRequestPost: PagesFunction = async (context) => {
  const formData = await context.request.formData();

  const email = formData.get("email");
  const optin = formData.get("optin");

  if (!email || !optin) {
    console.log("❌ Fehlende Daten:", { email, optin });
    return new Response("Fehlende Daten", { status: 400 });
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: "info@faktum-app.de" }],
        subject: "Neue Newsletter-Anmeldung",
      },
    ],
    from: { email: "no-reply@faktum-app.de" }, // Muss unter deiner Domain sein
    content: [
      {
        type: "text/plain",
        value: `Neue Newsletter-Anmeldung: ${email}`,
      },
    ],
  };

  try {
    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log("📤 Mailchannels Antwort:", response.status, responseText);

    if (response.ok) {
      return Response.redirect("/?success=true", 303);
    } else {
      return new Response(`Mailchannels-Fehler: ${response.status} – ${responseText}`, {
        status: 500,
      });
    }
  } catch (err) {
    console.error("❌ Fetch Error:", err);
    return new Response("Fehler beim Versenden (fetch)", { status: 500 });
  }
};
