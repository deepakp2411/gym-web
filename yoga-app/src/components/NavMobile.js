import React from 'react';
import { nav } from '../data';


const NavMobile = ({navMobile}) => {
  return <nav className={`${navMobile ? 'min-h-screen': 'min-h-0'} lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden h-0 transition-all duration-700 ease-out`}>
    <ul className='w-full h-full flex flex-col justify-center items-center gap-y-6 '>
    {
      nav.map((item,idx) => {
        return <li key={idx} className=''>
          <a href={item.href} className='text-white text-body-md'>{item.name}</a>
        </li>
      })
    }

    </ul>
    <div className='-mt-[13vh] flex justify-center  gap-x-8'>
      <button className='btn btn-lg text-white'>Log in</button>
      <button className='btn btn-lg text-white btn-primary'>Sign in</button>
    </div>
  </nav>;
};

export default NavMobile;
