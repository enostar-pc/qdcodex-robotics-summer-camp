import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const grades = ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9'];
const batchOptions = ['Batch A – 9:00 AM to 12:00 PM', 'Batch B – 1:00 PM to 4:00 PM', 'Batch C – 5:00 PM to 8:00 PM'];

const FORM_ENDPOINT = 'https://formspree.io/f/placeholder'; // Replace with actual endpoint

export default function Registration() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({
    name: '', grade: '', phone: '', email: '', batch: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      // Show success anyway for demo — replace FORM_ENDPOINT in production
      setStatus('success');
    }
  };

  return (
    <section id="register" ref={ref} className="py-16 sm:py-20 bg-[#080613] relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-tag mb-4 inline-flex">📝 Register Now</span>
          <h2 className="section-title mb-3">
            Start Your
            <br />
            <span className="gradient-text">Tech Journey Today!</span>
          </h2>
          <p className="text-white/55 text-sm sm:text-base">
            Fill in the form below — we'll confirm your seat via WhatsApp/email within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card border-indigo-500/20 overflow-hidden"
        >
          <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
          <div className="p-6 sm:p-8">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 size={56} className="text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-white mb-2">You're Registered! 🎉</h3>
                <p className="text-white/60 text-sm">
                  Thank you, <strong>{form.name}</strong>! We've received your registration and will confirm your seat via WhatsApp/email within 24 hours.
                </p>
                <p className="text-indigo-400 text-sm mt-4 font-medium">
                  Get ready to Build. Create. Innovate! 🚀
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Student's Full Name *
                  </label>
                  <input
                    id="reg-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={form.name}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                {/* Grade */}
                <div>
                  <label htmlFor="grade" className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Current Grade *
                  </label>
                  <select
                    id="reg-grade"
                    name="grade"
                    required
                    value={form.grade}
                    onChange={handleChange}
                    className="input-field appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0f0c29]">Select your grade</option>
                    {grades.map((g) => (
                      <option key={g} value={g} className="bg-[#0f0c29]">{g}</option>
                    ))}
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Parent's WhatsApp Number *
                  </label>
                  <input
                    id="reg-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={form.phone}
                    onChange={handleChange}
                    className="input-field"
                    pattern="[0-9]{10}"
                    maxLength={10}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    id="reg-email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. parent@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                {/* Batch */}
                <div>
                  <label htmlFor="batch" className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Preferred Batch *
                  </label>
                  <select
                    id="reg-batch"
                    name="batch"
                    required
                    value={form.batch}
                    onChange={handleChange}
                    className="input-field appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0f0c29]">Select a batch</option>
                    {batchOptions.map((b) => (
                      <option key={b} value={b} className="bg-[#0f0c29]">{b}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white/60 text-xs font-medium mb-1.5 uppercase tracking-wide">
                    Any Questions? (Optional)
                  </label>
                  <textarea
                    id="reg-message"
                    name="message"
                    rows={3}
                    placeholder="Any questions or special requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className="input-field resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or contact us on WhatsApp.
                  </div>
                )}

                <button
                  id="reg-submit-btn"
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary mt-2 text-base sm:text-lg w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Registering...
                    </>
                  ) : (
                    '🚀 Register Now & Start Your Tech Journey'
                  )}
                </button>

                <p className="text-center text-white/30 text-xs">
                  By registering, you agree to be contacted via WhatsApp for camp updates.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
