import { motion } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full border border-slate-700 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-gradient">{project.title}</h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white text-3xl transition-colors leading-none"
          >
            ×
          </button>
        </div>
        
        {/* Description */}
        <p className="text-slate-300 mb-6 leading-relaxed text-lg">
          {project.fullDescription}
        </p>
        
        {/* Technologies */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3">Teknologi yang Digunakan</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3">Fitur Utama</h3>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="text-slate-300 flex items-start">
                <span className="text-blue-400 mr-3 text-xl">▹</span> 
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
            >
              🚀 Live Demo
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg transition-colors font-semibold"
            >
              💻 View Code
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;