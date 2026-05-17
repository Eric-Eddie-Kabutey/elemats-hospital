export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: custom }
  })
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: custom }
  })
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: custom }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: custom }
  })
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: custom }
  })
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: custom }
  })
};

export const pageTransition = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

export const viewportConfig = {
  once: true,
  amount: 0.2
};
