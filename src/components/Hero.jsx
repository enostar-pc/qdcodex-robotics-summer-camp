import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Zap, Star, ChevronDown } from 'lucide-react';

const TARGET_DATE = new Date('2026-05-01T00:00:00');

function useCountdown(target) {
  const calc = () => {
    const diff = target - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    return { days, hours, mins, secs };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

const FloatingIcon = ({ icon: Icon, className, delay = 0 }) => (
  <motion.div
    className={`absolute pointer-events-none opacity-10 text-indigo-300 ${className}`}
    animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
    transition={{ duration: 7 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <Icon size={32} />
  </motion.div>
);

const CountdownUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="glass-card px-3 py-2 sm:px-4 sm:py-3 min-w-[58px] sm:min-w-[70px] text-center">
      <span className="text-2xl sm:text-3xl font-display font-bold gradient-text leading-none">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="text-[10px] sm:text-xs text-white/40 mt-1.5 uppercase tracking-wider">{label}</span>
  </div>
);

export default function Hero() {
  const time = useCountdown(TARGET_DATE);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient px-4 pt-20 pb-32">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-qd-logo opacity-[0.03] bg-repeat pointer-events-none" />
      </div>

      {/* Floating icons */}
      <FloatingIcon icon={Code2} className="top-24 left-6 sm:left-16" delay={0} />
      <FloatingIcon icon={Cpu} className="top-32 right-8 sm:right-20" delay={2} />
      <FloatingIcon icon={Zap} className="bottom-40 left-10 sm:left-24" delay={1} />
      <FloatingIcon icon={Star} className="bottom-60 right-6 sm:right-16" delay={3} />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5"
        >
          <span className="section-tag">
            ✨ Registration Open &nbsp;·&nbsp; Limited Seats
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
        >
          🚀 Summer Tech Camp QD{' '}
          <span className="gradient-text">FutureBots 2026</span>
          <br />
          <span className="text-white/90 text-3xl sm:text-4xl lg:text-5xl">by QD CODEX</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg sm:text-xl text-white/70 mb-2 font-medium"
        >
          Build. Create. Innovate.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg text-white/50 mb-8"
        >
          Turn Your Ideas into Reality!
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-8"
        >
          <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Camp starts in</p>
          <div className="flex items-start justify-center gap-3">
            <CountdownUnit value={time.days} label="Days" />
            <span className="text-2xl font-bold text-indigo-400 mt-2">:</span>
            <CountdownUnit value={time.hours} label="Hours" />
            <span className="text-2xl font-bold text-indigo-400 mt-2">:</span>
            <CountdownUnit value={time.mins} label="Mins" />
            <span className="text-2xl font-bold text-indigo-400 mt-2">:</span>
            <CountdownUnit value={time.secs} label="Secs" />
          </div>
        </motion.div>

        {/* Key highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-9"
        >
          {['📅 Starts May 1', '⏱ 15-Day Program', '🎥 3–4 Hrs Daily'].map((item) => (
            <span key={item} className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/8 border border-white/10 text-white/80">
              {item}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="https://pages.razorpay.com/pl_SSzxZ4cqwYAduD/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base sm:text-lg animate-pulse-glow"
            id="hero-enroll-btn"
          >
            🚀 Enroll Now – ₹3999 + GST
          </a>
          <a
            href="#curriculum"
            onClick={(e) => { e.preventDefault(); document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-secondary text-base"
            id="hero-curriculum-btn"
          >
            📚 View Curriculum
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
