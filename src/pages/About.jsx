import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>


      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us" />

          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium similique cum provident asperiores odit, maxime mollitia sunt dolore odio culpa, illo iusto aliquid alias, ea repellat! Delectus, magni modi? Officiis.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, magnam eaque consectetur neque iure recusandae consequuntur excepturi rerum? Ratione quos hic doloremque quam iure voluptatum et officia repellendus nam necessitatibus.</p>

                  <b className='text-gray-800'>Our Mission</b>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sapiente omnis laborum debitis harum optio architecto maiores, eligendi modi vero nihil ab facere ullam possimus voluptatibus deserunt quam, aspernatur odit?</p>

            </div>

        </div>

          <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
          </div>

          <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm;py-20 flex flex-col gap-5'>

              <b>Quality Assuarnce:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis ab accusantium ut recusandae praesentium quam totam, eos beatae nisi blanditiis corrupti sequi ad at quaerat ipsa a voluptas. Accusantium?</p>
  
            </div>

            <div className='border px-10 md:px-16 py-8 sm;py-20 flex flex-col gap-5'>

              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis ab accusantium ut recusandae praesentium quam totam, eos beatae nisi blanditiis corrupti sequi ad at quaerat ipsa a voluptas. Accusantium?</p>
  
            </div>

            <div className='border px-10 md:px-16 py-8 sm;py-20 flex flex-col gap-5'>

              <b>Execptional Customer Service:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis ab accusantium ut recusandae praesentium quam totam, eos beatae nisi blanditiis corrupti sequi ad at quaerat ipsa a voluptas. Accusantium?</p>
  
            </div>

          </div>

          <NewsletterBox/>


    </div>
  )
}

export default About
