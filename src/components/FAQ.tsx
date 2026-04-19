import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Tem fidelidade?',
    a: 'No primeiro mês não há fidelidade. A partir do 2º mês, o contrato padrão é de 12 meses com condições especiais. Consulte-nos para mais detalhes sobre as opções disponíveis.',
  },
  {
    q: 'Quanto tempo leva para instalar?',
    a: 'Nossa equipe faz o agendamento em até 24 horas após a contratação. O técnico vai até sua residência e realiza a instalação completa em aproximadamente 2 horas.',
  },
  {
    q: 'O roteador Wi-Fi está incluso no plano?',
    a: 'Sim! Todos os nossos planos incluem o roteador Wi-Fi sem custo adicional. Os planos Família e Gamer Premium incluem roteador Wi-Fi 6 de última geração para máxima performance.',
  },
  {
    q: 'Tem suporte técnico no domingo?',
    a: 'Sim! Nosso suporte funciona 7 dias por semana, incluindo feriados. Nos finais de semana e feriados, atendemos via WhatsApp e telefone das 8h às 20h.',
  },
  {
    q: 'Posso mudar de plano depois de contratar?',
    a: 'Claro! Você pode fazer upgrade ou downgrade do plano a qualquer momento. Upgrades são processados em até 2 horas. Para downgrades, há um prazo de 30 dias.',
  },
  {
    q: 'A fibra chega até minha casa ou é só até o poste?',
    a: 'Utilizamos tecnologia FTTH (Fiber to the Home) — a fibra chega diretamente até sua residência. Isso garante a máxima estabilidade e velocidade, diferente da concorrência que usa coaxial no trecho final.',
  },
  {
    q: 'Qual a velocidade de upload?',
    a: 'Nossas velocidades de upload são simétricas ou próximas: Básico 150Mbps, Popular 250Mbps, Família 350Mbps e Gamer 500Mbps. Isso é fundamental para home office, streaming e uploads.',
  },
  {
    q: 'Como faço para contratar?',
    a: 'É super simples! Basta clicar em qualquer botão "Contratar no WhatsApp" nessa página. Nossa equipe de vendas vai verificar a cobertura na sua rua, tirar todas as dúvidas e agendar a instalação.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-500 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Perguntas mais comuns
          </h2>
          <p className="mt-4 text-slate-500">
            Não encontrou sua dúvida? Fale conosco pelo WhatsApp!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
