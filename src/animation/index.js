// Animations
export const fadeIn = (from, type, range, delay, duration) => {
  return {
    hidden: {
      x: from === 'left' ? -range : from === 'right' ? range : 0,
      y: from === 'up' ? -range : from === 'down' ? range : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeInOut'
      }
    }
  };
};

export const slideIn = (from, type, range, delay, duration) => {
  return {
    hidden: {
      x: from === 'left' ? `-${range}%` : from === 'right' ? `${range}%` : 0,
      y: from === 'up' ? `-${range}%` : from === 'down' ? `${range}%` : 0
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeInOut'
      }
    }
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren || 0
      }
    }
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeInOut'
      }
    }
  };
};
