import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { messageObj } from '../assets';
import { SectionWrapper } from '../hoc';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          subject: subject,
          userName: name,
          message: message,
          userEmail: email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      alert('Thanks, ' + name + '! I will get back to you soon!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      setLoading(false);
      alert('Something went wrong!');
    }
  }

  return (
    <div className='contact'>
      <p className='heading'>
        Reach <span className='text-orangered'>Me </span> Out!
      </p>
      <p className='sub-heading'>Connection starts with communication. </p>
      <motion.div className='absolute right-4 top-10 hidden w-64 select-none opacity-70 drop-shadow-lg xl:block'>
        <img src={messageObj} alt='Obj' />
      </motion.div>

      <form
        className='frame-BG form mx-auto mb-16 flex max-w-4xl flex-col gap-4'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='flex flex-col gap-4 xl:flex-row'>
          <input
            className='input-box'
            type='text'
            required
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='input-box'
            type='email'
            required
            placeholder='Enter Email ID'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          className='input-box'
          type='text'
          required
          placeholder='Enter Subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className='w-full resize-none rounded-md border border-dullWhite bg-white p-4 font-medium tracking-wide outline-none dark:border-gray-600 dark:bg-darkText/60 lg:text-xl'
          rows='6'
          placeholder='Write The Message ...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <motion.button
          className='fill-button mt-1 shadow-none'
          type='submit'
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? 'Sending...' : 'Send'}
        </motion.button>
      </form>
    </div>
  );
}

export default SectionWrapper(Contact, 'contact');
