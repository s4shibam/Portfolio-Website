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
      >
        <span className='buffer -mt-16 block pb-16 xl:-mt-24 xl:pb-24' id={id}>
          &ensp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
