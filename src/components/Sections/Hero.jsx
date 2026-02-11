import { Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingGeometry from '../3D/FloatingGeometry';
import MagneticButton from '../UI/MagneticButton';
import ParticleField from '../3D/ParticleField';
import RotatingRings from '../3D/RotatingRings';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background - Multiple Layers */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[0, 10, -5]} intensity={0.7} color="#ec4899" />
          
          <Suspense fallback={null}>
            {/* Particle Field Background */}
            <ParticleField />
            
            {/* Main Floating Geometry */}
            <FloatingGeometry />
            
            {/* Rotating Rings */}
            <RotatingRings />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/20 to-slate-950 pointer-events-none z-[1]" />

      {/* Hero Content with Parallax */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-6xl"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Photo with Advanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group"
          >
            {/* Glowing Ring Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
            
            {/* Rotating Border */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-border animate-spin-slow" 
                 style={{ padding: '4px' }} />
            
            {/* Photo Container */}
            <motion.div
              whileHover={{ scale: 1.05, rotateZ: 5 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl"
            >
              {/* Replace with your photo URL */}
              <img 
                src="https://res.cloudinary.com/dezlfpufz/image/upload/v1770638911/profil_rfi6zk.jpg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Floating Particles around Photo */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full blur-sm"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full blur-sm"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Greeting Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6"
              >
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl"
                >
                  👋
                </motion.span>
                <span className="text-slate-300">Hello, I'm</span>
              </motion.div>

              {/* Main Heading with Glitch Effect */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient relative"
                style={{
                  backgroundSize: '200% auto',
                }}
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Muhammad Sauqi
                </motion.span>
                
                {/* Glitch Effect Lines */}
                <motion.span
                  className="absolute inset-0 text-gradient opacity-70"
                  animate={{
                    x: [0, -2, 2, 0],
                    opacity: [0, 0.7, 0]
                  }}
                  transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 5 }}
                >
                  Your Name
                </motion.span>
              </motion.h1>
              
              {/* Subtitle with Typing Effect */}
              <motion.div
                className="text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-6 font-light min-h-[3rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1 }}
                  className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-blue-500"
                  style={{ maxWidth: "fit-content" }}
                >
                  Web Developer & Data Scientist
                </motion.span>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Crafting innovative digital solutions with cutting-edge technologies.
                Transforming ideas into beautiful, functional realities.
              </motion.p>

              {/* Tech Stack Icons */}
              <motion.div
                className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                {['⚛️', '🐍', '🎨', '🚀', '💻', '🔥'].map((icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center text-2xl cursor-pointer"
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <MagneticButton onClick={scrollToContact}>
                  Let's Connect 🚀
                </MagneticButton>
                
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-effect rounded-full font-semibold text-white border-2 border-blue-500/30 hover:border-blue-500 transition-colors"
                >
                  View Projects
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;