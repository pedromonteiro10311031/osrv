import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const data = await request.json()

  try {
    await resend.emails.send({
      from: 'OSRV Site <onboarding@resend.dev>',
      to: 'p10dromonteiro.go@gmail.com',
      subject: 'Nova inscrição de voluntário',
      html: `
        <h2>Nova inscrição de voluntário</h2>
        <p><b>Nome:</b> ${data.name}</p>
        <p><b>E-mail:</b> ${data.email}</p>
        <p><b>Telefone:</b> ${data.phone}</p>
        <p><b>Área de interesse:</b> ${data.area}</p>
        <p><b>Horário preferido:</b> ${data.time}</p>
        <p><b>Dias disponíveis:</b> ${data.days.join(', ')}</p>
        <p><b>Sobre:</b> ${data.about}</p>
      `,
    })

    return Response.json({ message: 'E-mail enviado com sucesso!' })
  } catch (error) {
    console.error(error)
    return Response.json({ message: 'Erro ao enviar e-mail' }, { status: 500 })
  }
}