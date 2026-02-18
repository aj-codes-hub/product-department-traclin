import React, { useState } from 'react'
import Button from '../Button'
import { LuMenu } from "react-icons/lu";
import MoboleMenu from './MoboleMenu';



const Header:React.FC = () => {

const [isShow, setIsShow] = useState(false)

const handleShowMenu = () => {
  setIsShow(!isShow)
}


  return (
     <div className='max-w-[1170px] w-full h-[74px] mx-auto sticky top-0 z-[99] bg-white overflow-hidden mt-[20px] xl:px-0 px-[20px]'>
      
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

      <LuMenu  onClick={handleShowMenu}
               className='lg:hidden block ml-auto cursor-pointer
                         sm:h-[50px] sm:w-[50px]
                            h-[40px]    w-[40px]'/>

      </div>

      <MoboleMenu classNmae={`${isShow ? "w-[80%] pt-[20px] px-[20px]" : "w-0" }`}/>

    </div>
  )
}

export default Header