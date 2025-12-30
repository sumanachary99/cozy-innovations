import { motion } from 'framer-motion'

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
  amount = 0.2
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 }
  }

  const initial = {
    opacity: 0,
    ...directions[direction]
  }

  const animate = {
    opacity: 1,
    y: 0,
    x: 0
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for children animations
export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
  amount = 0.2
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger item to be used inside StaggerContainer
export const StaggerItem = ({
  children,
  className = '',
  direction = 'up'
}) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
    scale: { y: 0, x: 0, scale: 0.9 }
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          ...directions[direction]
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Fade in animation
export const FadeIn = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

// Scale in animation
export const ScaleIn = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  once = true
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Hover scale effect for cards
export const HoverCard = ({
  children,
  className = '',
  scale = 1.02
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale, y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
