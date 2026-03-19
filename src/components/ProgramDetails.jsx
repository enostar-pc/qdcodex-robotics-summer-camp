import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Calendar, Clock, Layers, Wifi } from 'lucide-react';

const details = [
  { icon: Calendar, label: 'Duration', value: '15 Days', sub: 'Intensive program' },
  { icon: Clock, label: 'Daily Hours', value: '3–4 Hrs', sub: 'Per day' },
  { icon: Layers, label: 'Modules', value: '4 Modules', sub: 'Scratch · Robotics · Arduino · Lab' },
];

const schedule = [
  { emoji: '⏱️', label: 'Duration', value: '3 to 4 hours per day' },
  { emoji: '📅', label: 'Days', value: 'Monday to Friday' },
  { emoji: '🎯', label: 'Total Days', value: '15 days of learning' },
];

export default function ProgramDetails() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="details" ref={ref} className="py-16 sm:py-20 bg-[#080613] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex">📋 Program Details</span>
          <h2 className="section-title mb-3">
            Everything you need
            <br />
            <span className="gradient-text">to know</span>
          </h2>
        </motion.div>

        {/* Detail cards */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-4 sm:p-5 text-center hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center">
                <d.icon size={18} className="text-indigo-400" />
              </div>
              <div className="text-xl sm:text-2xl font-display font-bold gradient-text">{d.value}</div>
              <div className="text-white/80 text-xs font-medium mt-0.5">{d.label}</div>
              <div className="text-white/40 text-xs mt-1">{d.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Daily Schedule card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card border-indigo-500/20 overflow-hidden mb-6"
        >
          <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <div className="p-5 sm:p-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="text-lg">🗓️</span> Daily Schedule
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {schedule.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-3 bg-white/[0.04] rounded-xl px-4 py-3 border border-white/5"
                >
                  <span className="text-xl shrink-0">{s.emoji}</span>
                  <div>
                    <p className="text-white/45 text-xs">{s.label}</p>
                    <p className="text-white font-semibold text-sm mt-0.5">{s.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="glass-card border-amber-500/20 p-5"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <h4 className="text-white font-semibold text-sm mb-1">Laptop Required</h4>
              <p className="text-white/55 text-sm leading-relaxed">
                Students should bring their own laptop for the best learning experience. Any laptop with a browser works — no special specs needed.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
