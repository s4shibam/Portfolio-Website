import 'boxicons';
import { motion } from 'framer-motion';
import { fadeIn, zoomIn } from '../animation';
import { fProfile } from '../assets';
import { SocialLinksData } from '../constants';
import { SectionWrapper } from '../hoc';
import Background from './Background';

function Home() {
  return (
    <div className='home relative mx-auto flex w-full flex-col pt-24 xl:pt-6'>
      <div className='content-wrapper my-10 flex h-[85vh] flex-col-reverse items-center justify-evenly xl:flex-row'>
        <div className='intro-wrapper relative z-10 text-center md:mt-6 xl:mt-0 xl:text-left'>
          <motion.p
            className='ml-1 text-3xl font-bold tracking-wider md:text-4xl 2xl:text-5xl'
            variants={fadeIn('up', 'tween', 100, 0.1, 0.5)}
          >
            Hi! I am
          </motion.p>
          <motion.p
            className='my-2 text-4xl font-bold tracking-wider text-orange-600 drop-shadow-lg md:text-6xl 2xl:text-7xl'
            variants={fadeIn('left', 'spring', 100, 0.2, 1)}
          >
            Shibam Saha!
          </motion.p>
          <motion.p
            className='z-10 ml-1 font-semibold tracking-wide lg:text-xl 2xl:text-2xl'
            variants={fadeIn('left', 'spring', 100, 0.3, 1)}
          >
            Crafting elegant solutions through the art of code &nbsp;
            <span className='text-orangered dark:text-golden'>&lt;/&gt;</span>
          </motion.p>
          <div className='social-links-wrapper z-10 mt-6 space-x-2 sm:space-x-4'>
            {SocialLinksData.map((link, index) => (
              <motion.a
                href={link.href}
                key={link.href}
                target='_blank'
                className='frame group inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-orangered shadow-orangered transition-all duration-500 ease-in-out hover:bg-orangered sm:h-12 sm:w-12 [&>*]:text-2xl [&>*]:text-orangered'
                variants={zoomIn(0.2 * index, 0.5)}
              >
                <i
                  className={`${link.icon} bx-sm transition-colors duration-500 ease-in-out group-hover:text-darkText dark:group-hover:text-dullWhite`}
                />
              </motion.a>
            ))}
          </div>
          <div className='button-wrapper mt-8'>
            <motion.a
              className='fill-button z-10 mx-auto w-fit rounded-full px-6 text-xl font-medium normal-case before:rounded-full xl:mx-0'
              whileTap={{ scale: 0.9 }}
              href='https://github.com/s4shibam/s4shibam/raw/main/resume/Shibam_Saha_Resume.pdf'
              download
              variants={fadeIn('left', 'spring', 100, 0.75, 1)}
            >
              <box-icon name='download' />
              <p className='ml-2 text-darkText'>Resume</p>
            </motion.a>
          </div>
        </div>

        <motion.div
          className='image-wrapper relative z-10 max-w-lg xl:w-[45%] xl:max-w-[500px]'
          variants={fadeIn('right', 'spring', 100, 0.2, 1)}
        >
          <img src={fProfile} alt='Shibam' className='w-full' />
          <motion.div className='absolute right-0 top-0 -z-10 aspect-square w-44 rounded-full bg-pink-500 blur-[170px] md:w-60'></motion.div>
        </motion.div>
        {/* <div className='blob animate-travel'></div> */}
      </div>
      <hr className='divider ml-auto mb-0 bg-gradient-to-l from-golden to-transparent' />
      <hr className='divider mt-2 ml-auto bg-gradient-to-l from-orangered to-transparent' />
      <Background />
    </div>
  );
}

export default SectionWrapper(Home, 'home');
