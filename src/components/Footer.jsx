
export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 bg-[#080613]">
      <div className="section-container text-center">
        <div className="flex justify-center items-center mb-6">
          <img src="/qdlogo1.png" alt="QD CODEX Logo" className="w-40 sm:w-56 object-contain" />
        </div>
        <p className="text-white/40 text-sm mb-3">
          Summer Tech Camp QD FutureBots 2026 — Build. Create. Innovate.
        </p>
        <div className="flex justify-center gap-6 text-white/30 text-xs mb-6">
          <a href="mailto:info@qdcodex.com" className="hover:text-indigo-400 transition-colors">
            info@qdcodex.com
          </a>
          <a href="tel:+919787015703" className="hover:text-indigo-400 transition-colors">
            +91 97870 15703
          </a>
        </div>
        <div className="flex justify-center gap-4 text-xs text-white/20">
          <span>Grades 6–9</span>
          <span>·</span>
          <span>Starting May 1, 2026</span>
        </div>
        <p className="text-white/15 text-xs mt-6">
          © 2026 QD CODEX. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
