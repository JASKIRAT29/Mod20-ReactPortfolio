import { motion } from 'motion.js';

function MyComponent() {
  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ duration: 1 }}
    >
      This element will move 100 pixels to the right over 1 second.
    </motion.div>
  );
}
