import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'

export default function Achievements() {
  const { lang } = useLanguage()

  const content = {
    en: {
      title: "ACHIEVEMENTS",
      petrochainDesc: "Built a smart prototype system for the verification and auditing of subsidized fuel distribution. Integrated vehicle detection (YOLO), license plate validation (OCR), eligibility filtering (XGBoost), and a blockchain-based audit trail.",
      sdgDesc: "Developed a Natural Language Processing (NLP) based Machine Learning model to analyze public conversations related to Sustainable Development Goals (SDGs) and brand sustainability. Built using Python, Streamlit, Pandas, and Plotly.",
      byteshieldDesc: "Designed a Static Malware Analysis system without executing files, using byte-level representation techniques (Byteplot) combined with a Deep Learning Convolutional Neural Network (CNN) architecture.",
      finalist: "FINALIST",
      firstPlace: "1ST PLACE",
      secondPlace: "2ND PLACE",
      role: "ROLE",
      teamLeader: "TEAM LEADER",
      members: "MEMBERS",
      supervisor: "SUPERVISOR",
      organizer: "ORGANIZER",
      year: "YEAR",
      team: "TEAM"
    },
    id: {
      title: "PRESTASI",
      petrochainDesc: "Membangun purwarupa sistem cerdas untuk verifikasi dan audit distribusi bahan bakar bersubsidi. Menggabungkan teknologi deteksi kendaraan (YOLO), validasi pelat nomor (OCR), pemfilteran kelayakan (XGBoost), dan jejak audit berbasis blockchain.",
      sdgDesc: "Mengembangkan model Machine Learning berbasis Natural Language Processing (NLP) untuk menganalisis percakapan publik terkait Sustainable Development Goals (SDGs) dan keberlanjutan merek. Dibangun menggunakan Python, Streamlit, Pandas, dan Plotly.",
      byteshieldDesc: "Merancang sistem deteksi malware statis (Static Malware Analysis) tanpa mengeksekusi file, menggunakan teknik representasi byte-level (Byteplot) yang dipadukan dengan arsitektur Deep Learning Convolutional Neural Network (CNN).",
      finalist: "FINALIS",
      firstPlace: "JUARA 1",
      secondPlace: "JUARA 2",
      role: "PERAN",
      teamLeader: "KETUA TIM",
      members: "ANGGOTA",
      supervisor: "PEMBIMBING",
      organizer: "PENYELENGGARA",
      year: "TAHUN",
      team: "TIM"
    }
  }

  const t = content[lang]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-12 relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }}
          className="font-mono text-xs text-acid-lime uppercase tracking-widest mb-4"
        >
          / 03 {t.title}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-16 items-start mt-12 bg-near-black p-8 md:p-12 border border-white/10"
        >
          <div className="text-[10rem] md:text-[12rem] leading-none font-display text-transparent bg-clip-text" style={{ WebkitTextStroke: '2px #B7FF00' }}>
            01
          </div>
          
          <div className="pt-6">
            <h2 className="font-display text-5xl md:text-7xl mb-4">KMIPN VIII 2026</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-acid-lime text-ink-black font-mono font-bold px-4 py-2 text-sm tracking-wider">{t.firstPlace}</span>
              <span className="bg-white/10 text-acid-lime font-mono font-bold px-4 py-2 text-sm tracking-wider">{t.finalist}</span>
              <span className="border border-white/20 font-mono px-4 py-2 text-sm text-white/80">E-GOVERNMENT</span>
              <span className="border border-white/20 font-mono px-4 py-2 text-sm text-white/80">SOLUSI INOVATIF</span>
            </div>

            <p className="text-white/70 text-lg mb-8 max-w-2xl font-light">
              <strong className="text-white font-medium">Project: PETROCHAIN.</strong> {t.petrochainDesc}
            </p>
            
            <div className="space-y-4 font-mono text-sm mt-8 border-t border-white/10 pt-6">
              <div className="flex border-b border-white/10 pb-4 hover:text-acid-lime transition-colors">
                <span className="w-32 md:w-48 text-white/40">{t.team}</span>
                <span className="text-paper-white">TIMBERAPA</span>
              </div>
              <div className="flex border-b border-white/10 pb-4 hover:text-acid-lime transition-colors">
                <span className="w-32 md:w-48 text-white/40">{t.role}</span>
                <span className="text-acid-lime font-bold">{t.teamLeader}</span>
              </div>
              <div className="flex border-b border-white/10 pb-4 hover:text-acid-lime transition-colors">
                <span className="w-32 md:w-48 text-white/40">{t.members}</span>
                <span className="text-paper-white">Muhammad Aziz, Amirullah, Deswita Nazwa Ariani</span>
              </div>
              <div className="flex pb-4 hover:text-acid-lime transition-colors">
                <span className="w-32 md:w-48 text-white/40">{t.supervisor}</span>
                <span className="text-paper-white">Dr. Rahmad Hidayat, S.Kom., M.Cs.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hackathon Bagus#3 */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-16 items-start mt-8 bg-near-black p-8 md:p-12 border border-white/10"
        >
          <div className="text-[8rem] md:text-[10rem] leading-none font-display text-transparent bg-clip-text" style={{ WebkitTextStroke: '2px #B7FF00' }}>
            02
          </div>
          
          <div className="pt-6">
            <h2 className="font-display text-4xl md:text-6xl mb-4">HACKATHON BAGUS #3</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-acid-lime text-ink-black font-mono font-bold px-4 py-2 text-sm tracking-wider">{t.firstPlace}</span>
              <span className="border border-white/20 font-mono px-4 py-2 text-sm text-white/80">MACHINE LEARNING</span>
              <span className="border border-white/20 font-mono px-4 py-2 text-sm text-white/80">DATA SCIENCE</span>
            </div>

            <p className="text-white/70 text-lg mb-8 max-w-2xl font-light">
              <strong className="text-white font-medium">Project: SDG SENTIMENT ANALYSIS.</strong> {t.sdgDesc}
            </p>
            
            <div className="space-y-4 font-mono text-sm mt-8 border-t border-white/10 pt-6">
              <div className="flex border-b border-white/10 pb-4 hover:text-acid-lime transition-colors">
                <span className="w-32 md:w-48 text-white/40">{t.organizer}</span>
                <span className="text-paper-white">Kelas Bagus</span>
              </div>
              <div className="flex border-b border-white/10 pb-4 hover:text-acid-lime transition-colors">
                <span className="w-32 md:w-48 text-white/40">{t.year}</span>
                <span className="text-paper-white">2025</span>
              </div>
              <div className="flex border-b border-white/10 pb-4 hover:text-acid-lime transition-colors">
                <span className="w-32 md:w-48 text-white/40">{t.members}</span>
                <span className="text-paper-white">Muhammad Aziz, Tata Aditya Pamungkas, Rafa Haris</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vibecoding FTP Policy */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row gap-16 items-start mt-8 bg-near-black p-8 md:p-12 border border-white/10"
        >
          <div className="text-[8rem] md:text-[10rem] leading-none font-display text-transparent bg-clip-text" style={{ WebkitTextStroke: '2px #B7FF00' }}>
            03
          </div>
          
          <div className="pt-6">
            <h2 className="font-display text-4xl md:text-6xl mb-4">VIBECODING FTP POLICY PNL</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-white text-ink-black font-mono font-bold px-4 py-2 text-sm tracking-wider">{t.secondPlace}</span>
              <span className="border border-white/20 font-mono px-4 py-2 text-sm text-white/80">VIBECODING</span>
              <span className="border border-white/20 font-mono px-4 py-2 text-sm text-white/80">PNL</span>
            </div>

            <p className="text-white/70 text-lg mb-8 max-w-2xl font-light">
              <strong className="text-white font-medium">Project: BYTESHIELD.</strong> {t.byteshieldDesc}
            </p>
            
            <div className="space-y-4 font-mono text-sm mt-8 border-t border-white/10 pt-6">
              <div className="flex border-b border-white/10 pb-4 hover:text-acid-lime transition-colors">
                <span className="w-32 md:w-48 text-white/40">{t.year}</span>
                <span className="text-paper-white">2026</span>
              </div>
              <div className="flex border-b border-white/10 pb-4 hover:text-acid-lime transition-colors">
                <span className="w-32 md:w-48 text-white/40">{t.organizer}</span>
                <span className="text-paper-white">Politeknik Negeri Lhokseumawe (PNL)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
