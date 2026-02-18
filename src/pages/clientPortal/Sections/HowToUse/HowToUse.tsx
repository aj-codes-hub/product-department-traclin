import React from 'react'
import ImageHeadingText from '../../Components/ImageHeadingText'

const HowToUse:React.FC = () => {
  return (
    <div className='max-w-[1170px] mx-auto w-full my-[150px]'>
        <h1 className='text-[38px] font-bold text-center'> 
            How to use 
        </h1>

      <div className='flex flex-col lg:flex-row gap-[30px] mt-[80px] items-center lg:items-start'>

      <ImageHeadingText className='text-center flex flex-col items-center'
                        size="xl"
                        image='/Icons/document-text.png'
                        Title='Sign Up, Copy your Affiliate Links and Personal Links'
                        paragraph="Sign up for free on TRACLIN. You don't have to pay for anything; you're here
                                   just to earn extra money from your creative work. Then, copy your affiliate links 
                                   of the products or services you love and want to recommend to your audience."
        />

        <ImageHeadingText className='text-center flex flex-col items-center'
                          size="xl"
                          image='/Icons/videoIcon.png'
                          Title='Private Video Calls'
                          paragraph="You can set your timeslots available for private video calls with your fan,
                                     set a rate for that call, and earn money from it. Many of your fans would love to
                                     hear from you in real conversation, so you would want to give them the opportunity 
                                     to do so. This feature is a total game-changer and can exponentially
                                     boost your income."
        />

        <ImageHeadingText className='text-center flex flex-col items-center'
                          size="xl"
                          image='/Icons/microPhone.png'
                          Title='Share To Promote '
                          paragraph="Finally, copy your unique link from TRACLIN and publish it anywhere you want on your
                                     social media platforms (especially your Link in Bio) like Youtube, Instagram,
                                     TikTok, Twitter, Facebook, Pinterest, Linkedin, Reddit—literally anywhere!
                                     The more you share it, the more you can earn."
        />

                                                             
      </div>
      
    </div>
  )
}

export default HowToUse