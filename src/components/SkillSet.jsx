import { motion } from 'framer-motion';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { searchObj } from '../assets';
import { SkillSetData } from '../constants';
import { SectionWrapper } from '../hoc';

function SkillSet() {
  const page = window.innerWidth >= 1920 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  return (
    <>
      <div className='content-wrapper mb-16'>
        <p className='heading'>
          Skills <span className='text-orangered'>I have.</span>
        </p>
        <p className='sub-heading'>
          Every skill you acquire doubles your odds of success.{' '}
        </p>
        <motion.div className='obj'>
          <img src={searchObj} alt='Obj' />
        </motion.div>
        <div className='skills-wrapper relative xl:py-10'>
          {SkillSetData.map((type) => (
            <Swiper
              className='mb-2 w-full py-4'
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              speed={500}
              grabCursor={true}
              loop={true}
              slidesPerView={page}
              spaceBetween={25}
              modules={[Autoplay]}
              key={type.type}
            >
              {type.skills.map((skill) => (
                <SwiperSlide key={skill.name}>
                  <motion.div
                    className={`skill frame-BG flex w-fit max-w-lg rounded-xl border-2 p-2.5 ${skill.borderColor}`}
                    whileHover={{ transform: 'translateY(-1rem)' }}
                  >
                    <div className='mr-3 flex w-32 items-center justify-center rounded-full'>
                      <img src={skill.icon} alt={skill.name} loading='lazy' />
                    </div>
                    <div className='details py-3 pr-0'>
                      <p className='text-2xl font-semibold'>{skill.name}</p>
                      <p>
                        <span className='text-orangered dark:text-golden'>
                          Exposure:{' '}
                        </span>
                        {skill.exposure}
                      </p>
                      <p className='mt-1 text-sm xl:text-base'>
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ))}
          <motion.div className='absolute right-10 -top-10 -z-10 aspect-square w-32 rounded-full bg-golden blur-[170px]'></motion.div>
        </div>
      </div>
      <hr className='divider mb-0 bg-gradient-to-r from-golden to-transparent' />
      <hr className='divider mt-2 bg-gradient-to-r from-orangered to-transparent' />
    </>
  );
}

export default SectionWrapper(SkillSet, 'skill-set');
