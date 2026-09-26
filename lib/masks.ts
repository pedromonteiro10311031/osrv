// (65) 99999-9999 (celular) ou (65) 9999-9999 (fixo)
export const maskPhone = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d ? `(${d}` : ''
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  const cut = d.length === 11 ? 7 : 6
  return `(${d.slice(0, 2)}) ${d.slice(2, cut)}-${d.slice(cut)}`
}

export const maskEmail = (v: string) => v.replace(/\s/g, '').toLowerCase()

export const isValidEmail = (v: string) => /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[a-z]{2,}$/i.test(v)

// DDD 11-99 (sem zero inicial); celular = 11 dígitos com 9 após o DDD; fixo = 10 dígitos começando em 2-5
export const isValidPhone = (v: string) => /^[1-9][1-9](9\d{8}|[2-5]\d{7})$/.test(v.replace(/\D/g, ''))
