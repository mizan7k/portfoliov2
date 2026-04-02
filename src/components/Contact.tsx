import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, Github, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/mizan7k" },
    { icon: Facebook, href: "https://www.facebook.com/Mizan7k" },
    { icon: Instagram, href: "https://www.instagram.com/m1zanur.rahman/" },
    { icon: MessageCircle, href: "https://wa.me/8801333516909" },
  ];
  return (
    <section id="contact" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] -mr-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-mono uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-6xl md:text-8xl font-black mb-12">LET'S<br />TALK</h2>
            
            <p className="text-xl text-gray-400 font-light mb-12 max-w-md">
              I'm always open to new opportunities and collaborations. 
              Reach out via email or connect with me on social media.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-gray rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">Email Me</div>
                  <div className="text-xl font-bold">private.mizan@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand-gray rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">Location</div>
                  <div className="text-xl font-bold">Sylhet, Bangladesh</div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#E93807' }}
                  className="text-gray-400 transition-colors"
                >
                  <social.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-gray/50 p-10 md:p-16 rounded-3xl border border-brand-gray backdrop-blur-sm h-fit"
          >
            <form 
              action="https://formspree.io/f/xykbdblr" 
              method="POST" 
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full bg-transparent border-b border-brand-gray py-4 focus:border-brand-orange outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent border-b border-brand-gray py-4 focus:border-brand-orange outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Your Inquiry"
                  className="w-full bg-transparent border-b border-brand-gray py-4 focus:border-brand-orange outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  placeholder="Tell me about your inquiry..."
                  required
                  className="w-full bg-transparent border-b border-brand-gray py-4 focus:border-brand-orange outline-none transition-colors resize-none"
                />
              </div>

              <button type="submit" className="w-full group flex items-center justify-center gap-4 bg-brand-orange text-white py-6 rounded-full font-bold text-lg transition-all hover:gap-6 shadow-xl">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
