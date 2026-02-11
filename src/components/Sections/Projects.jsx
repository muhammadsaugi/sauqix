import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from '../Modals/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
   {
  title: 'Mandala Tani AI',
  description: 'AI-Powered Smart Agriculture Platform untuk Sidoarjo',
  fullDescription: 'Platform pertanian berbasis AI yang menyatukan Dinas Pertanian, penyuluh, dan petani Sidoarjo. Fitur unggulan: Rekomendasi Tanam AI, Prediksi OPT/Hama, Peta GIS interaktif, dan monitoring distribusi pupuk real-time.',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'Leaflet.js', 'Fuzzy Logic', 'TOPSIS Algorithm'],
  features: [
    'AI-based crop recommendation dengan Fuzzy Logic & data historis Sidoarjo',
    'Prediksi OPT/Hama berdasarkan 10 parameter kondisi lahan',
    'Interactive GIS Map untuk 18 kecamatan dengan visualisasi produksi',
    'Multi-role authentication system (Dinas, Penyuluh Kecamatan/Desa)',
    'Real-time monitoring dashboard untuk supply chain pupuk',
    'Simulasi tanam untuk 15+ jenis tanaman dengan AI scoring',
    'Responsive & mobile-friendly design'
  ],
  demo: 'https://mandala.sauqihub.my.id/',
  github: 'https://mandala.sauqihub.my.id/'
},
    {
  title: 'Sistem Monitor Maggot IoT',
  description: 'Dashboard monitoring real-time budidaya maggot BSF dengan IoT sensors & visualisasi interaktif',
  fullDescription: 'Platform monitoring komprehensif untuk budidaya maggot Black Soldier Fly (BSF) yang mengintegrasikan data sensor IoT, tracking visual pertumbuhan, dan decision support system. Dirancang dengan UI/UX yang ramah untuk komunitas non-teknis, menyediakan real-time monitoring suhu & kelembaban, galeri foto harian pertumbuhan, analisis data historis, dan panduan tindakan korektif otomatis.',
  tech: ['React.js', 'Tailwind CSS', 'Recharts', 'Lucide React', 'JavaScript ES6+'],
  features: [
    'Real-time monitoring suhu & kelembaban dengan 3-level alert system',
    'Visual growth tracking dengan timeline foto harian & zoom preview',
    'Interactive charts (Line, Area) untuk tren 7 hari dengan dual Y-axis',
    'Progress tracking dengan badge tahapan dan persentase cakupan',
    'Historical data table dengan export CSV functionality',
    'Responsive design optimal untuk mobile, tablet, desktop',
    'Integrated User Guide dengan step-by-step troubleshooting',
    'Component-based architecture untuk scalability'
  ],
  demo: 'https://dashboard-maggot.vercel.app/',
  github: 'https://github.com/muhammadsaugi/dashboard-maggot'
},
    {
      title: '3D Portfolio Website',
      description: 'Portfolio interaktif dengan Three.js & WebGL',
      fullDescription: 'Website portfolio modern dengan 3D elements, smooth animations, dan interactive experiences. Menampilkan kemampuan creative coding dengan teknologi web terkini.',
      tech: ['React', 'Three.js', 'Framer Motion', 'GSAP', 'WebGL', 'Tailwind'],
      features: [
        '3D interactive elements dengan Three.js',
        'Smooth scroll animations',
        'Magnetic hover effects',
        'Glassmorphism design',
        'Dark mode support',
        'Optimized performance & lazy loading',
        'Fully responsive design'
      ],
      demo: '#',
      github: '#'
    },
    {
  title: 'CokroTani – Smart Fertilizer Prediction System',
  description: 'Sistem informasi berbasis Web GIS untuk prediksi kebutuhan pupuk di Jawa Timur.',
  fullDescription: 'CokroTani adalah aplikasi berbasis web yang dirancang sebagai Decision Support System (DSS) untuk membantu pemerintah daerah dalam memprediksi kebutuhan pupuk berdasarkan wilayah dan komoditas pertanian. Sistem ini mengintegrasikan visualisasi peta (GIS), grafik analitik, serta manajemen data berbasis role (admin provinsi dan admin wilayah) untuk meningkatkan efisiensi distribusi pupuk dan produktivitas pertanian.',
  tech: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL', 'Leaflet.js', 'Chart.js'],
  features: [
    'Prediksi kebutuhan pupuk berbasis data komoditas dan wilayah',
    'Integrasi Web GIS menggunakan Leaflet.js',
    'Visualisasi data menggunakan Chart.js',
    'Role-based access control (Admin Provinsi & Admin Wilayah)',
    'Manajemen data komoditas dan wilayah',
    'Dashboard analitik untuk monitoring distribusi pupuk',
    'Autentikasi dan sistem keamanan berbasis Laravel'
  ],
  github: 'https://github.com/muhammadsaugi/cokrotani'
},
   {
  title: 'Website Perpustakaan Online',
  description: 'Aplikasi perpustakaan berbasis web menggunakan Laravel 10 & Filament Admin Panel.',
  fullDescription: 'Sistem Perpustakaan Online yang memungkinkan pengguna untuk melihat daftar buku, kategori, detail buku, memberikan ulasan, serta melakukan proses peminjaman dan pengembalian buku. Dilengkapi dengan dashboard admin menggunakan Filament untuk mengelola data buku, kategori, pengguna, dan transaksi secara efisien.',
  tech: [
    'Laravel 10',
    'Filament Admin',
    'MySQL',
    'Blade',
    'Tailwind CSS',
  ],
  features: [
    'Manajemen data buku (CRUD)',
    'Upload & manajemen gambar buku',
    'Manajemen kategori buku',
    'Sistem peminjaman & pengembalian buku',
    'Sistem ulasan & rating buku',
    'Dashboard admin menggunakan Filament',
    'Autentikasi login & register',
    'Export data peminjaman',
    'Responsive design'
  ],
  github: 'https://github.com/muhammadsaugi/Perpustakaan-Online'
}
,
    {
      title: 'Manajement Wifi & Mikrotik',
      description: 'Monitoring pelanggan dan juga mikrotik',
      fullDescription: 'Aplikasi chat real-time yang memungkinkan komunikasi instant antar user. Dilengkapi dengan fitur rooms, file sharing, dan typing indicators.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      features: [
        'Real-time messaging dengan Socket.io',
        'Private & group chat rooms',
        'File & image sharing',
        'Typing indicators',
        'Online/offline status',
        'Message history',
        'User authentication'
      ],
      github: 'https://github.com/muhammadsaugi/Management-Wifi'
    }
  ];

  const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        whileHover={{ y: -10 }}
        onClick={() => setSelectedProject(project)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-2xl glass-effect hover:border-blue-500 cursor-pointer group h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="p-6 relative z-10">
          <motion.h3 
            className="text-2xl font-bold text-white mb-3"
            animate={{ x: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>
          
          <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="text-blue-400 font-semibold flex items-center gap-2"
          >
            View Details →
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gradient">
          Featured Projects
        </h2>
        
        <p className="text-center text-slate-400 mb-12 text-lg">
          Some of my recent work and side projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '15+', label: 'Technologies' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <motion.h3 
                className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;