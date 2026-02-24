import React, { useState } from 'react'
import Button from '../../../components/Button'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../../components/Auth'

interface SignUpFormData {
  name: string
  username: string
  email: string
  password: string
  agreeTerms: boolean
}

interface SignUpErrors {
  name?: string
  username?: string
  email?: string
  password?: string
  agreeTerms?: string
  general?: string
}

const MOCK_USERS: any[] = []

const SignUp: React.FC = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    username: '',
    email: '',
    password: '',
    agreeTerms: false
  })

  const [errors, setErrors] = useState<SignUpErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const navigateToClientPortal = () => {
    navigate('/')
  }

  const navigateToLoginPage = () => {
    navigate('/login')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    if (errors[name as keyof SignUpErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: SignUpErrors = {}
    let isValid = true

    if (!formData.name) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.username) {
      newErrors.username = 'Username is required'
      isValid = false
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
      isValid = false
    }

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
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
      isValid = false
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to terms and privacy policy'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const mockSignUp = (userData: SignUpFormData): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existingUser = MOCK_USERS.find(u => u.email === userData.email)
        
        if (existingUser) {
          resolve({
            success: false,
            message: 'User with this email already exists'
          })
        } else {
          MOCK_USERS.push({
            email: userData.email,
            password: userData.password,
            name: userData.name,
            username: userData.username
          })
          
          resolve({
            success: true,
            message: 'Account created successfully'
          })
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
      const result = await mockSignUp(formData)
      
      if (result.success) {
        localStorage.setItem('tempUser', JSON.stringify({
          email: formData.email,
          name: formData.name
        }))
        
        navigate('/')
      } else {
        setErrors({ general: result.message })
      }
    } catch (error) {
      setErrors({ general: 'Something went wrong. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='w-[50vw] h-screen bg-[#F4E6EA] lg:block hidden relative'>
        <img onClick={navigateToClientPortal}
             src="/Logo/red-brand-logo.png" 
             alt="Logo"
             className='absolute top-0 left-0 h-[26%] cursor-pointer
                       2xl:w-[36%] xl:w-[48%] w-[55%]' 
        />
        <img src="/Images/SignUp-girl-red-shirt.png"
             className='absolute left-1/2 -translate-x-1/2 xl:top-[20%] top-[25%]
                       2xl:h-[65%] 2xl:w-[65%]
                       xl:h-[65%]  xl:w-[80%]
                       h-[55%]     w-[80%]'
        />
      </div>

      <div className='flex items-center 2xl:justify-start justify-center lg:w-[50vw] w-full h-screen relative'>
        <button onClick={navigateToLoginPage}
                className='absolute top-[40px] sm:top-[60px] sm:right-[50px] right-[20px] text-[18px] font-[500]'>
          Already have an account?
          <span className='text-[#c6273A]'> Login</span>
        </button>

        <div className='xl:w-[544px] sm:w-[450px] w-[85%] 2xl:ml-[120px]'>
          <h1 className='sm:text-[34px] text-[28px] font-bold text-center md:text-left'>
            Sign Up to Traclin
          </h1>

          <p className='sm:text-[20px] text-[14px] text-[#232832] font-normal sm:mt-[24px] mt-[8px] text-center md:text-left'>
            Please enter your details or Sign up with social accounts
          </p>

          {errors.general && (
            <div className='mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
              {errors.general}
            </div>
          )}

          <div className='sm:mt-[38px] mt-[30px]'>
            <form onSubmit={handleSubmit}>
              <Input 
                name='name'
                type='text'
                label='Name'
                placeholder='Full name'
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required={true}
              />

              <Input 
                name='username'
                type='text'
                label='User name'
                placeholder='Username'
                className='sm:mt-[20px] mt-[16px]'
                value={formData.username}
                onChange={handleChange}
                error={errors.username}
                required={true}
              />

              <Input 
                name='email'
                type='email'
                label='Email'
                placeholder='Your email'
                className='sm:mt-[20px] mt-[16px]'
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required={true}
              />

              <Input 
                name='password'
                type='password'
                label='Password'
                placeholder='Password'
                className='sm:mt-[20px] mt-[16px]'
                eyeButton={true}
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                required={true}
              />

              <div className='flex items-center mt-[20px] mb-[30px]'>
                <input 
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className='sm:h-[16px] h-[14px] sm:w-[16px] w-[14px] cursor-pointer' 
                />
                <label className='ml-[10px] text-gray-700 sm:text-[14px] text-[10px]'>
                  I agree to freedom 
                  <span className='text-[#1C75BC] cursor-pointer'> terms of service </span> 
                  and
                  <span className='text-[#1C75BC] cursor-pointer'> privacy policy </span>
                </label>
              </div>
              {errors.agreeTerms && (
                <p className='text-red-500 text-sm mt-[-20px] mb-[20px]'>{errors.agreeTerms}</p>
              )}

              <Button 
                type='submit'
                variant='primary'
                size='lg'
                className='w-full'
                disabled={isLoading}
              >
                {isLoading ? 'Creating account...' : 'Sign up'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp