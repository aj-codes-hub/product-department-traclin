import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { LuMenu } from "react-icons/lu";
import MoboleMenu from './MoboleMenu';
import { RxCross1 } from "react-icons/rx";



const Header:React.FC = () => {

const [isShow, setIsShow] = useState(false)

const handleShowMenu = () => {
  setIsShow(!isShow)
}


const [scrollY, setScrollY] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <div className={`w-full bg-white mt-[20px] sticky top-0 z-[99] ${scrollY ? "shadow-[0_64px_84px_#94929326]" : ""}`}>

     <div className='max-w-[1170px] w-full h-[74px] mx-auto overflow-hidden xl:px-0 px-[20px]'>
      
      <div className='flex w-full h-full items-center'>

       <img src="/Logo/brand-logo.png"
            alt="brand-logo"
            className='sm:w-[229px] sm:h-full
                          w-[180px]    h-[80%]' />


       <div className='lg:flex justify-between text-[18px] font-[500] w-[177px] ml-[80px] hidden'>
            <a href='#' className='cursor-pointer'>FAQ</a>
            <a href='#' className='cursor-pointer'>Contact us</a>
       </div>
       

      <div className='lg:flex gap-[10px] ml-auto hidden'>

        <Button type='submit'
                variant='secondary'
                size='lg'>
            log in
        </Button>

         <Button type='submit'
                variant='primary'
                size='lg'>
            Sign Up
        </Button>

      </div>

      {isShow
  
        ?  <RxCross1  onClick={handleShowMenu}
               className='lg:hidden block ml-auto cursor-pointer y   bvcxz2
                         sm:h-[50px] sm:w-[50px]
                            h-[40px]    w-[40px]'/>
       
        :    <LuMenu  onClick={handleShowMenu}
               className='lg:hidden block ml-auto cursor-pointer
                         sm:h-[50px] sm:w-[50px]
                            h-[40px]    w-[40px]'/>      
      }     


      </div>

      <MoboleMenu classNmae={`${isShow ? "w-[80%] pt-[20px] px-[20px]" : "w-0" }`}/>

     </div>

    </div>
  )
}

export default Header