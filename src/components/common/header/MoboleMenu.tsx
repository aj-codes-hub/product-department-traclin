import React from 'react'
import Button from '../Button'


interface MoboleMenuProps {
    classNmae?:string
}


const MoboleMenu:React.FC<MoboleMenuProps> = ({classNmae}) => {

  return (
    <div className={`bg-white transform duration-300 shadow-[44px_0_74px_#94929340]  z-[999] h-full fixed
                     overflow-hidden top-0 lg:hidden block  left-0 ${classNmae}`}>
         
          <img src="/Logo/brand-logo.png"
            alt="brand-logo"
            className='sm:w-[229px] sm:h-[74px]
                          w-[180px]    h-[64px]' />


        <div className='flex flex-col justify-between text-[18px] gap-[30px] font-[500] w-[177px] my-[60px]'>
            <p className='cursor-pointer'>FAQ</p>
            <p className='cursor-pointer'>Contact us</p>
       </div>


       <div className='flex flex-col gap-[10px] w-full'>

        <Button className='w-full border rounded-[10px]'
                type='submit'
                variant='secondary'
                size='lg'>
            log in
        </Button>

         <Button className='w-full'
                 type='submit'
                 variant='primary'
                 size='lg'>
            Sign Up
        </Button>

      </div>

    </div>
  )
}

export default MoboleMenu