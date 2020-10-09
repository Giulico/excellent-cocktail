let easing = [0.175, 0.85, 0.42, 0.96]

export const titleVariants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, ease: easing, delay: 0.2 },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
}

export const subtitleVariants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, ease: easing },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
}

export const orderVariants = {
  enter: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 2.5, ease: easing },
  },
  exit: {
    y: -30,
    scale: 0.6,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
}

export const searchVariants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: easing },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
}

export const chipsVariants = {
  enter: { transition: { delay: 0.2, staggerChildren: 0.05 } },
}

export const opacityVariants = {
  enter: {
    opacity: 1,
    transition: { duration: 2, ease: easing },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: easing },
  },
}

export const drinksVariants = {
  enter: { transition: { staggerChildren: 0.05 } },
}

export const drinkTileVariants = {
  exit: {
    // scale: 0.8,
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
  },
  enter: {
    // scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: easing },
  },
}
