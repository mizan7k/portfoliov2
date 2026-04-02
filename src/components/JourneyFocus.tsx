import { motion } from 'motion/react';

export default function JourneyFocus() {
  return (
    <section id="journey" className="py-32 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-mono uppercase tracking-widest text-sm mb-4 block">The Mission</span>
            <h2 className="text-6xl md:text-8xl font-black mb-12 leading-none uppercase">JOURNEY<br />& FOCUS</h2>
            
            <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
              <p>
                I bridge the gap between human needs and technical systems. 
                My journey started in high-stakes customer operations, where I learned that the best technology is the kind that actually works for people.
              </p>
              <p>
                Today, I’m evolving into a "Vibe Coder"—leveraging AI and modern logic to build workflows that are as intuitive as they are efficient. 
                I don't just manage tasks; I engineer environments where efficiency and quality are natural byproducts.
              </p>
              <p>
                Whether it's managing complex customer inquiries or streamlining administrative tasks, I bring a practical, tech-forward mindset to every challenge.
              </p>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] lg:aspect-square group"
          >
            <div className="absolute inset-0 border-2 border-brand-orange translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative h-full w-full overflow-hidden bg-brand-gray">
              <img 
                src="https://i.imgur.com/ey1SSyb.png" 
                alt="Mizanur Rahman" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
