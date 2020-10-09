let easing = [0.175, 0.85, 0.42, 0.96]

export const parentVariants = {
  enter: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const topBottomVariants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: easing },
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
}

export const bottomTopVariants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: easing, delay: 0.3 },
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
}

export const listVariants = {
  enter: {
    opacity: 1,
    transition: { duration: 1.5, ease: easing, delay: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
}
