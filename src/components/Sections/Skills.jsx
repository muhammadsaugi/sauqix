import { motion } from 'framer-motion';
import SkillCard from '../UI/SkillCard';

const Skills = () => {
  const skills = [
    { name: 'React JS', level: 90, icon: '⚛️' },
    { name: 'JavaScript', level: 88, icon: '🟨' },
    { name: 'TypeScript', level: 82, icon: '🔷' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'Data Science', level: 78, icon: '📊' },
    { name: 'Machine Learning', level: 75, icon: '🤖' },
    { name: 'Node.js', level: 80, icon: '🟢' },
    { name: 'Git & GitHub', level: 88, icon: '🔀' },
    { name: 'REST API', level: 86, icon: '🔌' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 px-4 md:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gradient">
          Skills & Expertise
        </h2>
        
        <p className="text-center text-slate-400 mb-12 text-lg">
          Technologies and tools I work with
        </p>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={i} {...skill} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-lg">
            Constantly learning and exploring new technologies 🚀
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;