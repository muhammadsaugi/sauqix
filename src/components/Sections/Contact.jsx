import { motion } from 'framer-motion';
import MagneticButton from '../UI/MagneticButton';

const Contact = () => {
  const contactInfo = [
    { 
      icon: '📧', 
      label: 'Email', 
      value: 'muhammadsaugi7@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=muhammadsaugi7@gmail.com'
    },
    { 
      icon: '💼', 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/muhammad-sauqi',
      link: 'https://linkedin.com/in/muhammad-sauqi'
    },
    { 
      icon: '🐙', 
      label: 'GitHub', 
      value: 'github.com/muhammadsaugi',
      link: 'https://github.com/muhammadsaugi'
    },
    { 
      icon: '📱', 
      label: 'WhatsApp', 
      value: '+62 81359555879',
      link: 'https://wa.me/6281359555879'
    },
    { 
      icon: '🌐', 
      label: 'Website', 
      value: 'sauqix.is-a.dev',
      link: 'https://yourwebsite.com'
    },
    { 
      icon: '📍', 
      label: 'Location', 
      value: 'Sidoarjo, Indonesia',
      link: '#'
    }
  ];

  const socialMedia = [
    { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/muhammad-sauqi' },
    { name: 'GitHub', icon: '🐙', link: 'https://github.com/muhammadsaugi' },
    { name: 'Instagram', icon: '📸', link: 'https://instagram.com/sauqi_segaf' }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Work Together
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out! 
            I'm always open to discussing new opportunities and ideas.
          </motion.p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-effect p-6 rounded-xl hover:border-blue-500 transition-all cursor-pointer glow-effect-hover"
            >
              <div className="text-4xl mb-3">{contact.icon}</div>
              <p className="text-sm text-slate-400 mb-1">{contact.label}</p>
              <p className="text-white font-semibold break-all">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialMedia.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 flex items-center justify-center glass-effect rounded-full text-2xl hover:border-blue-500 transition-all"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400 mb-6 text-lg">
            Ready to start a conversation?
          </p>
          <MagneticButton onClick={() => window.location.href = 'https://wa.me/6281359555879'}>
            Send Me a Message 📨
          </MagneticButton>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-slate-300 font-medium">Available for freelance work</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-800 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 mb-4">
            © copyright by Sauqi segaf
          </p>
          <p className="text-slate-500 text-sm">
            Sauqi ❤️ Raisa
          </p>
        </motion.div>
      </footer>
    </section>
  );
};

export default Contact;