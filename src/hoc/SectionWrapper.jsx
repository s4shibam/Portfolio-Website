import { motion } from 'framer-motion';
import { staggerContainer } from '../animation';

const SectionWrapper = (Component, id) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='relative z-0 mx-auto w-[80%]'
        id={id}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
