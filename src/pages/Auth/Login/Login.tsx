import React, { useState } from 'react'
import Button from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../../components/Auth'

interface LoginFormData {
  email: string
  password: string
}

interface LoginErrors {
  email?: string
  password?: string
  general?: string  
}

const MOCK_USERS = [
  {
    email: 'user@gmail.com',
    password: '12345678',
    name: 'Test User'
  },
]

const Login: React.FC = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState<LoginErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const navigateToClientPortal = () => {
    navigate('/')
  }

  const navigateToSignUpPage = () => {
    navigate('/sign-up')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name as keyof LoginErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: LoginErrors = {}
    let isValid = true

    if (!formData.email) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const mockLogin = (email: string, password: string): Promise<{ success: boolean; message: string; user?: any }> => {
    return new Promise((resolve) => {
      setTimeout(() => {

        const user = MOCK_USERS.find(
          u => u.email === email && u.password === password
        )

        if (user) {
          resolve({
            success: true,
            message: 'Login successful',
            user: { email: user.email, name: user.name }
          })
        } else {

          const emailExists = MOCK_USERS.some(u => u.email === email)
          
          if (emailExists) {
            resolve({
              success: false,
              message: 'Incorrect password'
            })
          } else {
            resolve({
              success: false,
              message: 'User not found. Please check your email or sign up.'
            })
          }
        }
      }, 1500) 
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors({}) 

    try {
      console.log('Attempting login with:', formData)
      
      const result = await mockLogin(formData.email, formData.password)
      
      if (result.success) {
        console.log('Login successful:', result.user)
        
        localStorage.setItem('user', JSON.stringify(result.user))
        localStorage.setItem('isAuthenticated', 'true')
        
        navigate('/')
      } else {
        setErrors({
          general: result.message
        })
      }

    } catch (error) {
      setErrors({
        general: 'Something went wrong. Please try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='w-[50vw] h-screen bg-gradient-to-tl lg:block hidden
                     from-[#F14D5C] to-[#A2071D] relative'>
        <img onClick={navigateToClientPortal}
             src="/Logo/white-brand-logo.png" 
             alt="Logo"
             className='absolute top-0 left-0 h-[26%] cursor-pointer
                       2xl:w-[36%] xl:w-[48%] w-[55%]' 
        />
        <img src="/Images/login-girl-red-shirt.png"
             className='absolute bottom-0 left-0 
                       2xl:h-[70%] 2xl:w-[70%]
                       xl:h-[70%]  xl:w-[80%]
                       h-[60%]     w-[80%]'
        />
      </div>

      <div className='flex items-center 2xl:justify-start justify-center lg:w-[50vw] w-full h-screen relative'>
        <button onClick={navigateToSignUpPage}
                className='absolute top-[60px] sm:right-[50px] right-[20px] text-[18px] font-[500]'>
          Don't have an account? 
          <span className='text-[#c6273A]'> Register</span>
        </button>

        <div className='xl:w-[544px] sm:w-[450px] w-[90%] 2xl:ml-[120px]'>
          <h1 className='text-[34px] font-bold text-center md:text-left'>
            Sign in to Traclin
          </h1>

          <p className='text-[20px] text-[#232832] font-normal mt-[24px] text-center md:text-left'>
            Please enter your email or log in with social accounts
          </p>
          
          {errors.general && (
            <div className='mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
              {errors.general}
            </div>
          )}

          <div className='mt-[38px]'>
            <form onSubmit={handleSubmit}>
              <Input 
                name='email' 
                label='Email'
                type='email'
                placeholder='Your email'
                value={formData.email}  
                onChange={handleChange} 
                required={true}  
                error={errors.email}     
              />

              <Input 
                name='password'
                label='Password'
                type='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                eyeButton={true}
                required={true}
                className='mt-[20px]'
              />

              <div className='flex items-center mt-[20px] mb-[30px]'>
                <input type="checkbox"
                       className='h-[16px] w-[16px]' 
                />
                <label className='ml-[10px] text-gray-700'>
                  Remember Me
                </label>
                <button type='button'  
                        className='ml-auto text-[#66737F] hover:text-[#c6273A]'>
                  Forgot Password
                </button>
              </div>

              <Button 
                type='submit'
                variant='primary'
                size='lg'
                className='w-full'
                disabled={isLoading} 
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login