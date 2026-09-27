import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Plane } from 'lucide-react'

import Navbar from './components/Navbar'
import BoxLoader from './components/ui/box-loader'

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'))
const Work = lazy(() => import('./pages/Work'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Achievements = lazy(() => import('./pages/Achievements'))
const Experience = lazy(() => import('./pages/Experience'))
const Contact = lazy(() => import('./pages/Contact'))

// @ts-ignore - Bypass TS7016 for JSX components
import ClickSpark from './components/ui/ClickSpark'

export default function App() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const startTime = Date.now()
    const duration = 2500

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100))
      setProgress(currentProgress)
      
      if (elapsed >= duration) {
        clearInterval(interval)
      }
    }, 30)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2800)
    
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-ink-black text-paper-white texture-bg relative">
      <ClickSpark sparkColor="#B7FF00" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-black px-6"
          >
            <BoxLoader />
            
            <div className="flex flex-col items-center gap-8 mt-16 w-full max-w-sm">
              <div className="w-full h-12 bg-[#1a1a1a] rounded-full relative flex items-center shadow-inner overflow-visible">
                {/* Dashed line background */}
                <div className="absolute inset-0 flex items-center px-4 overflow-hidden rounded-full">
                  <div className="w-full border-t-[3px] border-dashed border-[#444]" />
                </div>
                
                {/* Progress fill */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, ease: 'linear' }}
                  className="h-full bg-gradient-to-r from-[#8FD600] to-[#B7FF00] rounded-l-full relative flex items-center shadow-[0_0_15px_rgba(183,255,0,0.4)]"
                >
                  {/* Plane icon riding the wave */}
                  <div className="absolute right-0 translate-x-1/2 flex items-center justify-center">
                    <Plane size={36} className="text-white fill-white rotate-45 filter drop-shadow-[0_2px_8px_rgba(183,255,0,0.8)]" strokeWidth={1} />
                  </div>
                </motion.div>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-display tracking-wider text-white">
                  {progress}<span className="text-xl text-white/50 ml-1">%</span>
                </div>
                <div className="text-xs font-mono tracking-[0.2em] text-[#888]">
                  PREPARING FOR TAKEOFF
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            className="w-full"
          >
            <Navbar />

      <main className="pt-16">
        <AnimatePresence mode="wait">
          <Suspense fallback={<div className="h-screen w-full bg-[#050505] flex justify-center items-center"><BoxLoader /></div>}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl mb-1">MUHAMMAD AZIZ</h2>
            <p className="font-mono text-xs text-white/50 tracking-widest">INFORMATICS ENGINEERING · PNL</p>
          </div>
          <div className="text-center md:text-right font-mono text-xs text-white/40 space-y-1">
            <p>© 2026 MUHAMMAD AZIZ</p>
            <p>BUILT WITH REACT + TYPESCRIPT + FRAMER MOTION</p>
          </div>
        </div>
      </footer>
          </motion.div>
        )}
        </AnimatePresence>
      </ClickSpark>
    </div>
  )
}
