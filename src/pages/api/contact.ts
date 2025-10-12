import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { validateContactForm, contactFormSchema } from '../../utils/schemas';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Activer le rendu côté serveur pour cette route API
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Récupérer et valider les données du formulaire avec Zod
    const body = await request.json();
    const validation = validateContactForm(body);

    if (!validation.success) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: validation.errors?.join(', ') || 'Données invalides' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, pack, message } = validation.data!;

    // Envoyer l'email via Resend
    const { data, error } = await resend.emails.send({
      from: 'StriveX Contact <onboarding@strivex.fr>', // Remplacer par votre domaine vérifié
      to: [import.meta.env.CONTACT_EMAIL || 'contact@strivex.fr'],
      replyTo: email,
      subject: `Nouveau contact : ${name}${pack ? ` - ${pack}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'PP Mori', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #2d2d2d;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
                color: white;
                padding: 30px;
                border-radius: 12px 12px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 12px 12px;
              }
              .field {
                margin-bottom: 20px;
                background: white;
                padding: 15px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
              }
              .label {
                font-weight: 600;
                color: #6b7280;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
              }
              .value {
                color: #2d2d2d;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
                margin-top: 10px;
                white-space: pre-wrap;
                word-wrap: break-word;
                overflow-wrap: break-word;
                hyphens: auto;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">Nouveau contact depuis StriveX</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nom complet</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value">
                  <a href="mailto:${email}" style="color: #2d2d2d; text-decoration: none;">
                    ${email}
                  </a>
                </div>
              </div>
              
              ${pack ? `
              <div class="field">
                <div class="label">Pack intéressé</div>
                <div class="value">${pack}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>
                Ce message a été envoyé depuis le formulaire de contact de 
                <strong>strivex.fr</strong>
              </p>
              <p style="font-size: 12px; color: #9ca3af;">
                Vous pouvez répondre directement à ce mail pour contacter ${name}
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Erreur lors de l\'envoi de l\'email' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: data?.id 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Une erreur est survenue' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

