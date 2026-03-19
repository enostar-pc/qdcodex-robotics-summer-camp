import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const modules = [
  {
    emoji: '🐱',
    badge: 'Week 1 · Days 1–4',
    title: 'Scratch Programming',
    subtitle: 'Code Without Complexity',
    description:
      'Dive into the world of coding with Scratch! Create interactive games, cool animations, and fun stories — all by dragging and dropping blocks. Perfect for absolute beginners.',
    skills: ['Game Design', 'Animations', 'Interactive Stories', 'Logic Building'],
    color: 'from-blue-600/30 to-indigo-600/30',
    border: 'border-blue-500/20',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    accentColor: 'bg-blue-500',
  },
  {
    emoji: '🤖',
    badge: 'Week 1 · Days 5–7',
    title: 'Basic Robotics',
    subtitle: 'Build Real Robots',
    description:
      'Take tech into the physical world! Build simple robots from scratch, understand how sensors work, and program your creations to respond to the environment.',
    skills: ['Robot Assembly', 'Sensors & Actuators', 'Motor Control', 'Problem Solving'],
    color: 'from-purple-600/30 to-pink-600/30',
    border: 'border-purple-500/20',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    accentColor: 'bg-purple-500',
  },
  {
    emoji: '⚡',
    badge: 'Week 2 · Days 8–12',
    title: 'Arduino Projects',
    subtitle: 'Hardware Meets Code',
    description:
      'Program real hardware with Arduino! Build smart devices, LED projects, and sensors-based systems. See your code make physical things happen in real-time.',
    skills: ['Circuit Building', 'C++ Basics', 'LED Projects', 'Smart Devices'],
    color: 'from-amber-600/30 to-orange-600/30',
    border: 'border-amber-500/20',
    badgeColor: 'bg-amber-500/20 text-amber-300',
    accentColor: 'bg-amber-500',
  },
  {
    emoji: '💡',
    badge: 'Week 2 · Days 13–15',
    title: 'Innovation Lab',
    subtitle: 'Your Idea, Built Yours',
    description:
      'The ultimate challenge! Work with mentors to design, build, and present your very own tech project. This is where creativity meets engineering — and legends are made.',
    skills: ['Design Thinking', 'Prototyping', 'Presentation', 'Mentorship'],
    color: 'from-emerald-600/30 to-teal-600/30',
    border: 'border-emerald-500/20',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
    accentColor: 'bg-emerald-500',
  },
];

export default function Curriculum() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="curriculum" ref={ref} className="py-16 sm:py-20 bg-[#080613] relative">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex">📚 Curriculum</span>
          <h2 className="section-title mb-3">
            4 Powerful Modules,
            <br />
            <span className="gradient-text">15 Days of Learning</span>
          </h2>
          <p className="text-white/55 text-sm sm:text-base max-w-md mx-auto">
            Each module builds on the last, taking you from zero to builder in just two weeks.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`glass-card ${mod.border} overflow-hidden group hover:shadow-card-hover transition-all duration-300`}
            >
              <div className={`p-5 sm:p-6 bg-gradient-to-br ${mod.color}`}>
                <div className="flex items-start gap-4">
                  {/* Emoji icon */}
                  <div className="shrink-0 text-4xl sm:text-5xl leading-none mt-1 group-hover:scale-110 transition-transform duration-300">
                    {mod.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-2 ${mod.badgeColor}`}>
                      {mod.badge}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-0.5">{mod.title}</h3>
                    <p className="text-white/50 text-sm mb-3">{mod.subtitle}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{mod.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {mod.skills.map((skill) => (
                        <span key={skill} className="flex items-center gap-1.5 text-xs text-white/60 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                          <span className={`w-1.5 h-1.5 rounded-full ${mod.accentColor}`} />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
