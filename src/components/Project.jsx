import { motion } from 'framer-motion';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ideaObj } from '../assets';
import { ProjectData } from '../constants';
import { SectionWrapper } from '../hoc';

function Project() {
  return (
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
      <Swiper
        className='project-details swiper_container relative gap-10 xl:py-10'
        effect={'coverflow'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        speed={1000}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
      >
        {ProjectData.map((project) => (
          <SwiperSlide
            className={`project frame-BG w-full max-w-[480px] rounded-xl border-2 p-4 text-center dark:bg-black/70 ${project.borderColor}`}
            key={project.name}
          >
            <img
              src={project.image}
              alt={project.name}
              loading='lazy'
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
                className='fill-button mt-3 w-full text-lg shadow-none xl:text-xl'
                href={project.code}
                target='_blank'
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
              >
                Code
              </motion.a>
              <motion.a
                className='fill-button mt-3 w-full text-lg shadow-none xl:text-xl'
                href={project.demo}
                target='_blank'
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
              >
                Demo
              </motion.a>
            </div>
          </SwiperSlide>
        ))}
        <div className='slider-controller mt-6 flex items-center justify-center'>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
      <motion.div className='absolute left-10 -top-10 -z-10 aspect-square w-44 rounded-full bg-slate-500 blur-[160px]'></motion.div>
      <hr className='divider ml-auto mb-0 bg-gradient-to-l from-golden to-transparent' />
      <hr className='divider mt-2 ml-auto bg-gradient-to-l from-orangered to-transparent' />
    </div>
  );
}

export default SectionWrapper(Project, 'project');
