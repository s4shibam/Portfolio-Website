import { SocialLinksData } from '../constants';

function Footer() {
  return (
    <footer className='bottom-0 flex w-full flex-col justify-center bg-golden p-4 py-6'>
      <div className='copyright mr-auto flex w-full flex-col gap-1'>
        <p className='text-center text-sm text-darkText'>
          Copyright © 2023 |{' '}
          <button
            onClick={() => window.scrollTo(0, 0)}
            className='cursor-pointer text-darkText hover:underline'
          >
            Shibam Saha
          </button>
        </p>
        <p className='text-center text-sm text-darkText'>All Rights Reserved</p>
      </div>
      <div className='social-media mt-4 flex w-full justify-center space-x-6 [&*>]:hover:scale-105'>
        {SocialLinksData.map((link) => (
          <a
            href={link.href}
            key={link.href}
            target='_blank'
            className='frame h-5 text-black [&>*]:text-xl'
          >
            <i className={`${link.icon}`} />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
