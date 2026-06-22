const CONTACT_EMAIL = 'ultrafisiosaudeebemestar@gmail.com';
const MAX_FIELD_LENGTH = 1000;

function sendJson(response, statusCode, payload) {
  response.status(statusCode).setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(payload));
}

function clean(value) {
  return String(value || '').trim().slice(0, MAX_FIELD_LENGTH);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return sendJson(response, 405, { error: 'Método não permitido.' });
  }

  const { nome, telefone, email, servico, mensagem, empresa } = request.body || {};

  if (empresa) {
    return sendJson(response, 200, { ok: true });
  }

  const data = {
    nome: clean(nome),
    telefone: clean(telefone),
    email: clean(email),
    servico: clean(servico),
    mensagem: clean(mensagem)
  };

  if (!data.nome || !data.telefone) {
    return sendJson(response, 400, { error: 'Informe nome e telefone para contato.' });
  }

  if (data.email && !isEmail(data.email)) {
    return sendJson(response, 400, { error: 'Informe um e-mail válido.' });
  }

  if (!process.env.RESEND_API_KEY) {
    return sendJson(response, 500, { error: 'Envio de e-mail ainda não configurado.' });
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'UltraFisio <onboarding@resend.dev>';
  const replyTo = data.email || CONTACT_EMAIL;
  const html = `
    <h2>Novo contato pelo site UltraFisio</h2>
    <p><strong>Nome:</strong> ${escapeHtml(data.nome)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(data.telefone)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(data.email || 'Não informado')}</p>
    <p><strong>Serviço:</strong> ${escapeHtml(data.servico || 'Não informado')}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${escapeHtml(data.mensagem || 'Não informada').replaceAll('\n', '<br>')}</p>
  `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: CONTACT_EMAIL,
        reply_to: replyTo,
        subject: `Novo contato pelo site - ${data.nome}`,
        html
      })
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error('Resend error:', error);
      return sendJson(response, 502, { error: 'Não foi possível enviar a mensagem agora.' });
    }

    return sendJson(response, 200, { ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return sendJson(response, 500, { error: 'Não foi possível enviar a mensagem agora.' });
  }
};
