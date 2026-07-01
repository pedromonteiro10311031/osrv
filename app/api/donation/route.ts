import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
const { value, billingType } = await req.json()

    if (!value || value < 5) {
      return NextResponse.json(
        { error: 'Valor mínimo de doação é R$5,00' },
        { status: 400 }
      )
    }

    const apiKey = process.env.ASAAS_API_KEY
    const isSandbox = process.env.ASAAS_ENV === 'sandbox'
    const baseUrl = isSandbox
      ? 'https://sandbox.asaas.com/api/v3'
      : 'https://api.asaas.com/v3'

    const payload = {
      name: `Doação OSRV${billingType === 'RECURRENT' ? ' Mensal' : ''}`,
      description: billingType === 'RECURRENT'
        ? 'Doação recorrente mensal para a OSRV — Obras Sociais Rafael Verlangieri'
        : 'Doação única para a OSRV — Obras Sociais Rafael Verlangieri',
      endDate: null,
      value: Number(value),
      billingType: 'UNDEFINED', // UNDEFINED = usuário escolhe o método na página do Asaas
      chargeType: billingType === 'RECURRENT' ? 'RECURRENT' : 'DETACHED',
      dueDateLimitDays: 3,
    }

    const response = await fetch(`${baseUrl}/paymentLinks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'access_token': apiKey!,
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Asaas error:', error)
      return NextResponse.json(
        { error: 'Erro ao criar link de pagamento' },
        { status: 500 }
      )
    }

    const data = await response.json()
    return NextResponse.json({ url: data.url })

  } catch (err) {
    console.error('Donation API error:', err)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
