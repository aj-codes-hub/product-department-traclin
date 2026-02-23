import React from 'react'
import Button from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../../components/Auth'

const SignUp:React.FC = () => {

  const navigate = useNavigate();

  const navogateToClientPortal = () => {
    navigate('/')
  }

  const navogateToLoginPage = () => {
    navigate('/login')
  }


  return (
    <div className='flex items-center justify-center'>
         
        <div className='w-[50vw] h-screen bg-[#F4E6EA] lg:block hidden relative'>
          
         <img onClick={navogateToClientPortal}
              src="/Logo/red-brand-logo.png" 
              alt="Logo"
              className='absolute top-0 left-0 h-[26%] cursor-pointer
                         2xl:w-[36%]
                         xl:w-[48%]
                            w-[55%] ' 
        />

         <img src="/Images/SignUp-girl-red-shirt.png"
               className='absolute left-1/2 -translate-x-1/2 xl:top-[20%] top-[25%] border
                          2xl:h-[65%] 2xl:w-[65%]
                          xl:h-[65%]  xl:w-[80%]
                             h-[55%]     w-[80%]
               '/>
        </div>

        <div className='flex items-center 2xl:justify-start justify-center lg:w-[50vw] w-full h-screen relative'>

          <button  onClick={navogateToLoginPage}
                   className='absolute top-[40px] sm:top-[60px] sm:right-[50px] right-[20px] text-[18px] font-[500]'>

            Already have an a account?
            <span className='text-[#c6273A]'> Login</span>

          </button>

        <div className='xl:w-[544px] sm:w-[450px] w-[90%] 2xl:ml-[120px]'>

          <h1 className='text-[34px] font-bold text-center md:text-left'>
           Sign Up to Traclin
          </h1>

          <p className='text-[20px] text-[#232832] font-normal sm:mt-[24px] mt-[10px] text-center md:text-left'>
            Please enter your details or Sign up with social accounts
          </p>

        <div className='mt-[38px]'>
          
          <form action="">

            <Input type='text'
                  label='Name'
                  placeholder='Full name'
              />

            <Input type='text'
                  label='User name'
                  placeholder='Password'
                  className='mt-[20px]'
              />      

            <Input type='text'
                  label='Email'
                  placeholder='Your email'
                  className='mt-[20px]'
              />

            <Input type='password'
                  label='Password'
                  placeholder='Password'
                  className='mt-[20px]'
                  eyeButton={true}
              />   

           <div className='flex items-center mt-[20px] mb-[30px]'>
             
              <input type="checkbox"
                    className='h-[16px] w-[16px] ' 
                />

              <label className='ml-[10px]'>
                I agree to freedom 
                <span className='text-[#1C75BC] cursor-pointer'> terms of service </span> 
                and
                <span className='text-[#1C75BC] cursor-pointer'> privacy policy </span> 
              </label>

           </div>

           <Button type='submit'
                   variant='primary'
                   size='lg'
                   className='w-full'>
            Sign up
           </Button>

          </form>

            </div>
         </div>
      </div>
    </div>
  )
}

export default SignUp