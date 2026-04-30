"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-200 flex items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image src="/assets/dankha-illustration.png" alt="Logo" width={80} height={80} className="relative rounded-2xl shadow-elegant" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-display text-sm tracking-[0.4em] text-muted-foreground"
        >
          DANKHA
        </motion.div>
        <div className="h-0.5 w-32 overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full w-full gradient-primary"
          />
        </div>
      </div>
    </motion.div>
  );
}
