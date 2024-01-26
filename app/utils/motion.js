export const motionConfig = {
  initial: { opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 1,
      ease: easeOut,
    },
  },
};