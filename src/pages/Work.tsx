import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'

export default function Work() {
  const { lang } = useLanguage()
  const [projectCount, setProjectCount] = useState(0)
  const gridRef = useRef<HTMLDivElement>(null)

  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (images: string[]) => {
    if (images.length === 0) return
    setSelectedImages(images)
    setCurrentSlide(0)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentSlide((prev) => (prev + 1) % selectedImages.length)
  }

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentSlide((prev) => (prev - 1 + selectedImages.length) % selectedImages.length)
  }

  useEffect(() => {
    if (gridRef.current) {
      // Calculate how many actual elements are inside the grid
      setProjectCount(gridRef.current.children.length)
    }
  }, [])

  const content = {
    en: {
      title: "SELECTED WORK",
      featured: "FEATURED",
      live: "LIVE",
      petrochainDesc: "A prototype concept for making subsidized-fuel distribution more targeted, transparent, and auditable. Features YOLO vehicle detection, OCR validation, XGBoost eligibility filtering, and a blockchain audit trail.",
      pfaDesc: "A full-stack AI platform designed to make student reflection more meaningful. PFASmart analyzes daily student emotions through a reflective approach, providing instant insights to teachers.",
      visitPlatform: "VISIT PLATFORM ↗",
      byteshieldDesc: "Analyze Windows executable files statically without executing them, using byte-level representation (byteplot) and deep learning.",
      aquaDesc: "IoT-based river water-level monitoring and flood early-warning concept with real-time Firebase syncing and mobile app alerts.",
      sdgDesc: "Analyzed public conversations related to SDGs and brand sustainability using Natural Language Processing (Hackathon Bagus#3 Winner).",
      infraDesc: "Multi-server environment configuration spanning Windows Server (AD, DNS, DHCP, IIS) and Ubuntu Server (Apache, Laravel hosting, OpenSSH).",
      cocoDesc: "Bilingual company profile and export-focused website for a coconut-products business, featuring responsive UI and WhatsApp inquiry integration.",
      cyberDesc: "Practical penetration testing and security research covering network reconnaissance, web vulnerability exploitation (SQLi, XSS), malware generation, and cryptographic cracking.",
      cadDesc: "Designed custom electronic enclosure boxes for IoT prototypes using FreeCAD. Managed the slicing and 3D printing execution utilizing Bambu Studio for rapid physical prototyping."
    },
    id: {
      title: "KARYA PILIHAN",
      featured: "UNGGULAN",
      live: "AKTIF",
      petrochainDesc: "Konsep purwarupa untuk membuat distribusi bahan bakar bersubsidi lebih tepat sasaran, transparan, dan dapat diaudit. Dilengkapi deteksi kendaraan (YOLO), validasi pelat nomor (OCR), filter kelayakan (XGBoost), dan jejak audit blockchain.",
      pfaDesc: "Platform AI full-stack yang dirancang untuk membuat refleksi siswa lebih bermakna. PFASmart menganalisis emosi harian siswa melalui pendekatan reflektif, memberikan wawasan instan kepada guru.",
      visitPlatform: "KUNJUNGI PLATFORM ↗",
      byteshieldDesc: "Menganalisis file executable Windows secara statis tanpa mengeksekusinya, menggunakan representasi tingkat byte (byteplot) dan deep learning.",
      aquaDesc: "Konsep pemantauan ketinggian air sungai dan peringatan dini banjir berbasis IoT dengan sinkronisasi Firebase real-time dan peringatan aplikasi mobile.",
      sdgDesc: "Menganalisis percakapan publik terkait SDGs dan keberlanjutan merek menggunakan Pemrosesan Bahasa Alami (Pemenang Hackathon Bagus#3).",
      infraDesc: "Konfigurasi lingkungan multi-server yang mencakup Windows Server (AD, DNS, DHCP, IIS) dan Ubuntu Server (Apache, hosting Laravel, OpenSSH).",
      cocoDesc: "Profil perusahaan dua bahasa dan situs web berfokus pada ekspor untuk bisnis produk kelapa, menampilkan antarmuka responsif dan integrasi WhatsApp.",
      cyberDesc: "Penelitian keamanan dan penetration testing praktis yang mencakup pengintaian jaringan, eksploitasi kerentanan web (SQLi, XSS), analisis payload malware, serta pemecahan kriptografi.",
      cadDesc: "Merancang desain kotak (enclosure) kustom untuk purwarupa IoT menggunakan FreeCAD. Mengelola proses slicing dan pencetakan 3D menggunakan Bambu Studio untuk rapid prototyping."
    }
  }

  const t = content[lang]

  return (
    <>
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="font-mono text-xs text-acid-lime uppercase tracking-widest mb-4"
        >
          / 02 {lang === 'en' ? 'WORK' : 'KARYA'}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 0.1 }}
          className="font-display text-6xl md:text-8xl mb-16 flex items-baseline gap-4"
        >
          {t.title}
          <span className="text-3xl text-acid-lime font-mono">[{projectCount > 0 ? projectCount : '..'}]</span>
        </motion.h2>
        
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PETROCHAIN */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }}
            className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black relative overflow-hidden cursor-pointer" onClick={() => openModal(["/work/petrochain0.jpg","/work/petrochain1.jpg","/work/petrochain2.jpg","/work/petrochain3.jpg","/work/petrochain4.jpg","/work/petrochain5.jpg","/work/petrochain6.jpg","/work/petrochain7.jpg"])}
          >
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/petrochain0.jpg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 right-0 p-4 font-mono text-acid-lime text-xs">{t.featured}</div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">PETROCHAIN</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">INTELLIGENT VERIFICATION</p>
            
            <p className="text-white/70 mb-8">{t.petrochainDesc}</p>
            
            <div className="flex flex-wrap gap-2">
              {['YOLO', 'OCR', 'XGBoost', 'Blockchain', 'IoT Prototype'].map(tech => (
                <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* PFASmart */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black relative overflow-hidden cursor-pointer" onClick={() => openModal(["/work/getsmart.png","/work/getsmart1.png"])}
          >
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/getsmart.png" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 right-0 p-4 font-mono text-acid-lime text-xs">{t.live}</div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">PFASMART</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">AI LEARNING COMPANION</p>
            
            <p className="text-white/70 mb-8">{t.pfaDesc}</p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="https://pfasmart.my.id/" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-white/20 hover:border-acid-lime hover:text-acid-lime px-4 py-2 transition-colors font-mono tracking-widest text-xs">
                {t.visitPlatform}
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Laravel', 'Inertia.js', 'React/Vue', 'AI Integration', 'Web Platform'].map(tech => (
                <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* ByteShield */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }}
            className="group border border-white/10 hover:border-white/30 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(["/work/byteshiled1.jpg","/work/byteshiled2.jpg","/work/byteshiled3.jpg"])}
          >
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/byteshiled1.jpg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white mb-2">BYTESHIELD</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">STATIC MALWARE ANALYSIS</p>
            <p className="text-white/70 mb-8">{t.byteshieldDesc}</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'FastAPI', 'CNN', 'Deep Learning'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-mono">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Aqua Sentinel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }}
            className="group border border-white/10 hover:border-white/30 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(["/work/aqua sentinel 1.jpg","/work/aqua sentinel 2.jpg"])}
          >
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/aqua sentinel 1.jpg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white mb-2">AQUA SENTINEL</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">IOT FLOOD EARLY-WARNING</p>
            <p className="text-white/70 mb-8">{t.aquaDesc}</p>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Firebase', 'IoT Sensors', 'Cloud Functions'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-mono">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* SDG Sentiment Analysis */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }}
            className="group border border-white/10 hover:border-white/30 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(["/work/sdgs 1.png","/work/sdgs2.png"])}
          >
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/sdgs 1.png" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white mb-2">SDG SENTIMENT</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">DATA SCIENCE / NLP</p>
            <p className="text-white/70 mb-8">{t.sdgDesc}</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Streamlit', 'Pandas', 'Plotly', 'NLP'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-mono">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Server Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="group border border-white/10 hover:border-white/30 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(["/work/INFRASTRUCTURE LAB 1.jpg","/work/INFRASTRUCTURE LAB2.jpg"])}
          >
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/INFRASTRUCTURE LAB 1.jpg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white mb-2">INFRASTRUCTURE LAB</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">SYSTEMS ADMINISTRATION</p>
            <p className="text-white/70 mb-8">{t.infraDesc}</p>
            <div className="flex flex-wrap gap-2">
              {['Windows Server', 'Ubuntu', 'VMware', 'AD DS', 'IIS'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-mono">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* CocoCarbone */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }}
            className="group border border-white/10 hover:border-white/30 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(["/work/cococarbone1.png","/work/cococarbone2.png"])}
          >
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/cococarbone1.png" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white mb-2">COCOCARBONE</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">COMPANY PROFILE / WEB</p>
            <p className="text-white/70 mb-8">{t.cocoDesc}</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-mono">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Cybersecurity Labs */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="group border border-white/10 hover:border-white/30 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(["/work/securitylab1.png","/work/security lab2.png"])}
          >
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/securitylab1.png" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white mb-2">SECURITY LABS</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">PENTESTING & RESEARCH</p>
            <p className="text-white/70 mb-8">{t.cyberDesc}</p>
            <div className="flex flex-wrap gap-2">
              {['Nmap', 'SQLmap', 'Metasploit', 'Hashcat'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-mono">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* 3D Printing & CAD */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="group border border-white/10 hover:border-white/30 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(["/work/3dcadprorttyp1.jpg","/work/3dcadprorttyp2.jpg"])}
          >
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/3dcadprorttyp1.jpg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white mb-2">3D PROTOTYPING</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">FREECAD & 3D PRINTING</p>
            <p className="text-white/70 mb-8">{t.cadDesc}</p>
            <div className="flex flex-wrap gap-2">
              {['FreeCAD', 'Bambu Studio', 'Rapid Prototyping', 'IoT Enclosure'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 text-xs font-mono">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* NEW PROJECTS BELOW */}
          {/* Salon App */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(['/work/salon we app.jpeg', '/work/salon web app2.jpeg'])}>
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/salon we app.jpeg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">SALON APP</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">WEB APPLICATION</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A salon management web application built with Laravel.' : 'Aplikasi web manajemen salon yang dibangun menggunakan Laravel.'}</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'PHP', 'Web'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* Showroom Mobil */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black">
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">SHOWROOM MOBIL</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">WEB APPLICATION</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A car showroom management system using CodeIgniter.' : 'Sistem manajemen showroom mobil berbasis CodeIgniter.'}</p>
            <div className="flex flex-wrap gap-2">
              {['CodeIgniter', 'PHP', 'Web'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* DailyNotes */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black">
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">DAILYNOTES</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">WEB APPLICATION</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A personal daily journaling application built with Laravel.' : 'Aplikasi catatan harian pribadi yang dibangun dengan Laravel.'}</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'PHP', 'Web'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* Dashboard MHS */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(['/work/dashboard mhs1.png'])}>
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/dashboard mhs1.png" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">DASHBOARD MHS</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">FRONTEND WEB</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A student dashboard frontend interface.' : 'Antarmuka frontend untuk dashboard mahasiswa.'}</p>
            <div className="flex flex-wrap gap-2">
              {['HTML/CSS', 'JavaScript', 'Frontend'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* e-Surat JTIK */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(['/work/suratjttik.jpeg'])}>
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/suratjttik.jpeg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">E-SURAT JTIK</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">WEB APPLICATION</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A digital correspondence management system for the JTIK department.' : 'Sistem manajemen persuratan digital untuk jurusan TIK.'}</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'PHP', 'Web'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* Finance App */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black">
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">FINANCE APP</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">WEB APPLICATION</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A financial management system built with Laravel.' : 'Aplikasi manajemen keuangan berbasis web dengan Laravel.'}</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'PHP', 'Web'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* Rental App */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(['/work/rental app1.jpeg', '/work/rental app 2.jpeg'])}>
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/rental app1.jpeg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">RENTAL APP</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">WEB APPLICATION</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A vehicle/equipment rental management application.' : 'Aplikasi manajemen penyewaan kendaraan/barang.'}</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'PHP', 'Web'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* Sekilas Tugas */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(['/work/sekilastaask1.jpeg', '/work/seilastask2.jpeg'])}>
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/sekilastaask1.jpeg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">SEKILAS TUGAS</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">WEB APPLICATION</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A task management application built with Laravel.' : 'Aplikasi manajemen tugas untuk memudahkan pelacakan pekerjaan.'}</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'PHP', 'Web'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* Admin Kasir Imzy */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(['/work/kasir imzy1.jpg', '/work/kasir imzy 2.jpg', '/work/kasir imzy 3.jpg'])}>
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/kasir imzy1.jpg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">IMZY POS</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">REACT SPA / FIREBASE</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A modern Point of Sale (POS) admin dashboard built with React and Firebase.' : 'Dashboard admin sistem kasir modern berbasis React dan Firebase.'}</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Firebase', 'Vite'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* Suara Mata */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(['/work/SUARA MATA 0.jpeg', '/work/SUARA MATA1.jpeg'])}>
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/SUARA MATA 0.jpeg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">SUARA MATA</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">ARTIFICIAL INTELLIGENCE</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'An AI-based vision and voice model project.' : 'Proyek model AI berbasis penglihatan (vision) dan suara (voice).'}</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Machine Learning', 'Computer Vision'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>


          {/* Plant Disease App */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(['/work/plantdieseup.png'])}>
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/plantdieseup.png" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">PLANT DISEASE APP</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">FULLSTACK AI PLATFORM</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A fullstack application serving an AI model for plant disease detection.' : 'Aplikasi fullstack yang menyajikan model AI untuk deteksi penyakit tanaman.'}</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'AI Backend', 'Web Frontend'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* Komit Web */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(['/work/komit1.png', '/work/komit2.png'])}>
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/komit1.png" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">KOMIT WEB</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">WEB APPLICATION</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'Official website for the Informatics & Computer Technology student community (KOMIT PNL), built with Laravel Inertia and React.' : 'Website resmi komunitas mahasiswa Teknologi Informasi dan Komputer (KOMIT PNL), dibangun dengan Laravel Inertia dan React.'}</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'Inertia.js', 'React', 'PHP'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>

          {/* Manajemen Ruang */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group border border-white/10 hover:border-acid-lime/50 transition-colors p-8 bg-near-black cursor-pointer" onClick={() => openModal(['/work/manajemeng raungan 1.jpeg'])}>
            {/* Image Preview */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-bl-[100px] flex justify-end items-start">
              <img src="/work/manajemeng raungan 1.jpeg" alt="Preview" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-4xl text-white group-hover:text-acid-lime transition-colors mt-2 mb-2">MANAJEMEN RUANG</h3>
            <p className="font-mono text-xs tracking-widest text-acid-lime mb-6">WEB APPLICATION</p>
            <p className="text-white/70 mb-8">{lang === 'en' ? 'A room scheduling and management system built with Laravel.' : 'Sistem penjadwalan dan manajemen ruangan yang dibangun dengan Laravel.'}</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'PHP', 'Web'].map(tech => <span key={tech} className="px-3 py-1 border border-white/20 text-xs font-mono">{tech}</span>)}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>

    {/* Image Slider Modal - rendered via portal to escape transform stacking context */}
    {createPortal(
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.92)', padding: '16px' }}
            onClick={closeModal}
          >
            <button 
              onClick={closeModal}
              style={{ position: 'absolute', top: '24px', right: '24px', color: '#fff', background: 'none', border: '1px solid rgba(255,255,255,0.2)', padding: '8px', cursor: 'pointer', zIndex: 10000, display:'flex', alignItems:'center', justifyContent:'center' }}
            >
              <X size={28} color="white" />
            </button>
            
            <div 
              style={{ position: 'relative', width: '90vw', maxWidth: '1200px', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0B0B0B', border: '1px solid rgba(255,255,255,0.15)', overflow: 'hidden' }}
              onClick={e => e.stopPropagation()}
            >
              {selectedImages.length > 0 ? (
                <img 
                  src={selectedImages[currentSlide]} 
                  alt={`Screenshot ${currentSlide + 1}`} 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).alt = 'Image failed to load: ' + selectedImages[currentSlide];
                    (e.currentTarget as HTMLImageElement).style.padding = '20px';
                    (e.currentTarget as HTMLImageElement).style.color = 'white';
                  }}
                />
              ) : (
                <div style={{ color: 'white', fontFamily: 'monospace' }}>No Images Available</div>
              )}
              
              {selectedImages.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    style={{ position:'absolute', left:'16px', top:'50%', transform:'translateY(-50%)', padding:'12px', background:'rgba(0,0,0,0.7)', color:'white', border:'1px solid rgba(255,255,255,0.2)', cursor:'pointer', display:'flex', zIndex:10 }}
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    style={{ position:'absolute', right:'16px', top:'50%', transform:'translateY(-50%)', padding:'12px', background:'rgba(0,0,0,0.7)', color:'white', border:'1px solid rgba(255,255,255,0.2)', cursor:'pointer', display:'flex', zIndex:10 }}
                  >
                    <ChevronRight size={32} />
                  </button>
                  
                  <div style={{ position:'absolute', bottom:'16px', left:'50%', transform:'translateX(-50%)', background:'rgba(0,0,0,0.85)', padding:'6px 16px', border:'1px solid rgba(255,255,255,0.15)', zIndex:10 }}>
                    <span style={{ fontFamily:'monospace', fontSize:'14px', color:'#B7FF00', fontWeight:'bold', letterSpacing:'2px' }}>
                      {currentSlide + 1} / {selectedImages.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
  </>
  )
}
