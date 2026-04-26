# EmailJS — Configuración del formulario de contacto

El form de contacto del portfolio (`/#contact`) envía mensajes a través de
[EmailJS](https://www.emailjs.com/) directamente desde el navegador. Esta guía
deja todo listo en ~10 minutos.

---

## 1. Crear cuenta y servicio (3 min)

1. Regístrate en https://dashboard.emailjs.com/sign-up.
2. **Email Services** → **Add New Service**.
3. Elige **Gmail** (o Outlook/Yahoo/SMTP custom).
4. Conecta `8042sergi@gmail.com` con OAuth (acepta los permisos).
5. Anota el **Service ID** (algo como `service_abc1234`).

> **Plan gratuito**: 200 emails/mes, suficiente para un portfolio personal.

---

## 2. Crear el template (5 min)

1. **Email Templates** → **Create New Template**.
2. **Settings** del template (parte superior):

   | Campo | Valor |
   |---|---|
   | Template Name | `Portfolio · Contact` |
   | Subject | `🟢 Nuevo mensaje de {{from_name}} — {{intent}}` |
   | From Name | `Portfolio Sergio` |
   | From Email | (deja el default del service) |
   | To Email | `{{to_email}}` |
   | Reply To | `{{reply_to}}` |
   | BCC | (opcional, tu propio email para archivar) |

3. En la pestaña **Content**, cambia a `Code Editor` (botón `</>`) y pega el HTML
   de [`docs/email-template.html`](./email-template.html).

4. **Save** y haz click en **Test it** para enviarte un email de prueba con datos
   dummy. Revisa la bandeja de entrada (puede tardar 1-2 min la primera vez).

5. Anota el **Template ID** (`template_xyz5678`).

---

## 3. Sacar la Public Key (1 min)

1. **Account** → **General** → **Public Key**.
2. Copia el valor (`abcDEF12345`).

---

## 4. Conectar al portfolio

### Local (`.env.local`)

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcDEF12345
```

Reinicia `npm run dev` después de añadir las vars.

### Producción (Vercel)

```bash
# Si tienes Vercel CLI instalado:
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

# O en el dashboard:
# Project → Settings → Environment Variables → Add
# Marca: Production + Preview + Development en cada una
```

Después de añadirlas → **Redeploy** la rama `main` para que las recoja.

---

## 5. Restricciones de seguridad (recomendado)

La `Public Key` queda visible en el bundle del cliente — es así por diseño de
EmailJS. Para evitar abuso desde otros dominios:

1. **Account** → **Security** → **Allowed Domains** → añade:
   - `localhost` (dev)
   - `sergio-portfolio.vercel.app` (prod)
   - tu dominio custom si lo tienes (ej. `sergiorodriguez.dev`)

EmailJS bloqueará envíos desde dominios no listados.

---

## Variables disponibles en el template

El portfolio envía las siguientes variables (definidas en
`src/features/contact/useContactForm.ts`):

| Variable | Ejemplo |
|---|---|
| `{{from_name}}` | `María García` |
| `{{from_email}}` | `maria@empresa.com` |
| `{{to_name}}` | `Sergio` |
| `{{to_email}}` | `8042sergi@gmail.com` |
| `{{reply_to}}` | igual que `from_email` |
| `{{message}}` | el mensaje del usuario (multilinea) |
| `{{intent}}` | `Producto nuevo` / `Refactor / migración` / `Equipo / fractional` / `Solo charlar` / `Sin especificar` |
| `{{sent_at}}` | `lunes, 26 de abril de 2026, 14:32` |
| `{{site_url}}` | `https://sergio-portfolio.vercel.app` |

---

## Troubleshooting

- **El form muestra "El formulario aún no está configurado"** → falta una de las
  3 env vars. Verifica con `npm run dev` que aparecen en `process.env`.
- **403 Forbidden en EmailJS** → el dominio no está en Allowed Domains.
- **Email llega a spam** → añade `Reply-To` y configura SPF/DKIM en el dominio
  del servicio (Gmail los tiene out-of-the-box).
- **Quiero cambiar el destinatario** → `useContactForm.ts` línea 23:
  `TO_EMAIL = "..."`.
