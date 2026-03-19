import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      // Show after scrolling past 60% of first viewport, hide near the page bottom
      const nearBottom = scrollY + windowH > docH - 300;
      setVisible(scrollY > windowH * 0.4 && !nearBottom);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4"
        >
          <div className="max-w-sm mx-auto">
            <a
              href="https://pages.razorpay.com/pl_SSzxZ4cqwYAduD/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full btn-primary rounded-2xl shadow-glow-lg px-5 py-4"
              id="sticky-enroll-btn"
            >
              <div className="text-left">
                <div className="text-sm font-bold">Enroll Now – ₹3999</div>
                <div className="text-xs text-white/70">Limited seats · Starts May 1</div>
              </div>
              <span className="text-2xl">🚀</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

