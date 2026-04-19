import { motion } from 'framer-motion'
import { Wifi, Zap, Tv, Monitor, Headphones, Clock, Heart, Shield } from 'lucide-react'

const benefits = [
  {
    icon: Wifi,
    title: 'Fibra Óptica Real',
    desc: 'Conexão de fibra até sua residência. Sem coaxial, sem sinal degradado. Internet de verdade.',
    color: 'bg-brand-50 text-brand-600',
  },
  {
    icon: Zap,
    title: 'Baixa Latência',
    desc: 'Ping ultra baixo para games online e videochamadas em HD sem travamentos.',
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    icon: Tv,
    title: 'Streaming Sem Travar',
    desc: 'Netflix, YouTube, Prime Video e Globoplay em 4K sem buffering ou interrupções.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Monitor,
    title: 'Ideal para Home Office',
    desc: 'Videoconferências estáveis, arquivos na nuvem e ferramentas de trabalho sempre online.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Headphones,
    title: 'Suporte Técnico Local',
    desc: 'Nossa equipe é da sua região. Chamado atendido rapidamente, sem call center.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Clock,
    title: 'Instalação Rápida',
    desc: 'Agendamento em até 24h. Técnico no horário combinado, sem enrolação.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    desc: 'Você fala com uma pessoa real, que conhece sua situação e resolve de verdade.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Shield,
    title: '99,8% de Uptime',
    desc: 'Infraestrutura redundante com monitoramento 24/7 para manter sua internet sempre no ar.',
    color: 'bg-indigo-50 text-indigo-600',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Por que escolher a gente?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            Tudo que você precisa em uma internet
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
            Mais do que velocidade — entregamos estabilidade, confiança e suporte de quem está do seu lado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-brand-200 bg-white hover:bg-brand-50/30 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${b.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
