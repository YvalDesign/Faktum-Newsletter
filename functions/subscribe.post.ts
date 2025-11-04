export const onRequestPost: PagesFunction = async (context) => {
  const formData = await context.request.formData();

  const email = formData.get("email");
  const optin = formData.get("optin");

  if (!email || !optin) {
    return new Response("Fehlende Daten", { status: 400 });
  }

  console.log("Empfangen:", email, optin);

  return new Response("Erfolgreich empfangen", { status: 200 });
};
