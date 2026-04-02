import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-50 transition-all duration-1000 brightness-[0.8] contrast-[1.1]"
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        >
          <source src="https://res.cloudinary.com/dajnxhilb/video/upload/uhd_30fps_f6f3gm.mp4?_s=vp-3.7.2" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/20 to-brand-black" />
      </div>

      {/* Background Layered Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-1">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-brand-orange rounded-full blur-[120px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-orange rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-brand-orange font-mono uppercase tracking-[0.3em] text-sm mb-6 block">
              Customer Care Specialist with IT & AI Focus
            </span>
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] leading-[0.85] font-black mb-8 uppercase drop-shadow-2xl">
              VIBE<br />
              <span className="text-outline">CODER</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Turning ideas into practical solutions while managing real-world digital operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex flex-col md:flex-row items-center gap-8"
          >
            <a 
              href="#portfolio" 
              className="group flex items-center gap-4 bg-brand-orange text-white px-8 py-4 rounded-full font-bold transition-all hover:pr-10"
            >
              View Portfolio
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
            <div className="hidden md:block h-[1px] w-32 bg-brand-gray" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
