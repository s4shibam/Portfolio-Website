import { motion } from 'framer-motion';
import { slideIn } from '../animation';
import { ideaObj } from '../assets';
import { ProjectData } from '../constants';
import { SectionWrapper } from '../hoc';

function Project() {
  return (
    <>
      <div className='project'>
        <div className='content-wrapper'>
          <p className='heading text-right'>
            Project <span className='text-orangered'>Works! </span>
          </p>
          <p className='sub-heading text-right'>
            Stay humble. Let your work speak for you.{' '}
          </p>
          <motion.div className='absolute left-4 top-14 hidden w-64 select-none opacity-80 drop-shadow-lg xl:block'>
            <img src={ideaObj} alt='Obj' />
          </motion.div>
        </div>
        <div className='project-details relative flex flex-wrap justify-center gap-10 xl:py-10'>
          {ProjectData.map((project, index) => (
            <motion.div
              className={`project frame-BG flex w-full max-w-[480px] flex-col rounded-xl border-2 p-4 text-center ${project.borderColor}`}
              variants={slideIn('down', 'spring', 10, 0.5 * index, 0.75)}
              key={project.name}
            >
              <img
                src={project.image}
                alt={project.name}
                className={`w-full rounded-lg border-2 drop-shadow-xl ${project.borderColor}`}
              />
              <p className='mt-4 text-center text-xl font-semibold uppercase tracking-wide text-orangered xl:text-3xl'>
                {project.name}
              </p>
              <p className='text-center font-medium tracking-wide lg:text-base 2xl:text-lg'>
                {project.description}
              </p>
              <hr className='my-3 h-px w-full border-0 bg-orange-500' />
              <div className='features-wrapper mx-auto'>
                {project.features.map((point, index) => (
                  <li
                    className='flex w-full list-outside list-none py-1 text-left text-sm sm:text-base 2xl:text-base'
                    key={index}
                  >
                    <i className='bx bx-bookmark-alt bx-sm mr-2 align-middle text-orangered'></i>
                    <p>{point}</p>
                  </li>
                ))}
              </div>
              <div className='button-wrapper flex justify-center gap-4'>
                <motion.a
                  className='fill-button mt-3 w-full text-xl shadow-none'
                  href={project.code}
                  target='_blank'
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Code
                </motion.a>
                <motion.a
                  className='fill-button mt-3 w-full text-xl shadow-none'
                  href={project.demo}
                  target='_blank'
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
          <motion.div className='absolute left-10 -top-10 -z-10 aspect-square w-44 rounded-full bg-slate-500 blur-[160px]'></motion.div>
        </div>
        <hr className='divider ml-auto mb-0 bg-gradient-to-l from-golden to-transparent' />
        <hr className='divider mt-2 ml-auto bg-gradient-to-l from-orangered to-transparent' />
      </div>
    </>
  );
}

export default SectionWrapper(Project, 'project');
