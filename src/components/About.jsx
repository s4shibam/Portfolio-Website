import 'boxicons';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../animation';
import { aboutImg, colorsObj } from '../assets';
import { AboutData } from '../constants';
import { SectionWrapper } from '../hoc';

function About() {
  return (
    <>
      <div className='content-wrapper mb-16'>
        <p className='heading'>
          About <span className='text-orangered'>Me</span>
        </p>
        <p className='sub-heading'>
          I'm built from every mistake I have ever made.
        </p>
        <motion.div className='obj'>
          <img src={colorsObj} alt='Obj' />
        </motion.div>

        <div className='about flex flex-col items-center justify-end gap-6 py-6 xl:flex-row xl:gap-12'>
          <motion.div
            className='relative w-[90%] sm:w-[60%] lg:min-w-[350px]'
            variants={fadeIn('left', 'spring', 50, 0.2, 1)}
          >
            <img
              loading='lazy'
              src={aboutImg}
              alt='Shibam'
              className='mx-auto drop-shadow-lg'
            />
            <div className='absolute left-0 bottom-24 -z-10 aspect-square w-44 rounded-full bg-cyan-600 blur-[160px] md:w-48'></div>
          </motion.div>

          <motion.div
            className='about-wrapper'
            variants={fadeIn('right', 'spring', 25, 0.2, 1)}
          >
            {AboutData.map((about, index) => (
              <li
                className='my-4 list-none text-justify lg:text-lg 2xl:text-xl'
                key={index}
              >
                <i className='bx bxs-balloon bx-sm mr-2 align-middle text-orangered dark:text-golden'></i>
                {about}
              </li>
            ))}

            <div className='button-wrapper mt-10'>
              <motion.a
                href='#contact'
                className='fill-button mx-auto w-fit rounded-full px-8 text-xl font-medium  normal-case text-darkText before:rounded-full xl:mx-0'
                variants={slideIn('right', 'spring', 100, 0.2, 0.75)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <hr className='divider mb-0 bg-gradient-to-r from-golden to-transparent' />
      <hr className='divider mt-2 bg-gradient-to-r from-orangered to-transparent' />
    </>
  );
}

export default SectionWrapper(About, 'about');
