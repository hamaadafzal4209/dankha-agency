"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useState } from "react";

export function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 rounded-2xl glass-strong shadow-elegant overflow-hidden"
          >
            <div className="gradient-primary p-4">
              <p className="font-display font-semibold text-white">Hey there 👋</p>
              <p className="text-xs text-white/80 mt-1">We typically reply in a few minutes</p>
            </div>
            <div className="p-4 space-y-3">
              <div className="rounded-xl bg-white/5 p-3 text-sm text-muted-foreground">
                Tell us about your project — we'd love to help bring it to life.
              </div>
              <div className="flex gap-2">
                <input
                  placeholder="Type a message..."
                  className="flex-1 rounded-lg bg-white/5 border border-glass-border px-3 py-2 text-sm outline-none focus:border-secondary"
                />
                <button className="h-10 w-10 inline-flex items-center justify-center rounded-lg gradient-primary text-white">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="relative h-14 w-14 rounded-full gradient-primary text-white shadow-elegant flex items-center justify-center"
        aria-label="Chat"
      >
        <span className="absolute inset-0 rounded-full gradient-primary blur-xl opacity-60 animate-glow-pulse" />
        <span className="relative">
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </span>
      </motion.button>
    </div>
  );
}
