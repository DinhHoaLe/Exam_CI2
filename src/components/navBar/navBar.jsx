import React from 'react';

const NavBar = () => {
  return (
    <div className='flex items-center justify-between w-[73.375rem] h-12 bg-[#192026]'>
      <h2 className='font-bold text-4xl leading-8 text-white'>Anonime</h2>
      <span className='text-lg leading-8 text-[#868686]' style={{ letterSpacing: '0.07em' }}>Home</span>
      <span className='text-lg leading-8 text-[#868686]' style={{ letterSpacing: '0.07em' }}>List anime</span>
      <form action="" >
        <input type="text" className='bg-[#374151] w-[23.4rem] p-2 rounded-md border border-none focus:outline-none focus:ring-2 focus:ring-blue-500 pl-5 py-2' style={{borderRadius:'37px'}} placeholder='Search anime or movie' />
      </form>
    </div>
  );
}

export default NavBar;
