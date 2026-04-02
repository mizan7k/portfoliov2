import { motion } from 'motion/react';

export default function VisualBreak() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-black">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <img 
          src="https://i.imgur.com/5iyiyJA.png" 
          alt="Visual Break" 
          className="w-full h-auto block"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
