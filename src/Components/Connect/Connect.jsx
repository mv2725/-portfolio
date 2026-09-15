import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSending || sent) return;

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 3000);
    }, 1600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-lg bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)] overflow-hidden"
      >
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Let's Talk
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          Send me a message and I'll fly it straight to my inbox.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 relative">
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Send Button with Bird Animation */}
          <div className="relative pt-2">
            <motion.button
              type="submit"
              whileHover={{ scale: sent || isSending ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
              className="relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-full font-semibold overflow-hidden disabled:opacity-80"
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Message Sent ✓
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isSending ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Send Message
                  </motion.span>
                )}
              </AnimatePresence>

              {/* The flying bird/plane icon */}
              <AnimatePresence>
                {isSending && (
                  <motion.div
                    key="bird"
                    initial={{ x: -20, y: 0, opacity: 1, rotate: 0 }}
                    animate={{
                      x: [0, 60, 220, 420],
                      y: [0, -10, -40, -90],
                      rotate: [0, -10, -15, -20],
                      opacity: [1, 1, 1, 0],
                    }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                    className="absolute left-1/2 -translate-x-1/2 text-white text-lg"
                  >
                    <FaPaperPlane />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </form>

        {/* Success ripple glow */}
        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ scale: 0, opacity: 0.6 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 rounded-2xl bg-purple-500 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default ContactForm;