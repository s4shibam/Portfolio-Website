import { motion } from 'framer-motion';
import { slideIn } from '../animation';
import { notesObj } from '../assets';
import { EducationData } from '../constants';
import { SectionWrapper } from '../hoc';

function Education() {
  return (
    <div className='education'>
      <div className='content-wrapper mb-16'>
        <p className='heading text-right'>
          <span className='text-orangered'>My </span>Education
        </p>
        <p className='sub-heading text-right'>
          An investment in knowledge pays the best interest.
        </p>
        <motion.div className='absolute left-4 top-16 hidden w-60 select-none opacity-70 drop-shadow-lg xl:block'>
          <img src={notesObj} alt='Obj' />
        </motion.div>
        <div className='education-details relative flex flex-col items-center justify-center gap-8 xl:flex-row xl:justify-evenly xl:py-8'>
          {EducationData.map((data, index) => (
            <motion.div
              className='phase frame-BG flex flex-col items-center justify-center'
              variants={slideIn('right', 'spring', 25, 0.5 * index, 0.75)}
              key={data.degree}
            >
              <img
                src={data.image}
                alt={data.institute}
                className='w-full rounded-xl object-cover'
              />

              <p className='mt-2 text-center text-lg font-semibold uppercase tracking-wide xl:text-xl'>
                {data.institute}
              </p>
              <p className='my-2 text-center font-medium tracking-wide lg:text-base 2xl:text-lg'>
                <span className='block'>
                  <span className='text-orangered dark:text-golden'>
                    Degree:{' '}
                  </span>
                  {data.degree}
                </span>
                <span className='block'>
                  <span className='text-orangered dark:text-golden'>
                    Grade:{' '}
                  </span>
                  {data.grade}
                </span>
                <span className='block'>
                  <span className='text-orangered dark:text-golden'>
                    Year:{' '}
                  </span>
                  {data.year}
                </span>
              </p>
              <hr className='mb-3 h-px w-full border-0 bg-orange-500' />
              <div className='description-wrapper mx-auto'>
                {data.description.map((point, index) => (
                  <li
                    className='flex w-full list-outside list-none py-1 text-left text-sm sm:text-base 2xl:text-base'
                    key={index}
                  >
                    <i className='bx bx-last-page bx-sm align-middle text-orangered'></i>
                    <p>{point}</p>
                  </li>
                ))}
              </div>
            </motion.div>
          ))}
          <motion.div className='absolute left-10 -top-10 -z-10 aspect-square w-32 rounded-full bg-red-500 blur-[160px]'></motion.div>
        </div>{' '}
      </div>
      <hr className='divider ml-auto mb-0 bg-gradient-to-l from-golden to-transparent' />
      <hr className='divider mt-2 ml-auto bg-gradient-to-l from-orangered to-transparent' />
    </div>
  );
}

export default SectionWrapper(Education, 'education');
