"use client";

import type { PointerEvent, PropsWithChildren } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface TiltedCardProps extends PropsWithChildren {
  className?: string;
  wrapperClassName?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

export function TiltedCard({
  children,
  className,
  wrapperClassName,
  rotateAmplitude = 10,
  scaleOnHover = 1.035,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!cardRef.current || prefersReducedMotion || event.pointerType === "touch") {
      return;
    }

    const bounds = cardRef.current.getBoundingClientRect();
    const horizontalProgress =
      (event.clientX - bounds.left) / bounds.width - 0.5;
    const verticalProgress =
      (event.clientY - bounds.top) / bounds.height - 0.5;

    rotateX.set(verticalProgress * -2 * rotateAmplitude);
    rotateY.set(horizontalProgress * 2 * rotateAmplitude);
  }

  function handlePointerEnter(event: PointerEvent<HTMLDivElement>) {
    if (!prefersReducedMotion && event.pointerType !== "touch") {
      scale.set(scaleOnHover);
    }
  }

  function resetCard() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div className={`[perspective:900px] ${wrapperClassName || ""}`}>
      <motion.div
        ref={cardRef}
        className={className}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={resetCard}
        onPointerCancel={resetCard}
      >
        {children}
      </motion.div>
    </div>
  );
}
