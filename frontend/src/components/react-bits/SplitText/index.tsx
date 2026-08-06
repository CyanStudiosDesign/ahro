"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  useRef,
} from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type HeadingTag = "h1" | "h2" | "h3" | "h4";
type SplitMode = "words" | "chars";

interface SplitTextProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag;
  children: ReactNode;
  delay?: number;
  duration?: number;
  splitBy?: SplitMode;
}

function textContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (!isValidElement(node)) {
    return "";
  }

  const props = node.props as { children?: ReactNode };
  return Children.toArray(props.children).map(textContent).join(" ");
}

function splitNode(
  node: ReactNode,
  mode: SplitMode,
  counter: { value: number },
  delay: number,
  duration: number,
  reduceMotion: boolean,
  isInView: boolean,
  path: string,
): ReactNode {
  if (typeof node === "string" || typeof node === "number") {
    const value = String(node);
    const pieces = mode === "chars" ? value.split("") : value.split(/(\s+)/);

    return pieces.map((piece, index) => {
      if (/^\s+$/.test(piece)) {
        return piece;
      }

      const itemIndex = counter.value++;

      return (
        <span
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
          key={`${path}-${index}`}
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: "0.9em", rotateX: -55 }
            }
            animate={
              reduceMotion || isInView
                ? { opacity: 1, y: 0, rotateX: 0 }
                : { opacity: 0, y: "0.9em", rotateX: -55 }
            }
            transition={{
              delay: delay + Math.min(itemIndex * 0.035, 0.55),
              duration,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {piece}
          </motion.span>
        </span>
      );
    });
  }

  if (!isValidElement(node)) {
    return node;
  }

  const element = node as ReactElement<{ children?: ReactNode }>;

  if (element.props.children === undefined) {
    return element;
  }

  return cloneElement(element, {
    children: Children.toArray(element.props.children).map((child, index) =>
      splitNode(
        child,
        mode,
        counter,
        delay,
        duration,
        reduceMotion,
        isInView,
        `${path}-${index}`,
      ),
    ),
  });
}

export default function SplitText({
  as = "h2",
  children,
  delay = 0,
  duration = 0.65,
  splitBy = "words",
  ...props
}: SplitTextProps) {
  const reduceMotion = Boolean(useReducedMotion());
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.4 });
  const counter = { value: 0 };
  const Heading = as;
  const accessibleText = textContent(children).replace(/\s+/g, " ").trim();

  return (
    <Heading
      ref={headingRef}
      aria-label={accessibleText || undefined}
      {...props}
    >
      {Children.toArray(children).map((child, index) =>
        splitNode(
          child,
          splitBy,
          counter,
          delay,
          duration,
          reduceMotion,
          isInView,
          `split-${index}`,
        ),
      )}
    </Heading>
  );
}
