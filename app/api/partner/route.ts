import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const data = await request.json()

  try {
    await resend.emails.send({
      from: 'OSRV Site <onboarding@resend.dev>',
      to: 'p10dromonteiro.go@gmail.com',
      subject: 'Nova solicitação de parceria',
      html: `
        <h2>Nova solicitação de parceria</h2>

        <p><b>Nome:</b> ${data.nome}</p>
        <p><b>E-mail:</b> ${data.email}</p>
        <p><b>Telefone:</b> ${data.tel}</p>
        <p><b>Empresa:</b> ${data.empresa}</p>
        <p><b>Segmento:</b> ${data.segmento}</p>
        <p><b>Como deseja contribuir:</b> ${data.contrib}</p>

        <p><b>Mensagem:</b></p>
        <p>${data.msg}</p>
      `,
    })

    return Response.json({
      message: 'E-mail enviado com sucesso!',
    })
  } catch (error) {
    console.error(error)

    return Response.json(
      { message: 'Erro ao enviar e-mail' },
      { status: 500 }
    )
  }
}