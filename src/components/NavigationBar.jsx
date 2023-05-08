import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationBarData } from '../constants';

// Switch Theme Button
function SwitchTheme() {
  const [theme, setTheme] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light'
  );

  function toggleTheme() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
      setTheme('light');
    else setTheme('dark');
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [theme]);

  return (
    <>
      <button
        type='button'
        className='switch-theme ml-3 hidden h-12 w-12 items-center justify-center rounded-full border-2 border-orangered transition-all duration-300 hover:bg-orangered/50 hover:shadow-lg hover:shadow-orangered/30 xl:inline-flex'
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <i
            className='bx bx-sun text-4xl dark:text-white'
            title='Light Mode'
          ></i>
        ) : (
          <i
            className='bx bx-moon text-4xl text-darkText'
            title='Dark Mode'
          ></i>
        )}
      </button>
      <div className='toggle-button group flex w-full hover:bg-black/10 hover:dark:bg-white/10 xl:hidden'>
        <p className='cursor-pointer py-4 px-6 text-2xl font-semibold uppercase tracking-wider text-darkText transition-colors duration-500 ease-in-out group-hover:text-orangered dark:text-dullWhite dark:group-hover:text-orangered'>
          Dark Mode
        </p>
        <label className='relative inline-flex cursor-pointer items-center'>
          <input
            type='checkbox'
            value=''
            checked={theme === 'dark'}
            className='peer sr-only'
            onChange={toggleTheme}
          />
          <div className="peer h-6 w-11 select-none rounded-full bg-orangered after:absolute after:left-[2px] after:mt-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700"></div>
        </label>
      </div>
    </>
  );
}

function NavigationBar() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className='navigation-bar fixed left-0 right-0 top-0 z-40 flex justify-center border-b border-b-gray-300 bg-white/70 py-2 shadow-red-300 drop-shadow-lg backdrop-blur-lg dark:border-b-gray-500 dark:bg-slate-900/80'>
        <div className='flex w-[80%] items-center justify-between'>
          {/* Hero text */}
          <Link
            to='/'
            onClick={() => {
              setActive('');
              location.reload();
            }}
          >
            <p className='cursor-pointer font-pacifico text-3xl tracking-wider text-orangered drop-shadow-md lg:text-4xl'>
              Shibam.
            </p>
          </Link>

          {/* Navigation Menu Panel */}
          <ul className='pc-page-nav hidden items-center justify-end gap-1 xl:flex'>
            {NavigationBarData.map((nav) => (
              <a
                href={`#${nav.link}`}
                className={`nav-button ${
                  active === nav.name ? 'text-orangered dark:text-golden' : ''
                }`}
                key={nav.link}
                onClick={() => setActive(nav.name)}
              >
                {nav.name}
              </a>
            ))}
            <SwitchTheme />
          </ul>

          {/* Hamburger Menu Trigger */}
          <i
            className={`bx ml-auto cursor-pointer text-4xl text-darkText dark:text-lightText xl:hidden ${
              toggle ? 'bx-x' : 'bx-menu'
            }`}
            title='Menu'
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
      </nav>

      {/* Hamburger Mav (Mobile) */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            className={`hamburger-wrapper fixed top-12 z-30 mt-1 flex h-screen w-screen justify-end text-center backdrop-blur-sm transition-all duration-500 ease-in xl:hidden`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setToggle(!toggle)}
          >
            <div className='flex h-fit w-fit flex-col bg-golden/90 py-6 text-left dark:bg-slate-900/90'>
              {NavigationBarData.map((nav) => (
                <a
                  href={`#${nav.link}`}
                  className={`nav-button cursor-pointer py-4 pl-6 pr-24 text-2xl font-semibold uppercase tracking-wider text-darkText hover:bg-black/10 dark:text-dullWhite hover:dark:bg-white/10 dark:hover:text-orangered  ${
                    active === nav.name
                      ? 'bg-black/10 text-orangered dark:bg-white/10 dark:text-orangered'
                      : null
                  }`}
                  key={nav.link}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.name);
                  }}
                >
                  {nav.name}
                </a>
              ))}
              <div className='flex w-full justify-center'>
                <SwitchTheme />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavigationBar;
