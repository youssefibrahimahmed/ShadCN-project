import { WhyUsCard } from '@/components/reusableComponents/WhyUsCard'
import React from 'react'
import spicies from '../images/spicies.png'
import chief from '../images/chief.png'
import salad from '../images/salad.png'
import meat from '../images/meat.png'
const WhyUS = ({ id }) => {
  const cardData = [
    {
      titel: 'Authentic Spices',
      desc1: 'We source the finest and freshest spices directly from farms across India',
      desc2: 'Our spice collection includes rare varieties from Kerala, Kashmir, and Rajasthan. Each spice is carefully selected and stored to preserve its authentic flavor and aroma.',
      image: spicies
    },
    {
      titel: 'Expert Chefs',
      desc1: 'Our master chefs bring decades of traditional cooking expertise',
      desc2: 'Trained in the finest culinary traditions of India, our chefs have mastered the art of balancing spices and creating unforgettable flavors.',
      image: chief
    },
    {
      titel: 'Fresh Ingredients',
      desc1: 'Daily fresh produce and premium quality meats from trusted suppliers',
      desc2: 'Trained in the finest culinary traditions of India, our chefs have mastered the art of balancing spices and creating unforgettable flavors.',
      image: salad
    },
    {
      titel: 'Traditional Cooking',
      desc1: 'Time-honored cooking methods including tandoor and dum cooking',
      desc2: 'We partner with local farmers and trusted suppliers to ensure every ingredient is fresh, organic, and of the highest quality.',
      image: meat
    },
  ]
  return (
    <section id={id} className="scroll-m-20 text-white my-40 min-h-screen">
      <p className='text-orange-600 text-center  text-lg font-semibold [word-spacing:8px]'>WHAT MAKES US SPECIAL</p>
      <p className=' text-center text-5xl mb-15 font-extrabold mt-5 '>Our <span className='coloring'>Excellence</span></p>

      <div className='flex grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-4   relative'>

        {cardData.map((card) =>
          <WhyUsCard
            image={card.image}
            title={card.titel}
            desc1={card.desc1}
            desc2={card.desc2}
          />
        )}

      </div>
    </section>
  )
}

export default WhyUS