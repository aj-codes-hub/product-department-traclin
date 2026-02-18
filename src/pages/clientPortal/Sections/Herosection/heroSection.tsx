import React from 'react'
import Button from '../../../../components/common/Button'




const HeroSection:React.FC = () => {
  return (
   <div className='inner flex xl::gap-[29px] sm:mt-[89px] mt-[50px] lg:text-left text-center xl:mx-0 mx-auto'>

      <div className='xl:w-[565px] lg:w-[50%] w-[90%] lg:mx-0 mx-auto mt-[25px]'>

         <h1 className='sm:text-[58px] text-[45px] font-[700] sm:leading-[82px] leading-[72px]'>
            Supercharge Your 
            Earnings From Your
            Fanbases
         </h1>

         <p className='font-[400] text-[24px] mt-[34px]'>
            Completely free to use!
         </p>

         <Button type='button'
                 size='lg'
                 variant='primary'
                 className='mt-[40px]'>
              Get Started
         </Button>

      </div>

      <div className='h-[389px] 2xl:w-[591px] xl:w-[541px] w-[50%] relative lg:block hidden'>
        
        <img src="/Images/dashboard-image.png" 
             alt="dashboard-image" 
             className='absolute left-0 rounded-[12px] shadow-[0_44px_74px_#94929340]
                        2xl:w-[591px] 2xl:h-[299px] 2xl:top-0
                         xl:w-[541px] xl:h-[249px]   xl:top-[10%]
                            w-[501px]    h-[209px]      top-[15%]' 
         />

        <img src="/Images/book-a-call-page-image.png" 
             alt="dashboard-image" 
             className='rounded-[12px] absolute border shadow-[0_64px_84px_#94929326]
                        2xl:w-[470px] 2xl:h-[242px] 2xl:right-[-114px]  2xl:bottom-0
                        xl:w-[420px]   xl:h-[192px]  xl:right-[-40px]    xl:bottom-0
                           w-[380px]    h-[152px]       right-[0px]         bottom-[30px]'      
         />     

      </div>

      </div>
  )
}

export default HeroSection