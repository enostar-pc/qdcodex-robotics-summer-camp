import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Video, Code, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Real-World Projects',
    desc: 'Build 5–7 actual projects — games, smart devices, and robots you can demo and share.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Trophy,
    title: 'Social Media Exposure',
    desc: 'Your projects get featured on our social channels — 5K+ followers see your creations!',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    desc: 'Guided by experienced educators who make complex tech simple and fun for beginners.',
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex">🌟 About the Camp</span>
          <h2 className="section-title mb-4">
            A hands-on{' '}
            <span className="gradient-text">tech adventure</span>
            <br />
            for young innovators
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Summer Tech Camp QD FutureBots 2026 is an intensive 15-day program designed to spark creativity, critical thinking, and tech skills in students from Grade 6 to 9. No prior experience needed — just curiosity and enthusiasm!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-5 sm:p-6 flex gap-4 hover:border-indigo-500/30 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-glow-sm group-hover:scale-110 transition-transform duration-300`}>
                <f.icon size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1.5 text-base">{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 grid grid-cols-3 gap-3"
        >
          {[
            { num: '15', label: 'Days' },
            { num: '3–4', label: 'Hrs/Day' },
            { num: '5–7', label: 'Projects' },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-display font-extrabold gradient-text">{s.num}</div>
              <div className="text-white/50 text-xs sm:text-sm mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
