import { motion } from 'motion/react';

const timeline = [
  {
    year: "Dec 2024 – Present",
    role: "Customer Support Manager",
    company: "FaithIT",
    description: "Deliver fast, accurate support across multiple channels, boosting customer satisfaction. Maintain CRM records and onboard new clients."
  },
  {
    year: "Mar 2022 – Mar 2024",
    role: "Travel Manager",
    company: "Jahez Typing Services",
    description: "Processed visa applications via ICP & Amer portals. Managed ticketing and coordinated documents for smoother operations."
  },
  {
    year: "Nov 2021 – Mar 2022",
    role: "Administrative Assistant",
    company: "IT Lab Solutions Ltd.",
    description: "Handled data entry and system updates with high accuracy. Adapted to multiple software tools and workflows seamlessly."
  },
  {
    year: "Jul 2019 – Oct 2021",
    role: "Assistant Counselor",
    company: "SMS Higher Education Group",
    description: "Guided students in OIETC & Duolingo test prep. Boosted student performance through structured mentoring."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Header Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%] lg:sticky lg:top-32 lg:h-fit"
          >
            <span className="text-brand-orange font-mono uppercase tracking-widest text-sm mb-4 block">History</span>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-12 leading-none uppercase tracking-tighter">EXPERIENCE</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-md">
              A timeline of my professional journey, focusing on operational excellence and customer-centric logic.
            </p>
          </motion.div>

          {/* Timeline Side */}
          <div className="lg:w-[60%] relative pt-12 lg:pt-0">
            <div className="absolute left-0 top-0 w-px h-full bg-brand-gray ml-4 lg:ml-0" />
            
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12 lg:pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 bg-brand-black border-2 border-brand-orange rounded-full -ml-4 lg:-ml-4 z-10" />
                  
                  <span className="text-brand-orange font-mono text-sm mb-2 block">{item.year}</span>
                  <h3 className="text-3xl font-bold mb-2">{item.role}</h3>
                  <div className="text-lg font-medium text-white mb-4">{item.company}</div>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
