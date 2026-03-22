import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Check, Zap } from 'lucide-react';

const inclusions = [
  '15-day intensive program',
  '3–4 hours daily expert-led sessions',
  '5–7 real hands-on projects',
  'QD CODEX Completion Certificate',
  'Social media project feature',
  'QD CODEX branded T-shirt',
  'QD CODEX water bottle',
  'Mentor support & doubt clearing',
];

export default function Pricing() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="pricing" ref={ref} className="py-16 sm:py-20 bg-[#080613] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-tag mb-4 inline-flex">💰 Pricing</span>
          <h2 className="section-title mb-3">
            One Simple Price,
            <br />
            <span className="gradient-text">Infinite Value</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          {/* Urgency banner */}
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-xl px-4 py-2.5 text-center mb-4">
            <p className="text-amber-300 text-sm font-semibold flex items-center justify-center gap-2">
              <Zap size={14} className="shrink-0" />
              ⚡ Early Bird Offer — Limited seats available! Book now before prices go up.
            </p>
          </div>

          {/* Price card */}
          <div className="glass-card border-indigo-500/30 overflow-hidden">
            {/* Top gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <div className="p-6 sm:p-8">
              {/* Price display */}
              <div className="text-center mb-6">
                <div className="text-white/40 text-sm line-through">₹5999 Regular Price</div>
                <div className="text-5xl sm:text-6xl font-display font-extrabold gradient-text mt-1">
                  ₹3999 + GST
                </div>
                <div className="text-white/50 text-sm mt-1">One-time payment · All inclusive</div>
                <div className="mt-2">
                  <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                    SAVE ₹2000 — 33% OFF
                  </span>
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-3 mb-7">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-indigo-400" />
                    </div>
                    <span className="text-white/75 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://pages.razorpay.com/pl_SSzxZ4cqwYAduD/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-base sm:text-lg animate-pulse-glow"
                id="pricing-enroll-btn"
              >
                🚀 Enroll Now for ₹3999 + GST
              </a>

              <p className="text-center text-white/30 text-xs mt-3">
                Secure payment · Instant confirmation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
