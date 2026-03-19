import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const benefits = [
  {
    emoji: '🎓',
    title: 'Hands-On Learning',
    desc: 'Learn by doing — every session involves building real things, not just watching videos.',
  },
  {
    emoji: '🧑‍🏫',
    title: 'Expert Guidance',
    desc: 'Experienced mentors who simplify complex tech and make learning fun and effective.',
  },
  {
    emoji: '📱',
    title: 'Social Media Spotlight',
    desc: 'Get your projects featured on our social channels — real recognition for real work!',
  },
  {
    emoji: '🏅',
    title: 'Certificate of Completion',
    desc: 'Official QD CODEX certificate recognizing your achievement — add it to your portfolio!',
  },
  {
    emoji: '👕',
    title: 'QD CODEX T-Shirt',
    desc: 'Complimentary QD CODEX branded T-shirt — wear your tech pride with style!',
  },
  {
    emoji: '💧',
    title: 'QD CODEX Water Bottle',
    desc: 'A complimentary QD CODEX water bottle to keep you hydrated through every session.',
  },
];

const targetAudience = [
  '🎒 Students from Grade 6 to 9',
  '💡 Complete beginners — no coding needed',
  '🌍 Learning from anywhere in India',
  '🧠 Curious minds who love to build things',
];

export default function Benefits() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="benefits" ref={ref} className="py-16 sm:py-20">
      <div className="section-container">
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex">🎁 What You Get</span>
          <h2 className="section-title mb-3">
            Benefits that go
            <br />
            <span className="gradient-text">beyond the classroom</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-5 flex gap-4 hover:border-purple-500/30 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <span className="text-2xl shrink-0 group-hover:scale-125 transition-transform duration-300">
                {b.emoji}
              </span>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base mb-1">{b.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target audience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 sm:p-8 border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
        >
          <h3 className="font-display text-xl font-bold text-center mb-6">
            🎯 Who Is This For?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {targetAudience.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <span className="text-lg shrink-0">{item.slice(0, 2)}</span>
                <span className="text-white/80 text-sm">{item.slice(3)}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-indigo-300 text-sm font-medium">
              ✅ Absolutely no prior coding or tech experience required!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
