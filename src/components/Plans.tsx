import { motion } from 'framer-motion'
import { Check, Wifi, Headphones, Router, Zap, Trophy, Star, Gamepad2 } from 'lucide-react'
import { waLink } from '../config'

const plans = [
  {
    id: 'basico',
    name: 'Básico',
    speed: '300',
    price: '79,90',
    icon: Wifi,
    color: 'from-slate-500 to-slate-700',
    textColor: 'text-slate-600',
    borderColor: 'border-slate-200',
    highlight: false,
    badge: null,
    features: [
      'Download até 300 Mbps',
      'Upload até 150 Mbps',
      'Wi-Fi incluso',
      'Suporte técnico',
      'Instalação gratuita',
      'Fibra óptica real',
    ],
  },
  {
    id: 'popular',
    name: 'Popular',
    speed: '500',
    price: '99,90',
    icon: Star,
    color: 'from-brand-600 to-brand-800',
    textColor: 'text-brand-600',
    borderColor: 'border-brand-300',
    highlight: true,
    badge: 'Mais Vendido',
    features: [
      'Download até 500 Mbps',
      'Upload até 250 Mbps',
      'Wi-Fi incluso',
      'Suporte técnico prioritário',
      'Instalação gratuita',
      'Fibra óptica real',
      'Ideal para streaming 4K',
    ],
  },
  {
    id: 'familia',
    name: 'Família',
    speed: '700',
    price: '129,90',
    icon: Trophy,
    color: 'from-purple-600 to-purple-800',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    highlight: false,
    badge: 'Melhor Custo',
    features: [
      'Download até 700 Mbps',
      'Upload até 350 Mbps',
      'Wi-Fi 6 incluso',
      'Suporte técnico VIP',
      'Instalação gratuita',
      'Fibra óptica real',
      'Múltiplos dispositivos',
      'Home office perfeito',
    ],
  },
  {
    id: 'gamer',
    name: 'Gamer Premium',
    speed: '1 Giga',
    price: '159,90',
    icon: Gamepad2,
    color: 'from-orange-500 to-red-600',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    highlight: false,
    badge: 'Ultra Velocidade',
    features: [
      'Download até 1 Gbps',
      'Upload até 500 Mbps',
      'Wi-Fi 6 AX incluso',
      'Suporte 24/7',
      'Instalação gratuita',
      'Fibra óptica real',
      'Baixíssima latência',
      'Ideal para streaming + games',
    ],
  },
]

export default function Plans() {
  return (
    <section id="planos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Planos de Internet
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            Escolha o plano ideal para você
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Todos os planos com fibra óptica real, Wi-Fi incluso, instalação gratuita e suporte técnico.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-2 rounded-full border border-green-200">
            <Zap className="w-4 h-4" />
            Promoção do mês — sem fidelidade no 1º mês!
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex flex-col rounded-3xl border-2 overflow-hidden card-hover bg-white ${
                  plan.highlight
                    ? 'border-brand-500 shadow-2xl shadow-brand-500/20 scale-105'
                    : plan.borderColor + ' shadow-lg'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${plan.color}`}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Card header */}
                <div className={`bg-gradient-to-br ${plan.color} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-2 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-lg">{plan.name}</span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-black leading-none">{plan.speed}</span>
                    <span className="text-xl font-bold mb-1">
                      {plan.speed === '1 Giga' ? '' : ' Mega'}
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-white/70 text-sm">R$</span>
                    <span className="text-3xl font-black">{plan.price}</span>
                    <span className="text-white/70 text-sm">/mês</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 p-6">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-slate-700 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.textColor}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Included icons */}
                <div className="px-6 pb-4 flex gap-4 text-slate-400">
                  <div className="flex items-center gap-1 text-xs">
                    <Router className="w-4 h-4" /> Wi-Fi
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <Headphones className="w-4 h-4" /> Suporte
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <Zap className="w-4 h-4" /> Fibra
                  </div>
                </div>

                {/* CTA */}
                <div className="p-4 pt-0">
                  <a
                    href={waLink(`Olá, quero contratar o plano ${plan.name} de ${plan.speed === '1 Giga' ? '1 Giga' : plan.speed + ' Mega'} por R$ ${plan.price}/mês!`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-white transition-all hover:scale-105 bg-gradient-to-r ${plan.color} shadow-lg`}
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Contratar Agora
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-slate-400 text-sm"
        >
          * Velocidades de download. Preços sujeitos a disponibilidade na sua região. Consulte condições.
        </motion.p>
      </div>
    </section>
  )
}
