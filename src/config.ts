// Configurações da empresa — edite aqui para personalizar
export const WA_NUMBER = '5511999999999' // WhatsApp sem + e sem espaços
export const PHONE_DISPLAY = '(11) 9999-9999'
export const COMPANY_NAME = 'FibraNet'
export const COMPANY_CNPJ = '00.000.000/0001-00'
export const COMPANY_ADDRESS = 'Rua das Flores, 123 – Centro – Sua Cidade/SP'
export const COMPANY_EMAIL = 'contato@fibranet.com.br'
export const CITY = 'Sua Cidade'

export function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}
