import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Sylhet Restaurant",
    category: "Digital Dining Experience",
    image: "https://i.imgur.com/kxAhsiP.jpeg",
    description: "A modern web presence for a restaurant, focusing on intuitive navigation and visual appeal.",
    link: "https://mizan7k.github.io/sylhet_restaurant/"
  },
  {
    id: 2,
    title: "TrueText",
    category: "AI-Powered Text Analysis",
    image: "https://i.imgur.com/1N8JZ5Q.jpeg",
    description: "An application designed to analyze and refine text using modern logic and AI-driven insights.",
    link: "https://mizan7k.github.io/truetext-app/"
  },
  {
    id: 3,
    title: "Interstellar",
    category: "Creative UI Generation",
    image: "https://i.imgur.com/kxAhsiP.jpeg",
    description: "Quick and creative UI generation for modern web applications.",
    link: "https://mizan7k.github.io/interstellar/"
  },
  {
    id: 4,
    title: "TradeCore",
    category: "Business Operating System",
    image: "https://i.imgur.com/1N8JZ5Q.jpeg",
    description: "A unified business operating system for retail, pharmacy, and grocery management.",
    link: "https://mizan7k.github.io/TradeCore/"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Header Side - Sticky */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%] lg:sticky lg:top-32 lg:h-fit"
          >
            <span className="text-brand-orange font-mono uppercase tracking-widest text-sm mb-4 block">Selected Works</span>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-12 leading-none uppercase tracking-tighter">PORTFOLIO</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
              A collection of projects where strategy meets aesthetic excellence. 
              Each piece is a study in layered composition and visual hierarchy.
            </p>
          </motion.div>

          {/* Projects List Side */}
          <div className="lg:w-[60%] flex flex-col">
            {projects.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative border-b border-brand-gray py-12 cursor-pointer first:pt-0 block"
              >
                <div className="relative z-10">
                  <span className="text-brand-orange font-mono text-xs mb-4 block uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight transition-all duration-500 group-hover:text-brand-orange group-hover:translate-x-4 mb-6">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 font-light leading-relaxed mb-8 group-hover:text-white transition-colors duration-500 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-brand-orange font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    View Live Site <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-brand-orange/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom -mx-6 px-6" />
              </motion.a>
            ))}

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <button className="px-10 py-4 border border-brand-gray hover:border-brand-orange hover:bg-brand-orange transition-all duration-500 rounded-full font-bold uppercase tracking-widest text-xs">
                Explore All Projects
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
