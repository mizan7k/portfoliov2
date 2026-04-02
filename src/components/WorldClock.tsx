import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const timezones = [
  { city: 'SYLHET', zone: 'Asia/Dhaka' },
  { city: 'LONDON', zone: 'Europe/London' },
  { city: 'NEW YORK', zone: 'America/New_York' },
  { city: 'GAZA', zone: 'Asia/Gaza' },
];

export default function WorldClock() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      timezones.forEach(({ city, zone }) => {
        newTimes[city] = new Intl.DateTimeFormat('en-US', {
          timeZone: zone,
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-orange py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {timezones.map((tz) => (
            <motion.div 
              key={tz.city}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start md:items-center text-white"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">
                  {tz.city}
                </span>
              </div>
              <div className="text-2xl md:text-3xl font-mono font-medium tracking-tight">
                {times[tz.city] || '--:--:-- --'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
