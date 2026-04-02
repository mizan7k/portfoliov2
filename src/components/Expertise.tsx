import { motion } from 'motion/react';
import { Layout, Palette, Code, Smartphone, Zap, Globe } from 'lucide-react';

const skills = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "System Logic",
    description: "Designing and understanding complex digital processes to ensure smooth operations."
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Data Management",
    description: "Structured handling and optimization of information across various CRM and database systems."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Tool Adaptability",
    description: "Rapidly mastering and integrating new software platforms into existing workflows."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Problem Analysis",
    description: "Breaking down technical issues into manageable, actionable solutions."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Operational Agility",
    description: "Thriving in fast-paced environments by quickly mastering new tools and shifting priorities."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Human-Centric Logic",
    description: "Approaching technical problems with a deep understanding of the end-user experience."
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        EXPERTISE EXPERTISE EXPERTISE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-orange font-mono uppercase tracking-widest text-sm mb-4 block">Core Capabilities</span>
            <h2 className="text-6xl md:text-8xl font-black">EXPERTISE</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gray/30 border border-brand-gray/30">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-dark p-12 hover:bg-brand-orange group transition-all duration-700"
            >
              <div className="text-brand-orange group-hover:text-white transition-colors mb-8">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                {skill.title}
              </h3>
              <p className="text-gray-400 group-hover:text-white/80 transition-colors leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
