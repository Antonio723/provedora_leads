import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Carlos Mendes',
    avatar: 'CM',
    color: 'bg-brand-500',
    rating: 5,
    text: 'Instalaram no mesmo dia que solicitei. A internet é excelente, sem quedas e super rápida. Recomendo para todo mundo!',
    plan: 'Plano Popular 500 Mega',
    time: 'há 2 semanas',
  },
  {
    name: 'Ana Paula Silva',
    avatar: 'AP',
    color: 'bg-purple-500',
    rating: 5,
    text: 'Melhor internet da região, sem dúvida. Trabalho em home office e nunca tive problema. Suporte é nota 10!',
    plan: 'Plano Família 700 Mega',
    time: 'há 1 mês',
  },
  {
    name: 'Roberto Alves',
    avatar: 'RA',
    color: 'bg-green-500',
    rating: 5,
    text: 'Suporte responde rápido e resolve na hora. Tive um problema domingo à noite e já me atenderam. Impressionante!',
    plan: 'Plano Básico 300 Mega',
    time: 'há 3 semanas',
  },
  {
    name: 'Fernanda Costa',
    avatar: 'FC',
    color: 'bg-orange-500',
    rating: 5,
    text: 'Finalmente uma internet de verdade na minha rua. Streaming em 4K sem travar e jogos online com zero lag. Amei!',
    plan: 'Plano Gamer 1 Giga',
    time: 'há 5 dias',
  },
  {
    name: 'Marcos Oliveira',
    avatar: 'MO',
    color: 'bg-red-500',
    rating: 5,
    text: 'Migrei da operadora grande e foi a melhor decisão. Pago menos, tenho mais velocidade e suporte humano de verdade.',
    plan: 'Plano Popular 500 Mega',
    time: 'há 2 meses',
  },
  {
    name: 'Juliana Santos',
    avatar: 'JS',
    color: 'bg-teal-500',
    rating: 5,
    text: 'Instalação foi rapidíssima e o técnico foi super educado. Internet estável o dia todo. Muito satisfeita!',
    plan: 'Plano Família 700 Mega',
    time: 'há 1 semana',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Avaliações Google ⭐⭐⭐⭐⭐
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            Quem já contratou recomenda
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            +2.500 clientes satisfeitos. Veja o que eles dizem sobre a nossa internet.
          </p>
          {/* Google rating summary */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-md border border-slate-100">
            <div className="text-4xl font-black text-slate-900">4,9</div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-500 text-sm">baseado em 312 avaliações no Google</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-100" />
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full ${r.color} text-white font-bold text-sm flex items-center justify-center flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                  <p className="text-slate-400 text-xs">{r.time}</p>
                </div>
              </div>
              <Stars count={r.rating} />
              <p className="mt-3 text-slate-700 text-sm leading-relaxed">"{r.text}"</p>
              <div className="mt-4 inline-block bg-brand-50 text-brand-600 text-xs font-medium px-3 py-1 rounded-full">
                {r.plan}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
