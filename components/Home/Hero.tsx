import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Sparkles } from "./data";
import { OrbitingCircles } from "../ui/orbiting-circles";
import {
  ComputerDesktopIcon,
  ShoppingBagIcon,
  MegaphoneIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <section className="relative pt-8 md:pt-0 pb-20 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-secondary"
          >
            <Sparkles size={12} />
            Premium digital agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            We build{" "}
            <span className="gradient-text-bright">digital experiences</span>{" "}
            that scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Engineering, ecommerce and marketing — under one roof. We design,
            build and grow products with the rigor of a studio and the speed of
            a startup.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white gradient-primary overflow-hidden shadow-elegant"
            >
              <span className="relative z-10">Get started</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition gradient-glow blur-xl" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold glass hover:bg-white/10 transition"
            >
              View our work
            </Link>
          </motion.div>
        </div>

        <div className="relative flex md:hidden -mx-6 w-[calc(100%+3rem)] aspect-square flex-col items-center justify-center">
          <OrbitCenterLogo />
          <OrbitingCircles iconSize={42} radius={128} speed={0.8}>
            <OrbitIcon Icon={ComputerDesktopIcon} color="cyan" />
            <OrbitIcon Icon={ShoppingBagIcon} color="sky" />
            <OrbitIcon Icon={MegaphoneIcon} color="violet" />
            <OrbitIcon Icon={PaintBrushIcon} color="teal" />
            <OrbitIcon Icon={GlobeAltIcon} color="blue" />
          </OrbitingCircles>
          <OrbitingCircles iconSize={34} radius={72} reverse speed={1.2}>
            <OrbitIcon Icon={CodeBracketIcon} color="emerald" />
            <OrbitIcon Icon={ChartBarIcon} color="orange" />
            <OrbitIcon Icon={DevicePhoneMobileIcon} color="indigo" />
            <OrbitIcon Icon={CameraIcon} color="pink" />
          </OrbitingCircles>
        </div>

        <div className="relative hidden md:flex w-full aspect-square flex-col items-center justify-center">
          <OrbitCenterLogo />
          <OrbitingCircles iconSize={54} radius={190} speed={0.8}>
            <OrbitIcon Icon={ComputerDesktopIcon} color="cyan" />
            <OrbitIcon Icon={ShoppingBagIcon} color="sky" />
            <OrbitIcon Icon={MegaphoneIcon} color="violet" />
            <OrbitIcon Icon={PaintBrushIcon} color="teal" />
            <OrbitIcon Icon={GlobeAltIcon} color="blue" />
          </OrbitingCircles>
          <OrbitingCircles iconSize={44} radius={106} reverse speed={1.2}>
            <OrbitIcon Icon={CodeBracketIcon} color="emerald" />
            <OrbitIcon Icon={ChartBarIcon} color="orange" />
            <OrbitIcon Icon={DevicePhoneMobileIcon} color="indigo" />
            <OrbitIcon Icon={CameraIcon} color="pink" />
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}

function OrbitCenterLogo() {
  return (
    <div className="relative z-10">
      <div className="absolute inset-0 rounded-2xl blur-md gradient-primary opacity-60" />
      <div className="relative h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center">
        <Sparkles className="text-white" size={26} />
      </div>
    </div>
  );
}

type ColorKey =
  | "cyan"
  | "sky"
  | "violet"
  | "teal"
  | "blue"
  | "emerald"
  | "orange"
  | "indigo"
  | "pink";

const colorMap: Record<
  ColorKey,
  { border: string; tint: string; text: string }
> = {
  cyan: {
    border: "border-cyan-400/40",
    tint: "bg-cyan-400/15",
    text: "text-cyan-300",
  },
  sky: {
    border: "border-sky-400/40",
    tint: "bg-sky-400/15",
    text: "text-sky-300",
  },
  violet: {
    border: "border-violet-400/40",
    tint: "bg-violet-400/15",
    text: "text-violet-300",
  },
  teal: {
    border: "border-teal-400/40",
    tint: "bg-teal-400/15",
    text: "text-teal-300",
  },
  blue: {
    border: "border-blue-400/40",
    tint: "bg-blue-400/15",
    text: "text-blue-300",
  },
  emerald: {
    border: "border-emerald-400/40",
    tint: "bg-emerald-400/15",
    text: "text-emerald-300",
  },
  orange: {
    border: "border-orange-400/40",
    tint: "bg-orange-400/15",
    text: "text-orange-300",
  },
  indigo: {
    border: "border-indigo-400/40",
    tint: "bg-indigo-400/15",
    text: "text-indigo-300",
  },
  pink: {
    border: "border-pink-400/40",
    tint: "bg-pink-400/15",
    text: "text-pink-300",
  },
};

function OrbitIcon({
  Icon,
  color,
}: {
  Icon: React.ElementType;
  color: ColorKey;
}) {
  const c = colorMap[color];
  return (
    // bg-card is the solid dark-navy card token — fully opaque so the orbit
    // ring SVG never bleeds through. The tint div adds the accent colour on top.
    <div
      className={`relative flex h-full w-full items-center justify-center rounded-full border-2 bg-card shadow-lg ${c.border}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-full ${c.tint}`}
      />
      <Icon
        className={`relative h-[46%] w-[46%] ${c.text}`}
        strokeWidth={1.5}
      />
    </div>
  );
}
