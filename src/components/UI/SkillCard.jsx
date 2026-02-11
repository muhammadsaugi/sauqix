import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SkillCard = ({ name, level, icon }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="p-6 glass-effect rounded-xl hover:border-blue-500 transition-all group cursor-pointer glow-effect-hover"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
      
      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
      
      <p className="text-sm text-slate-400 mt-2 text-right">{level}%</p>
    </motion.div>
  );
};

export default SkillCard;