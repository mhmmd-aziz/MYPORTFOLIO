import { motion } from 'framer-motion'
import { ArrowUpRight, Award } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { useLanguage } from '../context/LanguageContext'

export default function Certificates() {
  const { lang } = useLanguage()

  const certificates = [
    { 
      id: 1, 
      name: 'Sertifikat Kompetensi Web Developer', 
      issuer: 'BNSP', 
      date: '2026',
      image: '/certificates/serif_bnsp_web.jpg'
    },
    { 
      id: 2, 
      name: 'Finalis E-Government KMIPN VIII', 
      issuer: 'Politeknik Negeri Ujung Pandang', 
      date: 'Sept 2026',
      image: '/certificates/Muhammad Aziz.png' 
    },
    { 
      id: 3, 
      name: 'Sertifikasi BNSP Web Developer', 
      issuer: 'BNSP', 
      date: '05 Juni 2026',
      image: '/certificates/Screenshot 2025-08-14 193957.png' 
    },
    { 
      id: 4, 
      name: 'Penghargaan Juara 1 KMIPN', 
      issuer: 'Politeknik Negeri Ujung Pandang', 
      date: '05 Juni 2026',
      image: '/certificates/TimBerapa.png' 
    },
    {
      id: 5,
      name: 'Sertifikat Pemateri',
      issuer: 'Komit PNL',
      date: '2025',
      image: '/certificates/Sertifikat_Pemateri_muhammad_aziz_page-0001.jpg'
    },
    {
      id: 6,
      name: 'Cloud Practitioner Essentials (AWS)',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      image: '/certificates/sertifikat_dicodingaws_dasarcloud-1.png'
    },
    {
      id: 7,
      name: 'Dasar Manajemen Proyek',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      image: '/certificates/sertifikat_course_manajemenproyek_dicoding.png'
    },
    {
      id: 8,
      name: 'Sertifikat Pencapaian',
      issuer: 'Penyelenggara Kompetisi',
      date: '2025',
      image: '/certificates/59.png'
    },
    {
      id: 9,
      name: 'Penghargaan Juara 1',
      issuer: 'Penyelenggara Kompetisi',
      date: '2026',
      image: '/certificates/Juara 1 (2).png'
    },
    {
      id: 10,
      name: 'Belajar Dasar Data Science',
      issuer: 'Dicoding Indonesia',
      date: '2026',
      image: '/certificates/Screenshot 2026-09-26 204020.png'
    },
    {
      id: 11,
      name: 'Belajar UX Design',
      issuer: 'Dicoding Indonesia',
      date: '2026',
      image: '/certificates/Screenshot 2026-09-26 204037.png'
    },
    {
      id: 12,
      name: '50 Besar Lomba Budaya GO',
      issuer: 'Kementerian Budaya dan Pariwisata',
      date: '2026',
      image: '/certificates/Screenshot 2026-09-26 204549.png'
    }
  ]

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto py-24 px-6 relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }}
          className="font-mono text-xs text-acid-lime uppercase tracking-widest mb-4 flex items-center gap-2"
        >
          <Award size={14} />
          / {lang === 'en' ? 'CERTIFICATES' : 'SERTIFIKAT'}
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl mb-16 uppercase flex items-baseline gap-4"
        >
          {lang === 'en' ? 'Professional Validation.' : 'Validasi Profesional.'}
          <span className="text-3xl text-acid-lime font-mono">[{certificates.length}]</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-white/10 bg-near-black hover:border-acid-lime/50 transition-colors relative overflow-hidden flex flex-col min-h-[400px] cursor-pointer"
            >
              {/* Image Section */}
              <div className="h-[250px] w-full overflow-hidden border-b border-white/10 relative">
                <div className="absolute inset-0 bg-ink-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 flex flex-col flex-grow justify-between relative z-20 bg-near-black">
                <div>
                  <p className="font-mono text-xs text-acid-lime uppercase tracking-widest mb-2">{cert.issuer}</p>
                  <h3 className="font-display text-xl text-white group-hover:text-acid-lime transition-colors leading-tight">{cert.name}</h3>
                </div>
                
                <div className="flex justify-between items-end mt-6">
                  <span className="font-mono text-xs text-white/40">{cert.date}</span>
                  <ArrowUpRight className="text-white/20 group-hover:text-acid-lime transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
