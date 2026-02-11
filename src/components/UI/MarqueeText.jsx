import { motion } from 'framer-motion';

const MarqueeText = ({ text, speed = 50, className = '' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 bg-slate-800/30 backdrop-blur-sm border-y border-slate-700 ${className}`}>
      <motion.div
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: speed, 
          ease: "linear" 
        }}
      >
        {[...Array(10)].map((_, i) => (
          <span 
            key={i} 
            className="text-3xl md:text-4xl font-bold text-slate-400 mx-8"
          >
            {text} •
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;