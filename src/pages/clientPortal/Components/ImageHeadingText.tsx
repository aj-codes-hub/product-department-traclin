import React from 'react'

interface ImageHeadingTextProps {
    image:string;
    Title:string;
    paragraph:string;
    className?:string;
    size?: 'md' | 'xl';
}





const ImageHeadingText:React.FC<ImageHeadingTextProps> = (
    {
     image,
     Title,
     paragraph,
     className,
     size = 'md',
    }) => {
    


const IconSizeClasses = {
    md:"h-[65px] w-[65px]",
    xl:"h-[148px] w-[148px]",
}


const disabledClasses = size === "xl" ? 'h-[64px] w-[64px]' : 'h-[30px]' ;

const IconSize = `${IconSizeClasses[size]}`

  return (
      <div className={`sm:w-[370px] w-[320px] ${className}`}> 

                <div className={`bg-[#F4E6EA] rounded-full flex items-center justify-center ${IconSize}`}>
                
                <img src={image} className={disabledClasses}/>    

                </div>       
                
                <h1 className='text-[24px] font-bold mt-[18px]'> 
                    {Title}
                </h1>
        
                <p className='text-[16px] leading-[28px] font-light mt-[10px]'> 
                   {paragraph}
                </p>

       </div>

  )
}

export default ImageHeadingText