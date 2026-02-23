import React, { useState } from 'react'
import { HiOutlineEye } from "react-icons/hi"
import { HiOutlineEyeOff } from "react-icons/hi"

interface InputProps { 
    label?: string
    className?: string
    type?: string
    placeholder?: string
    eyeButton?: boolean
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void  
    required?: boolean  
    error?: string 
}

const Input: React.FC<InputProps> = ({
    label,
    className = '',  
    type = 'text', 
    placeholder,
    eyeButton = false,
    name,
    value,
    onChange,
    required = false,
    error
}) => {
    const [isShow, setIsShow] = useState(false)

    const handleShowPass = () => {
        setIsShow(!isShow)
    }


    const inputType = eyeButton 
        ? (isShow ? 'text' : 'password')
        : type  

    return (
        <div className={`relative ${className}`}>
            {label && (  
                <label className='block text-[16px] font-medium text-gray-700 mb-1'>
                    {label}
                </label>
            )}
            
            <input
                value={value}
                onChange={onChange}
                name={name}
                type={inputType}
                placeholder={placeholder}
                required={required}
                className={`
                    bg-[#1c74bc] bg-opacity-[5%] w-full h-[58px] 
                    rounded-[10px] px-[20px] text-[16px] 
                    focus:outline-none focus:ring-2 focus:ring-[#c6273A]/20
                    ${error ? 'border border-red-500' : 'border border-transparent'}
                `}
            />

            {error && (
                <p className='text-red-500 text-sm mt-1'>{error}</p>
            )}

            {eyeButton && (
                <div 
                    onClick={handleShowPass}
                    className='text-[#23283253] absolute right-[24px] bottom-[18px] text-[24px] cursor-pointer'
                >
                    {isShow ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                </div>
            )}
        </div>
    )
}

export default Input