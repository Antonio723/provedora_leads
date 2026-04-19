import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Search, CheckCircle } from 'lucide-react'
import { waLink } from '../config'

const neighborhoods = [
  'Centro', 'Vila Nova', 'Jardim das Flores', 'Bela Vista', 'Santa Maria',
  'Parque Industrial', 'Residencial', 'Alto da Boa Vista', 'São José',
]

export default function Coverage() {
  const [query, setQuery] = useState('')
  const [checked, setChecked] = useState(false)
  const [hasService, setHasService] = useState<boolean | null>(null)

  const handleCheck = () => {
    if (!query.trim()) return
    setChecked(true)
    const found = neighborhoods.some((n) =>
      n.toLowerCase().includes(query.toLowerCase())
    )
    setHasService(found)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCheck()
  }

  return (
    <section id="cobertura" className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <MapPin className="w-4 h-4" />
            Área de Cobertura
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Verificar disponibilidade na sua região
          </h2>
          <p className="mt-4 text-blue-200 text-lg">
            Digite o nome do seu bairro ou cidade e veja se temos cobertura
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10"
        >
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Ex: Centro, Vila Nova, Jardim..."
                value={query}
                onChange={(e) => { setQuery(e.target.value); setChecked(false) }}
                onKeyDown={handleKeyDown}
                className="w-full pl-11 pr-4 py-4 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 text-base"
              />
            </div>
            <button
              onClick={handleCheck}
              className="flex items-center justify-center gap-2 bg-white text-brand-700 font-bold px-6 py-4 rounded-2xl hover:bg-brand-50 transition-colors shadow-lg"
            >
              <Search className="w-5 h-5" />
              Verificar
            </button>
          </div>

          {/* Result */}
          {checked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-6 max-w-lg mx-auto"
            >
              {hasService ? (
                <div className="bg-green-500 text-white rounded-2xl p-5 flex items-center gap-3">
                  <CheckCircle className="w-7 h-7 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-bold text-lg">Ótima notícia! Temos cobertura no seu bairro.</p>
                    <p className="text-green-100 text-sm mt-0.5">Entre em contato agora e instale em até 24h!</p>
                  </div>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur text-white rounded-2xl p-5 border border-white/20">
                  <p className="font-bold text-lg">Bairro não localizado no sistema.</p>
                  <p className="text-blue-200 text-sm mt-0.5">Consulte pelo WhatsApp — podemos ter cobertura!</p>
                </div>
              )}
            </motion.div>
          )}

          {/* WhatsApp CTA for coverage */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <a
              href={waLink(
                query.trim()
                  ? `Olá, gostaria de consultar cobertura no bairro ${query}`
                  : 'Olá, gostaria de consultar a cobertura na minha região!'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl shadow-green-500/30"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Consultar Cobertura no WhatsApp
            </a>
          </motion.div>

          {/* Neighborhoods list */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {neighborhoods.map((n) => (
              <button
                key={n}
                onClick={() => { setQuery(n); setChecked(false) }}
                className="text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1.5 rounded-full transition-colors"
              >
                {n}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
