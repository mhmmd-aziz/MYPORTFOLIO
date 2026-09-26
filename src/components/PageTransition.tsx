import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      {/* OVERLAY LOADING SCREEN */}
      <motion.div
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink-black/40 backdrop-blur-xl pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: 0,
          transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] } 
        }}
        exit={{ 
          opacity: 1,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
        }}
      >
        <motion.div
          initial={{ opacity: 1, scale: 0.9, y: 10 }}
          animate={{ 
            opacity: 0, scale: 1, y: 0,
            transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] } 
          }}
          exit={{ 
            opacity: 1, scale: 0.9, y: 10,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <div className="relative w-16 h-16 mb-6 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain animate-[pulse_2s_ease-in-out_infinite]"
            />
          </div>
          
          {/* Loading text */}
          <div className="font-mono text-[10px] tracking-[0.4em] text-acid-lime">
            LOADING
          </div>
        </motion.div>
      </motion.div>

      {/* PAGE CONTENT */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(20px)', y: 20 }}
        animate={{ 
          opacity: 1, filter: 'blur(0px)', y: 0,
          transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] } 
        }}
        exit={{ 
          opacity: 0, filter: 'blur(20px)', y: -20,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </>
  )
}
