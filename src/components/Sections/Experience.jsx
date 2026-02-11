import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

 const experiences = [
    {
      title: 'Mentor Bootcamp AI',
      company: 'PT Universal Big Data (UBIG)',
      period: 'Des 2024 - Jan 2025',
      description: 'Bertanggung jawab sebagai mentor dalam kegiatan Bootcamp UBIG RMK 2025, membimbing peserta dalam pemahaman teknologi AI dan pengolahan data.',
      achievements: [
        'Membimbing peserta bootcamp dalam implementasi Python dan Machine Learning',
        'Menyusun materi edukasi terkait pengolahan data menggunakan Pandas dan NumPy',
        'Memberikan feedback teknis pada proyek-proyek AI yang dikerjakan peserta'
      ]
    },
    {
      title: 'Praktik Kerja Lapangan (PKL)',
      company: 'PT Universal Big Data (UBIG)',
      period: 'Juli 2024 - Des 2024',
      description: 'Melaksanakan praktik kerja lapangan dengan fokus pada pengembangan solusi berbasis data dan teknologi web di lingkungan industri.',
      achievements: [
        'Berkontribusi dalam pengembangan chat bot menggunakan Flowise Ai',
        'Bekerja sama dengan tim profesional dalam lingkungan agile development',
        'Belajar Menegenai Mechine Learning dan juga Data Science'
      ]
    },
    {
      title: 'Web Development Competition',
      company: 'Universitas Brawijaya',
      period: 'Okt 2025',
      description: 'Berkompetisi dalam ajang pengembangan aplikasi web tingkat universitas, fokus pada inovasi UI/UX dan fungsionalitas sistem.',
      achievements: [
        'Juara 2 dalam kompetisi Web Development',
        'Membangun prototipe aplikasi web yang responsif dan user-friendly',
        'Mempresentasikan solusi teknis di hadapan dewan juri akademisi'
      ]
    }
  ];

  const certifications = [
    {
      title: 'PKL',
      issuer: 'PT Universal Big Data',
      date: '2024',
      icon: '🏢', // Ikon kantor/instansi untuk PKL
      image: 'https://res.cloudinary.com/dezlfpufz/image/upload/v1770639560/magang_nbxbtj.jpg',
      credentialId: 'NOMOR: 242230117',
      skills: ['Frontend Development', 'React', 'Teamwork', 'Agile']
    },
    {
      title: 'Mentor Bootcamp AI',
      issuer: 'PT Universal Big Data',
      date: '2024',
      icon: '👨‍🏫', // Ikon mentor/pengajar
      image: 'https://res.cloudinary.com/dezlfpufz/image/upload/v1770640363/mentor_xxyxxq.jpg',
      credentialId: 'NOMOR: 242250004',
      skills: ['AI Mentoring', 'Python', 'Data Science', 'Public Speaking']
    },
    {
      title: 'Juara 2 Lomba Web Dev',
      issuer: 'Universitas Brawijaya',
      date: '2025',
      icon: '🏆',
      image: 'https://res.cloudinary.com/dezlfpufz/image/upload/v1770639154/web-dev_qegwga.jpg',
      credentialId: '00027/UN10.F10.01/LL/01.03/2025',
      skills: ['Web Design', 'Fullstack Development', 'Problem Solving']
    },
  ];

  // Certificate Modal Component
  const CertificateModal = ({ cert, onClose }) => {
    if (!cert) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50, rotateX: -15 }}
          animate={{ scale: 1, y: 0, rotateX: 0 }}
          exit={{ scale: 0.8, y: 50, rotateX: -15 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 rounded-2xl p-2 max-w-4xl w-full border border-slate-700 shadow-2xl"
        >
          {/* Certificate Image */}
          <div className="relative rounded-xl overflow-hidden mb-4 group">
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-full h-auto object-cover"
            />
            
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl transition-colors"
            >
              ×
            </button>

            {/* Watermark Badge */}
            <div className="absolute top-4 left-4 px-4 py-2 glass-effect rounded-full">
              <span className="text-2xl mr-2">{cert.icon}</span>
              <span className="text-white font-semibold">Verified</span>
            </div>
          </div>

          {/* Certificate Details */}
          <div className="p-6">
            <h3 className="text-3xl font-bold text-gradient mb-2">{cert.title}</h3>
            <p className="text-xl text-purple-400 font-semibold mb-4">{cert.issuer}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-slate-400 text-sm mb-1">Issued Date</p>
                <p className="text-white font-semibold">{cert.date}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Credential ID</p>
                <p className="text-white font-semibold font-mono text-sm">{cert.credentialId}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <p className="text-slate-400 text-sm mb-2">Skills Acquired</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold"
              >
                Verify Certificate
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass-effect text-white rounded-lg font-semibold"
              >
                Download
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 px-4 md:px-20 bg-slate-900/30 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-effect p-6 md:p-8 rounded-xl hover:border-blue-500 transition-all relative overflow-hidden group"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <span className="text-blue-400 font-semibold mt-2 md:mt-0 px-4 py-2 glass-effect rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-blue-400 mr-2 text-xl">✓</span>
                        <span className="text-slate-400">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section - ADVANCED with Images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Certifications & Awards
            </h3>
            <p className="text-slate-400 text-lg">
              Click on any certificate to view details
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedCert(cert)}
                className="glass-effect rounded-xl overflow-hidden cursor-pointer group relative"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 glass-effect rounded-full flex items-center justify-center text-2xl">
                    {cert.icon}
                  </div>

                  {/* View Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/60"
                  >
                    <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white">
                      View Certificate
                    </span>
                  </motion.div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                    {cert.title}
                  </h4>
                  <p className="text-slate-400 text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold text-sm">{cert.date}</span>
                    <span className="text-slate-500 text-xs">Click to expand</span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal 
            cert={selectedCert} 
            onClose={() => setSelectedCert(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;