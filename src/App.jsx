import { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Education,
  Exposure,
  Footer,
  Home,
  NavigationBar,
  Project,
  SkillSet
} from './components';

function ScrollToTop() {
  const scrollToTopRef = useRef(null);
  window.onscroll = function () {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    )
      scrollToTopRef.current.style.display = 'block';
    else scrollToTopRef.current.style.display = 'none';
  };

  return (
    <button
      className={`scroll-to-top fixed bottom-10 right-10 h-14 w-14 rounded-full bg-golden duration-150 hover:scale-110 ${
        document.body.scrollTop > 250 ? 'block' : 'hidden'
      }`}
      onClick={() => window.scrollTo(0, 0)}
      ref={scrollToTopRef}
    >
      <i className='bx bx-up-arrow-alt mt-1 text-5xl text-darkText'></i>
    </button>
  );
}

function App() {
  // Website Cached Theme
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <div className='App relative z-0'>
      <BrowserRouter>
        <NavigationBar />
        <Home />
        <About />
        <Education />
        <SkillSet />
        <Project />
        <Exposure />
        <Contact />
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
