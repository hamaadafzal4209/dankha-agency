"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import {
  BriefcaseIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { AvatarCircles } from "../ui/avatar-circles";

const stats = [
  {
    value: "120+",
    label: "Projects shipped",
    icon: BriefcaseIcon,
    description: "Across 12 industries",
  },
  {
    value: "48",
    label: "Happy clients",
    icon: UserGroupIcon,
    description: "92% retention rate",
  },
  {
    value: "9.4x",
    label: "Average ROI",
    icon: ArrowTrendingUpIcon,
    description: "Within first year",
  },
  {
    value: "12",
    label: "Industry awards",
    icon: SparklesIcon,
    description: "For design excellence",
  },
];

interface CounterValueProps {
  value: string;
  isAnimating: boolean;
  duration?: number;
}

function CounterValue({
  value,
  isAnimating,
  duration = 1600,
}: CounterValueProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const frameRef = useRef<number | null>(null);

  const parsed = useMemo(() => {
    const match = value.match(/[\d.]+/);
    if (!match) return null;

    const numericText = match[0];
    const numericValue = Number.parseFloat(numericText);
    const decimals = numericText.includes(".")
      ? numericText.split(".")[1].length
      : 0;
    const prefix = value.slice(0, match.index ?? 0);
    const suffix = value.slice((match.index ?? 0) + numericText.length);

    return { numericValue, decimals, prefix, suffix };
  }, [value]);

  useEffect(() => {
    if (!isAnimating || !parsed) {
      setDisplayValue(value);
      return;
    }

    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easing function (cubic-bezier inspired)
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const current = parsed.numericValue * eased;

      const formatted =
        parsed.decimals > 0
          ? current.toFixed(parsed.decimals)
          : Math.round(current).toString();

      setDisplayValue(`${parsed.prefix}${formatted}${parsed.suffix}`);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isAnimating, parsed, value, duration]);

  return <span className="tabular-nums">{displayValue}</span>;
}

export function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-80px",
    amount: 0.3,
  });

  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative glass-strong rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#39587b]/5 via-transparent to-[#3fa1ad]/5" />

            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  <div className="flex justify-center lg:justify-start mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-linear-to-br from-[#39587b] to-[#3fa1ad] rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="relative h-12 w-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-300">
                        <stat.icon className="w-5 h-5 text-secondary/80 group-hover:text-secondary transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center lg:text-left">
                    <div className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-2">
                      <span className="gradient-text-bright">
                        <CounterValue
                          value={stat.value}
                          isAnimating={isInView}
                        />
                      </span>
                    </div>

                    <div className="text-sm font-medium text-white/80 mb-1">
                      {stat.label}
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-1 text-xs text-muted-foreground group-hover:text-secondary/80 transition-colors">
                      <span>{stat.description}</span>
                    </div>
                  </div>

                  {index < 3 && (
                    <div className="absolute -right-3 lg:-right-4 top-1/2 -translate-y-1/2 h-12 w-px bg-linear-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="relative mt-8 pt-6 border-t border-white/5 flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground">
                <div className="flex -space-x-1">
                  <AvatarCircles
                    numPeople={99}
                    className="[&_img]:h-8 [&_img]:w-8 [&_img]:border-white/80 [&>a:last-child]:h-8 [&>a:last-child]:w-8 [&>a:last-child]:text-[10px]"
                    avatarUrls={[
                      {
                        imageUrl:
                          "https://avatars.githubusercontent.com/u/16860528",
                      },
                      {
                        imageUrl:
                          "https://avatars.githubusercontent.com/u/13484763",
                      },
                      {
                        imageUrl:
                          "https://avatars.githubusercontent.com/u/14985020",
                      },
                      {
                        imageUrl:
                          "https://avatars.githubusercontent.com/u/44204",
                      },
                    ]}
                  />
                </div>
                <span>Trusted by industry leaders</span>
              </div>
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
