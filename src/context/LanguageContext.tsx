import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  lang: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'id' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
