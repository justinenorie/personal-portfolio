import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AnimatedDiv = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0, x: -100 }, // Start hidden and slide in from the left
        visible: { opacity: 1, x: 0 }, // Fade in and slide to position
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: false, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

AnimatedDiv.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default AnimatedDiv;
