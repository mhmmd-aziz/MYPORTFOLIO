import { useState, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Globe, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import GooeyNav from './GooeyNav'

const navItems = {
  en: [
    { label: 'HOME', path: '/' },
    { label: 'WORK', path: '/work' },
    { label: 'CERTIFICATES', path: '/certificates' },
    { label: 'ACHIEVEMENTS', path: '/achievements' },
    { label: 'EXPERIENCE', path: '/experience' },
    { label: 'CONTACT', path: '/contact' },
  ],
  id: [
    { label: 'BERANDA', path: '/' },
    { label: 'KARYA', path: '/work' },
    { label: 'SERTIFIKAT', path: '/certificates' },
    { label: 'PRESTASI', path: '/achievements' },
    { label: 'PENGALAMAN', path: '/experience' },
    { label: 'KONTAK', path: '/contact' },
  ]
}

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const currentNavItems = navItems[lang].map(item => ({
    label: item.label,
    href: item.path
  }))
  
  const activeIndex = useMemo(() => {
    const index = currentNavItems.findIndex(item => item.href === location.pathname)
    return index >= 0 ? index : 0
  }, [location.pathname, currentNavItems])

  return (
    <header className="fixed top-0 w-full z-50 bg-ink-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 h-10 group">
          <img src="/logo.png" alt="Logo" className="h-full w-auto object-contain group-hover:scale-105 transition-transform" />
          <span className="font-display text-xl tracking-wider mt-1 group-hover:text-acid-lime transition-colors">MUHAMMAD AZIZ</span>
        </Link>
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 h-full">
          <div className="hidden md:block h-full relative">
            <GooeyNav
              key={lang} // re-mount when language changes to refresh labels
              items={currentNavItems}
              initialActiveIndex={activeIndex}
              animationTime={400}
              particleCount={12}
            />
          </div>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-mono text-sm border border-white/20 px-3 py-1 hover:border-acid-lime hover:text-acid-lime transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={14} />
            {lang === 'en' ? 'EN' : 'ID'}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center p-1 text-white hover:text-acid-lime transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 w-full bg-ink-black/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 font-mono text-sm tracking-widest">
              {currentNavItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    activeIndex === index ? 'text-acid-lime font-bold' : 'text-white hover:text-acid-lime'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
