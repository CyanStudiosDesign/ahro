"use client";

import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";

interface AnimatedContentProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
}

export default function AnimatedContent({
  children,
  className,
  delay = 0,
  distance = 56,
  duration = 0.75,
}: AnimatedContentProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: distance, scale: 0.985 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
