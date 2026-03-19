import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Sharma',
    grade: 'Grade 7, Delhi',
    text: 'I never thought I could build a real robot at 12! The Arduino sessions were mind-blowing. My parents couldn\'t believe what I made.',
    avatar: '👦',
    stars: 5,
  },
  {
    name: 'Priya Menon',
    grade: 'Grade 8, Bangalore',
    text: 'The Scratch module was so fun! I made my own game and all my friends played it. The mentors were super patient and helpful.',
    avatar: '👧',
    stars: 5,
  },
  {
    name: 'Rahul\'s Parent',
    grade: 'Parent, Mumbai',
    text: 'Best investment for my son\'s summer. He learned coding, built actual hardware projects, and gained so much confidence. Highly recommend!',
    avatar: '👨',
    stars: 5,
  },
];

const studentProjects = [
  { emoji: '🎮', title: 'Dino Jump Game', student: 'Karan, Gr.7' },
  { emoji: '💡', title: 'Smart Night Lamp', student: 'Sneha, Gr.8' },
  { emoji: '🤖', title: 'Obstacle Bot', student: 'Dev, Gr.6' },
  { emoji: '🌡️', title: 'Temp Alert System', student: 'Riya, Gr.9' },
];

export default function SocialProof() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="testimonials" ref={ref} className="py-16 sm:py-20">
      <div className="section-container">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-tag mb-4 inline-flex">⭐ Social Proof</span>
          <h2 className="section-title mb-2">
            What Students &amp;
            <br />
            <span className="gradient-text">Parents Say</span>
          </h2>
          <p className="text-white/50 text-sm">Real reviews from our camp alumni</p>
        </motion.div>

        <div className="flex flex-col gap-4 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-5 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{t.avatar}</span>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.grade}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Student Projects Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-center text-white/70 font-semibold text-sm uppercase tracking-wider mb-5">
            🏆 Featured Student Projects
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {studentProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                className="glass-card p-4 text-center hover:border-indigo-500/30 transition-all duration-300 group"
              >
                {/* Project image placeholder */}
                <div className="w-full aspect-square bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-3 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{p.emoji}</span>
                </div>
                <p className="text-white text-xs font-semibold">{p.title}</p>
                <p className="text-white/40 text-xs mt-0.5">{p.student}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs mt-4">
            📸 Photos from previous batch participants (2025 pilot program)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
