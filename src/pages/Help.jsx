import { HelpCard } from '@/components/reusableComponents/HelpCard'
import React from 'react'

const Help = ({ id }) => {

  const cardData = [

    {
      q: 'What are your opening hours?',
      ans: 'We are open daily from 11:00 AM to 11:00 PM, and the kitchen closes 30 minutes before closing time.'
    },
    {
      q: 'Do you accept reservations?',
      ans: 'Yes, you can book a table through the contact form on this page or by calling us directly at +91 98765 43210.'
    },
    {
      q: 'Can I order food online?',
      ans: 'Currently we offer dine-in reservations and local pickup. Online delivery is coming soon.'
    },
    {
      q: 'Is your menu suitable for vegetarians?',
      ans: 'Absolutely. We have a dedicated vegetarian section with flavorful options like Chili Paneer and Spicy Egg Curry.'
    },
    {
      q: 'How spicy are your dishes?',
      ans: 'We offer a range from mild to extremely hot. Each dish description includes its heat level so you can choose with confidence.'
    },
    {
      q: 'Do you have gluten-free options?',
      ans: 'Yes, we can prepare many dishes gluten-free on request. Please inform our staff when you place your order.'
    },

    {
      q: 'Can I customize my spice level?',
      ans: 'Yes, our chefs are happy to adjust the spice level to suit your taste, from mild to maximum heat.'
    },
    {
      q: 'What safety measures do you follow?',
      ans: 'We maintain strict hygiene and food safety standards, with regular kitchen cleaning and staff health checks.'
    },
    {
      q: 'Do you offer group bookings?',
      ans: 'Yes. For groups larger than five, please contact us in advance so we can reserve the best seating for you.'
    },
    {
      q: 'How can I contact customer support?',
      ans: 'Reach out via email at info@masalaking.com or call us at +91 98765 43210 for any assistance.'
    },

  ]
  return (
   
   <section id={id} className="scroll-m-20 my-40 min-h-screen text-white">
      <p className='text-orange-600 text-center  text-lg font-semibold [word-spacing:8px]'>NEED HELP?</p>
      <p className=' text-center text-3xl lg:text-6xl mb-5 font-extrabold mt-5 '>Frequently Asked   <span className='coloring'>Questions</span></p>
      <p className='text-center  text-gray-400 mb-15 font-normal text:lg lg:text-xl lg:w-[45%] mx-auto '>Find answers to common questions about reservations, menu choices, order policies, and more.</p>

      <div className='flext grid lg:grid-cols-2 grid-cols-1 w-full gap-5 px-8'>
        {cardData.map((data) =>
          <HelpCard
            q={data.q}
            ans={data.ans}
          />
        )}
      </div>
    </section>
  )
}

export default Help