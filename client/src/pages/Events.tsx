import React from 'react';
import Logo from '../components/Logo';
import bear from '../assets/images/bear.jpg';
import deer from '../assets/images/deer.jpg';
import blob from '../assets/images/blob.svg';
import Help from '../components/Help';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { motion } from 'framer-motion';

const pText1 =
  'We at Bezubaan are working as the voice of the voiceless. We strongly believe that animals deserve to live their life free of pain and full of hope and love. Therefore, we try to give them the life we believe they deserve on a daily basis. Unfortunately, in Pakistan animals are stray with no one to take care of them or are being abandoned by their owners. Many of them become ill, injure or suffer abuses on the streets and require doctors, medicine, surgeries, and shelter to survive. Therefore, Bezubaan is the right place to report any abuse you see around your home, office or any other location.';
const pText2 =
  'Our vision is to rescue, rehabilitate and rehome animals in crisis, ensure healthy pets through education, advocacy and affordable services, and inspire a community where the animal-human bond is celebrated and nurtured. One day, we hope to see no animal left abandoned or being tortured in the streets of Pakistan and each one of them to have a place they could call home.';
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'linear' }}
      exit={{ opacity: 0 }}
      className='flex flex-col items-center text-secondary '
    >
      <div className=' bg-aboutImg bg-cover bg-center min-h-[60vh] w-full'>
        <div className='w-full min-h-[60vh] flex items-center bg-primary/20'>
          <h1 className=' text-4xl sm:text-5xl lg:text-6xl font-heading font-bold max-w-[550px] tracking-wide leading-[50px] sm:leading-[60px]  lg:leading-[70px] ml-10 md:ml-20 '>
           Events Pages
            <b className='flex items-center gap-2 pb-2 border-b-2 text-primary w-fit border-primary'>
              Bay-Zuban <Logo />{' '}
            </b>
          </h1>
        </div>
      </div>
      <div className='relative flex flex-col mx-4 mt-20 mb-10 lg:mx-0 xl:mx-4 max-w-screen-2xl'>
        <Link className='absolute left-0' to='/'>
          <span className='flex items-center gap-1 text-blue-500 hover:underline '>
            {' '}
            <KeyboardBackspaceIcon /> Back to home
          </span>
        </Link>
        <img
          className='absolute opacity-20 z-[-1] w-[80vw] lg:w-[40vw] top-[-25%] right-[-25%]'
          src={blob}
          alt='blob'
        />
        <div className='relative flex flex-col py-5 mt-20'>
          <span className='w-[40px] h-[4px] bg-primary absolute top-0 left-1'></span>
          <h1 className='text-2xl font-medium tracking-widest sm:text-3xl lg:text-4xl font-heading '>
            OUR MISSION
          </h1>
          <div className='flex flex-wrap gap-4 my-10 lg:gap-2 xl:gap-6'>
            <img
              className='w-full h-[400px] lg:h-auto lg:w-[30vw] object-cover object-center shadow-xl rounded-xl'
              src={bear}
              alt='bear'
            />
            <p className=' text-base sm:text-lg lg:text-xl h-full bg-stone-200 p-10 sm:p-14 lg:p-20 w-full lg:max-w-[700px]'>
              {pText1}
            </p>
          </div>
        </div>
      </div>
      <div className='relative flex flex-col mx-4 mt-20 mb-10 lg:mx-0 xl:mx-4 max-w-screen-2xl'>
        <img
          className='absolute opacity-20 z-[-1] w-[80vw] lg:w-[40vw] top-[-25%] left-[-25%]'
          src={blob}
          alt='blob'
        />
        <div className='relative flex flex-col py-5'>
          <span className='w-[40px] h-[4px] bg-primary absolute top-0 left-1'></span>
          <h1 className='text-2xl font-medium tracking-widest sm:text-3xl lg:text-4xl font-heading '>
            OUR VISION
          </h1>
          <div className='flex flex-wrap gap-4 my-10 lg:flex-row-reverse lg:gap-2 xl:gap-6'>
            <img
              className='w-full h-[400px] lg:h-auto lg:w-[30vw] object-cover object-center shadow-xl rounded-xl'
              src={deer}
              alt='deer'
            />
            <p className=' text-base sm:text-lg lg:text-xl h-auto bg-stone-200 p-10 sm:p-14 lg:p-20 w-full lg:max-w-[700px]'>
              {pText2}
            </p>
          </div>
        </div>
      </div>
      <Help />
    </motion.div>
  );
};

export default About;
