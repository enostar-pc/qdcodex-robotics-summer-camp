import { motion } from 'framer-motion';
import { Settings, Cpu, Hexagon, Component, RadioReceiver } from 'lucide-react';

export default function RoboticsBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] opacity-100">
      {/* Falling Stars */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 rounded-full bg-gradient-to-b from-transparent via-indigo-400 to-white"
          style={{
            height: `${Math.random() * 40 + 30}px`,
            left: `${Math.random() * 100}%`,
            top: `-20%`,
            opacity: Math.random() * 0.4 + 0.6, // Opacity between 0.6 and 1.0
          }}
          animate={{
            y: ['0vh', '120vh'],
          }}
          transition={{
            duration: Math.random() * 2 + 1.5, // Faster falling
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'linear',
          }}
        />
      ))}

      {/* Base Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Central Faded Logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-[0.25]"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.25, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img 
          src="/qdlogo1.png" 
          alt="QD Codex Logo Background" 
          className="w-[300px] md:w-[500px] object-contain"
        />
      </motion.div>

      {/* Pulsing Circuit Nodes */}
      {[
        { top: '15%', left: '10%' },
        { top: '35%', left: '80%' },
        { top: '65%', left: '15%' },
        { top: '85%', left: '75%' },
        { top: '50%', left: '50%' },
      ].map((pos, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_15px_3px_rgba(99,102,241,0.8)]"
          style={pos}
          animate={{ scale: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Floating Gears */}
      <motion.div
        className="absolute top-[20%] right-[10%] text-indigo-400/30"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ rotate: { duration: 15, repeat: Infinity, ease: 'linear' }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <Settings size={120} />
      </motion.div>

      <motion.div
        className="absolute top-[28%] right-[5%] text-purple-500/20"
        animate={{ rotate: -360, y: [0, 20, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <Settings size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[5%] text-indigo-500/20"
        animate={{ rotate: 360, y: [0, -30, 0] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, y: { duration: 10, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <Settings size={140} />
      </motion.div>

      {/* Floating Robotics Icons */}
      <motion.div
        className="absolute top-[40%] left-[8%] text-purple-400/30"
        animate={{ y: [0, -40, 0], x: [0, 20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Cpu size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-[40%] right-[12%] text-indigo-400/30"
        animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Component size={70} />
      </motion.div>

      <motion.div
        className="absolute top-[60%] left-[50%] text-pink-500/20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <RadioReceiver size={100} />
      </motion.div>

      {/* Distant Hexagons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`hex-${i}`}
          className="absolute text-indigo-300/10"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{ 
            y: [0, Math.random() * 40 - 20, 0], 
            rotate: [0, 360] 
          }}
          transition={{ 
            y: { duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 30 + i * 5, repeat: Infinity, ease: 'linear' }
          }}
        >
          <Hexagon size={60 + Math.random() * 60} />
        </motion.div>
      ))}
    </div>
  );
}
