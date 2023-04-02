import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../animation';
import { knowledgeObj } from '../assets';
import { ExperienceData, ProfileData } from '../constants';
import { SectionWrapper } from '../hoc';

// Coding Profile Section
function Profile() {
  return (
    <div className='profile'>
      <p className='heading my-8 text-center text-2xl uppercase text-amber-600 dark:text-golden sm:text-4xl'>
        Coding Profiles
      </p>
      <div className='profile-data flex flex-wrap justify-center gap-6 xl:pt-8'>
        {ProfileData.map((data, index) => (
          <motion.div
            className={`skill frame-BG flex w-full max-w-[280px] flex-col rounded-xl border-2 p-6 text-center ${data.borderColor}`}
            key={data.name}
            variants={fadeIn('right', 'spring', 25, 0.5 * index, 0.75)}
          >
            <div className='mx-auto'>
              <img src={data.icon} alt={data.name} className='w-20 xl:w-32' />
            </div>
            <div className='details my-3 pr-0'>
              <p className='mb-2 text-2xl font-semibold'>{data.name}</p>
              <hr className='mb-3 h-px w-full border-0 bg-orange-500' />
              {data.points.map((point, index) => (
                <li
                  className='w-full list-none text-left text-sm sm:text-base 2xl:text-base'
                  key={index}
                >
                  <i className='bx bx-plus bx-sm mr-1 align-middle text-orangered'></i>
                  {point}
                </li>
              ))}
            </div>
            <motion.a
              className='fill-button mt-2 text-xl shadow-none'
              href={data.link}
              target='_blank'
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              LINK
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Experience Section
function Experience() {
  return (
    <div className='experience'>
      <p className='heading my-8 text-center text-2xl uppercase text-amber-600 dark:text-golden sm:text-4xl'>
        Industry Experience
      </p>
      <div className='flex flex-wrap justify-center gap-6 pb-8 xl:pt-8'>
        {ExperienceData.map((data, index) => (
          <motion.div
            className={`skill frame-BG flex flex-col rounded-xl border-2 p-6 text-center ${
              index == 0 ? 'border-red-500 dark:border-red-500' : null
            }`}
            variants={slideIn('right', 'spring', 25, 0.5 * index, 0.75)}
            key={data.designation}
          >
            <div className='mx-auto'>
              <img src={data.icon} alt={data.designation} className='w-32' />
            </div>
            <div className='details my-3 pr-0'>
              <p className='mb-2 text-2xl font-semibold'>{data.designation}</p>
              <p className='mb-2 text-xl font-semibold'>{data.tenure}</p>

              <hr className='mb-3 h-px w-full border-0 bg-orange-500' />
              <div className='points-wrapper flex flex-col items-center justify-center'>
                {data.points.map((point, index) => (
                  <li
                    className='my-1 flex w-full list-none text-left text-sm sm:text-base 2xl:text-base'
                    key={index}
                  >
                    <i className='bx bx-chevron-right bx-sm -mt-px -ml-2  align-middle text-orangered'></i>
                    <p>{point}</p>
                  </li>
                ))}
              </div>
            </div>
            <div className='company-wrapper flex justify-between gap-4'>
              {data.company.map((company) => (
                <a
                  className={`mt-2 w-full cursor-pointer rounded-3xl border-2 px-3 py-2 text-lg duration-200 hover:scale-105 ${company.css}`}
                  href={company.link}
                  target='_blank'
                  key={company.name}
                >
                  {company.name}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Exposure Section
function Exposure() {
  return (
    <div className='exposure'>
      <div className='content-wrapper mb-16'>
        <p className='heading'>
          <span className='text-orangered'>Exposure </span> in domain
        </p>
        <p className='sub-heading'>
          Without exposure, there can be no discovery.
        </p>
        <motion.div className='absolute right-4 top-10 hidden w-72 select-none opacity-80 drop-shadow-lg xl:block'>
          <img src={knowledgeObj} alt='Obj' />
        </motion.div>

        <Profile />
        <hr className='divider mx-auto mb-0 bg-gradient-to-l from-transparent via-golden to-transparent' />
        <hr className='divider mx-auto mt-2 bg-gradient-to-l from-transparent via-orangered to-transparent' />
        <Experience />
        {/* <motion.div className='absolute right-10 top-0 -z-10 aspect-square w-44 rounded-full bg-cyan-300 blur-[170px]'></motion.div> */}
      </div>
      <hr className='divider mb-0 bg-gradient-to-r from-golden to-transparent' />
      <hr className='divider mt-2 bg-gradient-to-r from-orangered to-transparent' />
    </div>
  );
}

export default SectionWrapper(Exposure, 'exposure');
