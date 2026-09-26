import { motion, useInView, type Variants } from 'framer-motion'
import { ArrowUpRight, MapPin, Download, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'
// @ts-ignore - Bypass TS7016 for JSX components
import Lanyard from '../components/lanyard/Lanyard.jsx'
const LanyardComponent: any = Lanyard;

import TechText from '../components/TechText'
import { useEffect, useRef } from 'react'

const WordReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
      className="inline-block"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0.2 },
            visible: { opacity: 1 }
          }}
          className="mr-[0.25em] inline-block transition-opacity duration-300"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Home() {
  const { lang } = useLanguage()
  const lanyardContainerRef = useRef(null)
  const isLanyardInView = useInView(lanyardContainerRef, { once: false, amount: 0.1 })

  useEffect(() => {
    if (window.location.hash === '#about') {
      const el = document.getElementById('about')
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const textItemVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-end bg-ink-black overflow-hidden">
        
        {/* ABSOLUTE PROFILE IMAGE AT BOTTOM RIGHT */}
        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:flex absolute bottom-0 right-[2%] h-full w-[55%] pointer-events-none items-end justify-end z-10"
        >
          <img 
            src="/profile_kiri.png" 
            alt="Profile"
            className="h-full max-w-none w-auto object-contain object-bottom origin-bottom opacity-40 md:opacity-100"
          />
        </motion.div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-30 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="max-w-7xl mx-auto w-full relative z-20 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-32 pb-16">
          
          {/* Typography Column (Left) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="md:col-span-8 lg:col-span-7 flex flex-col justify-end relative z-20"
          >

            <motion.div variants={textItemVariants} className="w-full relative h-[16vw] min-h-[120px] max-h-[200px]">
              <TechText
                text="MUHAMMAD"
                align="left"
                fontFamily="Anton"
                fontWeight={400}
                fontSize={320}
                letterSpacing={0.02}
                reveal="letter"
                color="#ffffff"
                accentColor="#ffffff"
              />
            </motion.div>
            <motion.div variants={textItemVariants} className="w-full relative h-[16vw] min-h-[120px] max-h-[200px] -mt-4">
              <TechText
                text="AZIZ"
                align="left"
                fontFamily="Anton"
                fontWeight={400}
                fontSize={320}
                letterSpacing={0.02}
                reveal="letter"
                color="#B7FF00"
                accentColor="#B7FF00"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-mono text-xs uppercase tracking-widest text-white/50 space-y-2 border-l border-acid-lime pl-4"
              >
                <p className="text-paper-white text-sm">
                  {lang === 'en' ? 'INFORMATICS ENGINEERING STUDENT' : 'MAHASISWA TEKNIK INFORMATIKA'}
                </p>
                <p>
                  {lang === 'en' ? 'DIGITAL BUILDER · AI · WEB · IOT' : 'PENGEMBANG DIGITAL · AI · WEB · IOT'}
                </p>
                <p className="flex items-center gap-2 mt-4"><MapPin size={14}/> ACEH, INDONESIA</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl font-medium max-w-sm text-white/80"
              >
                {lang === 'en' 
                  ? 'I build practical digital products across web development, artificial intelligence, and IoT.'
                  : 'Saya membangun produk digital praktis mencakup pengembangan web, kecerdasan buatan, dan IoT.'}
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link to="/work" className="bg-acid-lime text-ink-black px-6 py-3 font-mono text-sm font-bold tracking-widest hover:bg-white transition-colors flex items-center gap-2">
                    {lang === 'en' ? 'EXPLORE WORK' : 'LIHAT KARYA'} <ArrowUpRight size={16} />
                  </Link>
                  <a href="/CV_MUHAMMAD_AZIZ.pdf" download="CV_MUHAMMAD_AZIZ.pdf" className="border border-white/20 text-white px-6 py-3 font-mono text-sm font-bold tracking-widest hover:border-acid-lime hover:text-acid-lime transition-colors flex items-center gap-2">
                    {lang === 'en' ? 'DOWNLOAD CV' : 'UNDUH CV'} <Download size={16} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* MOBILE ONLY PROFILE IMAGE */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="md:hidden mt-16 w-full flex justify-center z-10"
            >
              <img 
                src="/profile_kiri.png" 
                alt="Profile"
                className="w-full max-w-[300px] h-auto object-contain opacity-90"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* INFINITE MARQUEE SECTION */}
      <div className="py-4 border-y-4 border-acid-lime bg-acid-lime overflow-hidden relative flex">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-acid-lime to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-acid-lime to-transparent z-10 pointer-events-none" />
        <motion.div 
          className="flex whitespace-nowrap gap-12 text-3xl md:text-5xl font-display text-ink-black"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {/* Double it for seamless loop */}
          {['WEB DEVELOPMENT', '•', 'ARTIFICIAL INTELLIGENCE', '•', 'CYBERSECURITY', '•', 'INTERNET OF THINGS', '•', 'WEB DEVELOPMENT', '•', 'ARTIFICIAL INTELLIGENCE', '•', 'CYBERSECURITY', '•', 'INTERNET OF THINGS', '•'].map((item, i) => (
            <span key={i} className={item === '•' ? 'text-ink-black/30' : ''}>{item}</span>
          ))}
        </motion.div>
      </div>

      {/* ABOUT SECTION */}
      <div id="about" className="max-w-7xl mx-auto px-6 lg:px-12 py-32 border-t border-white/10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3"
          >
            <p className="font-mono text-xs text-acid-lime uppercase tracking-widest mb-4">
              / 01 {lang === 'en' ? 'ABOUT' : 'TENTANG'}
            </p>
            <h2 className="font-display text-5xl md:text-7xl uppercase">
              {lang === 'en' ? 'Who is Aziz?' : 'Siapa Aziz?'}
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 relative overflow-hidden group"
            >
              <img 
                src="/aziz who.JPG" 
                alt="Muhammad Aziz" 
                className="w-full h-auto max-h-[500px] object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              {/* Decorative border */}
              <div className="absolute inset-0 border border-white/20 group-hover:border-acid-lime/50 transition-colors duration-700 pointer-events-none" />
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 text-lg md:text-2xl text-white space-y-8 font-light max-w-3xl"
          >
            <p>
              <WordReveal text={lang === 'en' 
                ? 'Muhammad Aziz is an Informatics Engineering student at the Department of Information and Computer Technology (TIK), Politeknik Negeri Lhokseumawe (PNL). He bridges the gap between theoretical software engineering and practical, high-impact digital systems.' 
                : 'Muhammad Aziz adalah mahasiswa Teknik Informatika di Jurusan Teknologi Informasi dan Komputer (TIK), Politeknik Negeri Lhokseumawe (PNL). Ia menjembatani teori rekayasa perangkat lunak dengan sistem digital praktis yang berdampak tinggi.'} />
            </p>
            <p>
              <WordReveal text={lang === 'en' 
                ? 'Driven by an obsessive attention to detail, he builds and experiments across multiple domains, ranging from AI-powered verification systems (Computer Vision & Machine Learning) and IoT early-warning frameworks, to robust web platforms and scalable server infrastructures.'
                : 'Didorong oleh ketelitian dan perhatian pada detail, ia membangun dan bereksperimen di berbagai bidang, mulai dari sistem verifikasi AI (Computer Vision & Machine Learning) dan kerangka peringatan dini IoT, hingga platform web dan infrastruktur server.'} />
            </p>
            <p className="border-l-2 border-acid-lime pl-6 text-xl italic text-white">
              <WordReveal text={lang === 'en'
                ? '"Building useful things with code, AI, and a relentless focus on solving real-world problems."'
                : '"Membangun hal-hal yang bermanfaat dengan kode, AI, dan fokus tanpa henti pada pemecahan masalah dunia nyata."'} />
            </p>
            <p>
              <WordReveal text={lang === 'en'
                ? 'His current public footprint includes leading award-winning competition teams (such as winning 1st Place in KMIPN VIII 2026 for E-Government) and serving as a Web Developer & Digihub Division Leader at Komit PNL.'
                : 'Jejak rekam publiknya mencakup memimpin tim kompetisi pemenang penghargaan (seperti Juara 1 KMIPN VIII 2026 kategori E-Government) serta menjabat sebagai Pengembang Web & Ketua Divisi Digihub di Komit PNL.'} />
            </p>
          </motion.div>
        </div>
      </div>

      {/* GITHUB CALENDAR SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 p-6 md:p-10 bg-near-black flex flex-col items-center"
        >
          <div className="w-full mb-6 text-center md:text-left">
            <p className="font-mono text-xs text-acid-lime uppercase tracking-widest mb-2">/ GITHUB</p>
            <h2 className="font-display text-3xl md:text-4xl">TOP REPOSITORIES</h2>
          </div>
          
          <div className="w-full flex flex-col gap-4">
            <a href="https://github.com/mhmmd-aziz" target="_blank" rel="noreferrer" className="block border border-white/10 p-6 hover:border-acid-lime/50 transition-colors group bg-ink-black relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-white/20 group-hover:bg-acid-lime transition-colors" />
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-2xl text-white group-hover:text-acid-lime transition-colors flex items-center gap-3">
                  <Code2 size={22} /> Aqua-Sentinel-IoT
                </h3>
                <span className="font-mono text-xs border border-white/20 px-2 py-1 rounded text-white/50 hidden sm:block">Public</span>
              </div>
              <p className="text-white/60 text-sm font-light mb-4">Real-time river monitoring system using Firebase and ESP32 microcontrollers. Built for early warning flood detection.</p>
              <div className="flex items-center gap-4 font-mono text-xs text-white/50">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400"/> C++</span>
              </div>
            </a>

            <a href="https://github.com/mhmmd-aziz" target="_blank" rel="noreferrer" className="block border border-white/10 p-6 hover:border-acid-lime/50 transition-colors group bg-ink-black relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-white/20 group-hover:bg-acid-lime transition-colors" />
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-2xl text-white group-hover:text-acid-lime transition-colors flex items-center gap-3">
                  <Code2 size={22} /> PetroChain-CV
                </h3>
                <span className="font-mono text-xs border border-white/20 px-2 py-1 rounded text-white/50 hidden sm:block">Public</span>
              </div>
              <p className="text-white/60 text-sm font-light mb-4">AI Subsidy Validation using YOLO object detection models for vehicle identification and classification.</p>
              <div className="flex items-center gap-4 font-mono text-xs text-white/50">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"/> Python</span>
              </div>
            </a>
          </div>
          
          <a href="https://github.com/mhmmd-aziz" target="_blank" rel="noreferrer" className="mt-8 font-mono text-sm tracking-widest text-acid-lime hover:text-white transition-colors flex items-center gap-2 self-center md:self-start">
            VIEW ON GITHUB <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* HIGHLIGHT SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs text-acid-lime uppercase tracking-widest mb-4">/ 02 {lang === 'en' ? 'THE PHILOSOPHY' : 'FILOSOFI'}</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            {lang === 'en' 
              ? 'BRIDGING HARDWARE, SOFTWARE, AND SECURITY.' 
              : 'MENGHUBUNGKAN PERANGKAT KERAS, PERANGKAT LUNAK, & KEAMANAN.'}
          </h2>
          <Link to="/work" className="inline-flex items-center gap-2 text-acid-lime font-mono text-sm tracking-widest hover:text-white transition-colors">
            {lang === 'en' ? 'SEE ALL PROJECTS' : 'LIHAT SEMUA PROYEK'} <ArrowUpRight size={16} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/10 p-6 bg-near-black group hover:border-acid-lime/50 transition-colors"
          >
            <h3 className="font-display text-2xl mb-2">Aqua Sentinel</h3>
            <p className="text-white/60 text-sm mb-4">IoT River Monitoring & Firebase.</p>
            <div className="w-full h-1 bg-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-acid-lime w-0 group-hover:w-full transition-all duration-700" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/10 p-6 bg-near-black group hover:border-acid-lime/50 transition-colors"
          >
            <h3 className="font-display text-2xl mb-2">PetroChain</h3>
            <p className="text-white/60 text-sm mb-4">AI Subsidy Validation (YOLO).</p>
            <div className="w-full h-1 bg-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-acid-lime w-0 group-hover:w-full transition-all duration-700" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/10 p-6 bg-near-black group hover:border-acid-lime/50 transition-colors sm:col-span-2"
          >
            <h3 className="font-display text-2xl mb-2">Security Labs</h3>
            <p className="text-white/60 text-sm mb-4">Practical penetration testing, network reconnaissance, and payload generation.</p>
            <div className="w-full h-1 bg-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-acid-lime w-0 group-hover:w-full transition-all duration-700" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* LANYARD SECTION */}
      <div className="w-full border-t border-white/10 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left: Lanyard Component */}
          <div ref={lanyardContainerRef} className="w-full h-[600px] lg:h-[800px] border-b lg:border-b-0 lg:border-r border-white/10 bg-transparent flex items-center justify-center relative overflow-hidden">
            {isLanyardInView && (
              <LanyardComponent position={[0, -4, 22]} gravity={[0, -40, 0]} frontImage="/LANYARD.png" backImage="/LANYARD.png" lanyardImage="/logo.png" lanyardWidth={1.5} />
            )}
          </div>

          {/* Right: Text Elements */}
          <div className="w-full h-full p-8 lg:p-16 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl leading-tight mb-8"
            >
              INTELLIGENT SYSTEMS<br/>ENGINEERING.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/70 text-lg mb-12 font-light"
            >
              {lang === 'en'
                ? 'Currently exploring the intersection of deep learning architectures, predictive modeling, and scalable data pipelines. Constantly pushing the boundaries of what is possible with artificial intelligence and data-driven solutions in the real world.'
                : 'Saat ini mengeksplorasi persimpangan antara arsitektur deep learning, pemodelan prediktif, dan pipeline data yang dapat diskalakan. Terus mendorong batas kemungkinan dengan kecerdasan buatan dan solusi berbasis data di dunia nyata.'}
            </motion.p>
            
            <div className="space-y-8 font-mono">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="border-t border-white/10 pt-4"
              >
                <p className="text-acid-lime text-xs tracking-widest mb-1">01. DEEP LEARNING ARCHITECTURES</p>
                <p className="text-white/50 text-xs tracking-widest">RESEARCH</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="border-t border-white/10 pt-4"
              >
                <p className="text-acid-lime text-xs tracking-widest mb-1">02. PREDICTIVE MODELING</p>
                <p className="text-white/50 text-xs tracking-widest">IMPLEMENTATION</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.4 }}
                className="border-t border-white/10 pt-4"
              >
                <p className="text-acid-lime text-xs tracking-widest mb-1">03. DATA & ANALYTICS</p>
                <p className="text-white/50 text-xs tracking-widest">EXPERIMENT</p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </PageTransition>
  )
}
