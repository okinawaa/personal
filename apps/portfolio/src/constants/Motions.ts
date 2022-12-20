import type { Variants } from "framer-motion";

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const defaultFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity"
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity"
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity"
  }
};

export const framerMocker = {
  initial: "initial",
  animate: "animate",
  exit: "exit"
} as const;
