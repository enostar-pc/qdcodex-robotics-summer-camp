import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const projects = [
  { emoji: '🎮', title: 'Scratch Game', desc: 'An interactive platformer game with custom characters, levels & score system.' },
  { emoji: '🌦️', title: 'Weather Station', desc: 'Arduino-powered sensor that displays real-time temperature & humidity.' },
  { emoji: '🤖', title: 'Line Follower Bot', desc: 'A robot that autonomously follows a path using IR sensors.' },
  { emoji: '🚪', title: 'Smart Door Lock', desc: 'Password-protected door system with LED indicators built on Arduino.' },
  { emoji: '🎨', title: 'Animation Film', desc: 'A short animated story created entirely in Scratch with original story & art.' },
  { emoji: '🌱', title: 'Plant Watering Bot', desc: 'Auto-waters your plant when soil moisture drops below threshold.' },
  { emoji: '⚡', title: 'Tinkercad Design', desc: 'Simulate complex circuits and 3D models using the Tinkercad platform.' },
  { emoji: '💡', title: 'Innovation Project', desc: 'Student\'s own idea — designed, built, and presented with mentor support.' },
];

export default function Projects() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex">🛠️ Real Projects</span>
          <h2 className="section-title mb-3">
            Build{' '}
            <span className="gradient-text">5–7 Real-World</span>
            <br />
            Projects
          </h2>
          <p className="text-white/55 text-sm sm:text-base max-w-md mx-auto">
            Not toy examples — actual working builds you can demo, share, and put in your portfolio.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass-card p-5 flex gap-4 hover:border-purple-500/30 hover:bg-white/[0.07] transition-all duration-300 group cursor-default"
            >
              <span className="text-3xl shrink-0 group-hover:scale-125 transition-transform duration-300 leading-none mt-0.5">
                {p.emoji}
              </span>
              <div>
                <h3 className="font-semibold text-white text-base mb-1">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 glass-card p-5 text-center border-indigo-500/20"
        >
          <p className="text-white/70 text-sm sm:text-base">
            🌟 Your best projects will be{' '}
            <span className="text-indigo-400 font-semibold">featured on QD CODEX social media</span>{' '}
            for 5,000+ followers to see!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
