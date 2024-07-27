import React from 'react'


const Release = ({activeView,id,img,movieName,episode}) => {
  let change = () =>{
    activeView(id);
  }
  return (
    <div>
        <div className='w-[10.6250rem]' onClick={change}> 
          <div className="relative flex justify-center cursor-pointer">
            <img src={img} alt="" className='w-[10.6250rem] h-72 object-cover' />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] "></div>
            <span className='text-white absolute bottom-[15px] poppins font-normal text-[16px]'>{episode}</span>
          </div>
          <div className="flex justify-center cursor-pointer">
            <span className='poppins font-semibold text-white text-[16px]'>{movieName}</span>
          </div>
        </div>
    </div>
  )
}

export default Release