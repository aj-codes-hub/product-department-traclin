import React from 'react'
import ImageHeadingText from '../../Components/ImageHeadingText'

const AboutUs:React.FC = () => {
  return (
    <div className='max-w-[1170px] w-full mt-[135px]'>
        
     <div className='flex xl:flex-row flex-col gap-[50px] xl:text-left text-center'>

       <div className='xl:w-[309px] w-full'>
           <h1 className='text-[38px] font-bold'>
            What is Traclin?
           </h1>
           <p className='text-[16px] font-light leading-[28px] mt-[18px]'>
                Traclin is a marketing platform that helps Youtubers,
                bloggers, and content creators monetize their creative
                work to generate a consistent income. Traclin will create
                a customized webpage with all your creativities and
                suggested products that you love. You can publish it
                on social media platforms like Youtube, Instagram, TikTok,
                Twitter, Facebook, or anywhere else—especially, add the
                link in your bio!
             </p>
       </div>


       <div className='flex flex-col items-center'>

        <div className='flex md:flex-row flex-col gap-[70px]'>
            <ImageHeadingText size='md'
                              className='flex flex-col items-center xl:items-start'
                              image='/Icons/profileUsers.png'
                              Title='Connect with your audience.'
                              paragraph='Generate consistent income from all those loyal fanbases
                                         who love your content. Attract more audiences, retain them
                                         for longer, and get more conversions leads and sales.'
            />
            
             <ImageHeadingText size='md'
                               className='flex flex-col items-center xl:items-start'
                               image='/Icons/ProgressHigh.png'
                               Title='Increase your earnings.'
                               paragraph='Traclin generates a customized webpage with your own product links like your gadgets,
                                          t-shirts, e-books, NFT, etc., whatever you think your audience will be most interested in.
                                          Plus, you can add unlimited affiliate links from affiliate programs such as Amazon Affiliate,
                                          NordVPN, etc., that allow you to earn a commission.'
            />
        </div>
    
        <div className='flex md:flex-row flex-col gap-[70px] mt-[20px]'>

             <ImageHeadingText  size='md'
                                className='flex flex-col items-center xl:items-start'
                                image='/Icons/videoIcon.png'
                                Title='Videocall with your fans.'
                                paragraph='Connect with your audience through a video call and earn additional money.
                                           Set your timeslots available for private video calls with your fan, set a 
                                           rate for that call, and earn money from it.'
            />

            <ImageHeadingText size='md'
                              className='flex flex-col items-center xl:items-start'
                              image='/Icons/progress.png'
                              Title='Insightful analytics.'
                              paragraph='Our platform will also provide insightful analytics about the number of visitors and
                                         clicks on your customized webpage. With this traffic and engagement data, you can plan
                                         the best strategies to promote your products.'
            />
            
        </div>
           
      </div>      


     </div>

    </div>
  )
}

export default AboutUs