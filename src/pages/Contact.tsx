import { Mail, Code, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { lang } = useLanguage()

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto text-center py-24 px-4 md:px-6 overflow-hidden">
        <motion.p 
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }}
          className="font-mono text-xs text-acid-lime uppercase tracking-widest mb-4"
        >
          / 06 {lang === 'en' ? 'CONTACT' : 'KONTAK'}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-6xl md:text-9xl mb-8 leading-none"
        >
          {lang === 'en' ? (
            <>LET'S BUILD<br/>SOMETHING.</>
          ) : (
            <>MARI BANGUN<br/>SESUATU.</>
          )}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-white/60 mb-12 font-light max-w-2xl mx-auto"
        >
          {lang === 'en'
            ? 'Open to collaboration, technology projects, creative development, and opportunities to build useful digital products.'
            : 'Terbuka untuk kolaborasi, proyek teknologi, pengembangan kreatif, dan peluang untuk membangun produk digital yang bermanfaat.'}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a href="https://id.linkedin.com/in/muhammad-aziz-a67648352" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border border-white/20 hover:border-acid-lime hover:text-acid-lime px-6 py-4 transition-colors font-mono tracking-widest text-sm">
            <Globe size={18} /> LINKEDIN
          </a>
          <a href="https://github.com/mhmmd-aziz" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border border-white/20 hover:border-acid-lime hover:text-acid-lime px-6 py-4 transition-colors font-mono tracking-widest text-sm">
            <Code size={18} /> GITHUB
          </a>
          <a href="mailto:mhdaziz629@gmail.com" className="flex items-center justify-center gap-2 border border-white/20 hover:border-acid-lime hover:text-acid-lime px-6 py-4 transition-colors font-mono tracking-widest text-sm">
            <Mail size={18} /> EMAIL
          </a>
        </motion.div>
      </div>
    </PageTransition>
  )
}
