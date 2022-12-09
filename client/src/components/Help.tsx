import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const Help = () => {
  return (
    <div className='relative flex flex-col mx-4 my-20 lg:mx-0 xl:mx-4 max-w-screen-2xl'>
      <h1 className='mb-20 text-2xl font-bold tracking-widest text-center sm:text-3xl lg:text-4xl text-primary font-heading'>
        HOW CAN WE HELP YOU?
      </h1>
      <div className='flex flex-wrap justify-center gap-12 my-5'>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <SearchIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg font-bold sm:text-xl lg:text-2xl text-primary '>SEARCH</h2>
          <p className='text-sm font-medium text-justify text-stone-600 sm:text-base lg:text-lg'>
            Our vision is to rescue, rehabilitate and re-home animals in crisis,
            ensure healthy & good pets through education and advocacy.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <AppRegistrationIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg font-bold sm:text-xl lg:text-2xl text-primary '>REGISTER</h2>
          <p className='text-sm font-medium text-justify text-stone-600 sm:text-base lg:text-lg'>
            Our vision is to rescue, rehabilitate and re-home animals in crisis,
            ensure healthy pets through education, advocacy and affordable.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <VolunteerActivismIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg font-bold sm:text-xl lg:text-2xl text-primary '>ADOPT</h2>
          <p className='text-sm font-medium text-justify text-stone-600 sm:text-base lg:text-lg'>
            Our vision is to rescue, rehabilitate and rehome animals in crisis,
            ensure healthy pets through education, advocacy and affordable.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <RequestQuoteIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg font-bold sm:text-xl lg:text-2xl text-primary '>DONATE</h2>
          <p className='text-sm font-medium text-justify text-stone-600 sm:text-base lg:text-lg'>
            Our vision is to rescue, rehabilitate and rehome animals in crisis,
            ensure healthy pets through education, advocacy and affordable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
