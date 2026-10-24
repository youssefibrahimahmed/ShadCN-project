import ContactCard from '@/components/reusableComponents/ContactCard'
import { FormFile } from '@/components/reusableComponents/FormFile'
import { Clock, Mail, PhoneCall } from 'lucide-react'
import React from 'react'

const GetInTouch = ({ id }) => {
  return (
    <section id={id} className="scroll-m-20 my-20 min-h-screen text-white items-center ">

      <p className='text-orange-600 text-center  text-lg font-semibold [word-spacing:8px]'>GET IN TOUCH</p>
      <p className=' text-center text-5xl mb-15 font-extrabold mt-5 '>Reserve Your <span className='coloring'>Table</span></p>


      <div className='grid grid-cols-1 lg:grid-cols-2 p-2 lg:p-10 gap-10 w-full  mx-auto  ' >
        <div className="map overflow-hidden rounded-xl min-h-[830px]">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27833.977929497938!2d30.8477952!3d29.3044224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1792840409964!5m2!1sar!2seg"
            className="w-full h-[830px] border-0 rounded-2xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <div className="form flex flex-col">
          <FormFile />
          <div className="w-[100%] p-5 relative my-10 flex flex-col lg:flex-row  gap-10">
            <ContactCard
              name='+91 98765 43210'
              icon={PhoneCall}
            />

            <ContactCard
              name='info@masalaking.com'
              icon={Mail}
            />

            <ContactCard
              name=' Mon-Sun: 11 AM - 11 PM'
              icon={Clock}
            />

          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch