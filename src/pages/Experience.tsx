import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'
import VelocityMarquee from '../components/VelocityMarquee'

// Development Icons
import { SiReact, SiTypescript, SiLaravel, SiFlutter, SiFirebase, SiFastapi, SiPostgresql } from 'react-icons/si'
// AI / Data Icons
import { SiPython, SiPandas } from 'react-icons/si'
import { FaBrain, FaEye, FaCrosshairs, FaFileAlt } from 'react-icons/fa'
// System / Network Icons
import { SiUbuntu, SiVmware, SiNginx } from 'react-icons/si'
import { FaUsersCog, FaNetworkWired, FaWindows } from 'react-icons/fa'
// Cybersecurity Icons
import { FaShieldAlt, FaDatabase, FaKey, FaHashtag } from 'react-icons/fa'
import { SiKalilinux } from 'react-icons/si'
// Hardware / IoT Icons
import { SiArduino, SiEspressif } from 'react-icons/si'
import { FaWifi, FaMicrochip, FaCube, FaPrint } from 'react-icons/fa'

export default function Experience() {
  const { lang } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ["/work/komitaziz.jpeg", "/aziz 2.jpeg"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const content = {
    en: {
      experience: "EXPERIENCE",
      skills: "SKILLS",
      komitDesc: "Leading the Digihub division and contributing to modern web development initiatives for the Information and Computer Technology (TIK) student community at PNL. Focuses on bridging technical execution with organizational goals.",
      komitRole: "Web Developer & Digihub Head",
      present: "PRESENT",
      dev: "DEVELOPMENT",
      cybersecurity: "CYBERSECURITY"
    },
    id: {
      experience: "PENGALAMAN",
      skills: "KEAHLIAN",
      komitDesc: "Memimpin divisi Digihub dan berkontribusi pada inisiatif pengembangan web modern untuk komunitas mahasiswa Teknologi Informasi dan Komputer (TIK) di PNL. Berfokus pada menjembatani eksekusi teknis dengan tujuan organisasi.",
      komitRole: "Pengembang Web & Kadiv Digihub",
      present: "SEKARANG",
      dev: "PENGEMBANGAN",
      cybersecurity: "KEAMANAN SIBER"
    }
  }

  const t = content[lang]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* Sticky Image Section (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, amount: 0.1 }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 h-[60vh] lg:h-[80vh] lg:sticky lg:top-24"
        >
          <div className="w-full h-full border border-white/10 relative overflow-hidden group bg-near-black cursor-pointer" onClick={() => setCurrentImageIndex(prev => (prev + 1) % images.length)}>
            <div className="absolute inset-0 bg-ink-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
            
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                src={images[currentImageIndex]} 
                alt="Muhammad Aziz Experience" 
                className="w-full h-full absolute inset-0 object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </AnimatePresence>

            {/* Slider Indicators */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
               {images.map((_, idx) => (
                 <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-acid-lime' : 'bg-white/30'}`} />
               ))}
            </div>
            {/* Minimalist overlay text */}
            <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-ink-black/90 to-transparent">
              <div className="flex flex-col gap-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-mono text-xs text-acid-lime uppercase tracking-widest">MUHAMMAD AZIZ</span>
                <span className="font-mono text-[10px] text-white/60 tracking-widest">INFORMATICS ENGINEERING</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section (Right) */}
        <div className="lg:col-span-7 space-y-24 pt-12 lg:pt-0">
          
          {/* Experience Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="font-mono text-xs text-acid-lime uppercase tracking-widest mb-4">/ 04 {t.experience}</p>
            <h2 className="font-display text-5xl md:text-6xl mb-12">KOMIT PNL</h2>
            
            <div className="border-l border-white/20 pl-8 relative">
              <div className="absolute w-3 h-3 bg-acid-lime -left-[6.5px] top-2 shadow-[0_0_10px_#B7FF00]" />
              <p className="font-mono text-sm text-acid-lime tracking-widest mb-2">MAY 2026 - {t.present}</p>
              <h3 className="text-2xl font-medium mb-1">{t.komitRole}</h3>
              <p className="text-white/50 mb-4 font-mono text-xs">KOMUNITAS MAHASISWA TIK (KOMIT) PNL · LHOKSEUMAWE, ACEH</p>
              <p className="text-white/70 leading-relaxed font-light">
                {t.komitDesc}
              </p>
            </div>
          </motion.div>

          {/* Technical Arsenal Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="font-mono text-xs text-acid-lime uppercase tracking-widest mb-4">/ 05 {t.skills}</p>
            <h2 className="font-display text-5xl md:text-6xl mb-12">TECHNICAL <br/> ARSENAL</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="font-mono text-white/50 text-sm mb-4">{t.dev}</h3>
                <VelocityMarquee baseVelocity={-2}>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiReact className="text-2xl" /> React</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiTypescript className="text-2xl" /> TypeScript</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiLaravel className="text-2xl" /> Laravel</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiFlutter className="text-2xl" /> Flutter</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiFirebase className="text-2xl" /> Firebase</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiFastapi className="text-2xl" /> FastAPI</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiPostgresql className="text-2xl" /> PostgreSQL</div>
                </VelocityMarquee>
              </div>
              <div>
                <h3 className="font-mono text-white/50 text-sm mb-4">AI / DATA</h3>
                <VelocityMarquee baseVelocity={2}>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiPython className="text-2xl" /> Python</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaBrain className="text-2xl" /> Machine Learning</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaEye className="text-2xl" /> Computer Vision</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaCrosshairs className="text-2xl" /> YOLO</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaFileAlt className="text-2xl" /> OCR</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiPandas className="text-2xl" /> Pandas</div>
                </VelocityMarquee>
              </div>
              <div>
                <h3 className="font-mono text-white/50 text-sm mb-4">SYSTEM / NETWORK</h3>
                <VelocityMarquee baseVelocity={-2}>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaWindows className="text-2xl" /> Windows Server</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiUbuntu className="text-2xl" /> Ubuntu</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiVmware className="text-2xl" /> VMware</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaUsersCog className="text-2xl" /> Active Directory</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaNetworkWired className="text-2xl" /> DNS</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiNginx className="text-2xl" /> Nginx</div>
                </VelocityMarquee>
              </div>
              <div>
                <h3 className="font-mono text-white/50 text-sm mb-4">{t.cybersecurity || 'CYBERSECURITY'}</h3>
                <VelocityMarquee baseVelocity={2}>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaShieldAlt className="text-2xl" /> Penetration Testing</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiKalilinux className="text-2xl" /> Metasploit</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaDatabase className="text-2xl" /> SQLmap</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaNetworkWired className="text-2xl" /> Nmap</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaKey className="text-2xl" /> Cryptography</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaHashtag className="text-2xl" /> Hashcat</div>
                </VelocityMarquee>
              </div>
              <div>
                <h3 className="font-mono text-white/50 text-sm mb-4">HARDWARE / IOT</h3>
                <VelocityMarquee baseVelocity={-2}>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiArduino className="text-2xl" /> Arduino</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><SiEspressif className="text-2xl" /> ESP32</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaWifi className="text-2xl" /> IoT Sensors</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaMicrochip className="text-2xl" /> Microcontrollers</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaCube className="text-2xl" /> FreeCAD</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaCube className="text-2xl" /> Bambu Studio</div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-lg hover:border-acid-lime/50 hover:text-acid-lime transition-colors"><FaPrint className="text-2xl" /> 3D Printing</div>
                </VelocityMarquee>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  )
}
