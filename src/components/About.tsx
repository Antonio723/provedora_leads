import { motion } from 'framer-motion'
import { Users, MapPin, Award, Wifi } from 'lucide-react'

const pillars = [
  { icon: Wifi, title: 'Infraestrutura própria', desc: 'Rede de fibra óptica proprietária, sem intermediários.' },
  { icon: MapPin, title: 'Presença local', desc: 'Equipe técnica na sua cidade, pronta para agir rápido.' },
  { icon: Users, title: 'Foco no cliente', desc: 'Cada cliente é atendido como único. Sem scripts, sem enrolação.' },
  { icon: Award, title: 'Anos de experiência', desc: 'Tradição e credibilidade construídas ao longo dos anos.' },
]

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Somos um provedor regional comprometido com qualidade real
            </h2>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Nascemos para mudar o padrão de internet na sua região. Enquanto as grandes operadoras tratam você como número, nós entregamos atendimento próximo, suporte ágil e conexão de fibra óptica verdadeira até sua casa.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Nossa missão é simples: internet que funciona de verdade, suporte que resolve, e preço justo. Sem letras miúdas, sem promessas vazias.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { num: '+2.500', label: 'Clientes ativos' },
                { num: '+5 anos', label: 'No mercado' },
                { num: '24h', label: 'Tempo instalação' },
                { num: '99,8%', label: 'Uptime médio' },
              ].map((s) => (
                <div key={s.label} className="bg-brand-50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-black text-brand-700">{s.num}</div>
                  <div className="text-slate-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:bg-brand-50/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{p.title}</h3>
                    <p className="text-slate-500 text-sm mt-1">{p.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
