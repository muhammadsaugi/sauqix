import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-4 md:px-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
          About Me
        </h2>
        
        {/* Content Card */}
        <div className="glass-effect p-8 rounded-2xl glow-effect-hover">
          <motion.p 
            className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Saya adalah seorang <span className="text-blue-400 font-semibold">Web Developer</span> dan{' '}
            <span className="text-purple-400 font-semibold">Data Scientist</span> yang passionate 
            dalam menciptakan solusi digital yang inovatif dan user-friendly. Dengan background 
            dari SMK jurusan RPL dan saat ini sedang menempuh pendidikan di{' '}
            <span className="text-blue-400 font-semibold">Politeknik Negeri Jember - Teknik Informatika</span>.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Saya memiliki pengalaman dalam membangun aplikasi web modern menggunakan teknologi 
            terkini seperti <span className="text-blue-400">React</span>,{' '}
            <span className="text-purple-400">Python</span>, dan{' '}
            <span className="text-pink-400">Three.js</span>. Selalu excited untuk belajar hal baru 
            dan menghadapi tantangan teknis yang kompleks.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {['Problem Solver', 'Creative Thinker', 'Team Player', 'Fast Learner'].map((trait, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full font-medium"
              >
                ✨ {trait}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;