import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const optin = formData.get('optin');

  if (!email || !optin) {
    return new Response('Fehlende Daten', { status: 400 });
  }

  // Konfiguriere SMTP Zugangsdaten (IONOS)
  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.de',
    port: 587,
    secure: false, // TLS verwenden
    auth: {
      user: 'info@faktum-app.de', // <- Anpassen!
      pass: 'Faktumesgehtlos1_',                   // <- Anpassen!
    },
  });

  try {
    await transporter.sendMail({
      from: '"Newsletter" <info@faktum-app.de>',
      to: 'info@faktum-app.de',
      subject: 'Neue Newsletter-Anmeldung',
      text: `Neue Anmeldung: ${email}`,
    });

    return new Response(
      null,
      { status: 303, headers: { Location: '/?success=true' } }
    );
  } catch (err: any) {
    return new Response('Fehler beim Mailversand: ' + err.message, { status: 500 });
  }
};
