import OurSpaceCard from '@/components/reusableComponents/OurSpaceCard'
import React from 'react'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import meat from '../images/meat.png'
const OurSpace = ({ id }) => {
  const data = [
    {
      name: 'Fine Dining Experience',
      instructions: 'Elegant ambiance with traditional Indian decor',
      category: 'Interior',
      image: p1
    },
    {
      name: 'Open Kitchen',
      instructions: 'Watch our chefs create magic with spices',
      category: 'Kitchen',
      image: meat
    },
    {
      name: 'Warm Atmosphere',
      instructions: 'Cozy seating perfect for family gatherings',
      category: 'Ambiance',
      image: p2
    },
    {
      name: 'Private Dining',
      instructions: 'Exclusive spaces for special occasions',
      category: 'Events',
      image: p3

    },
    {
      name: 'Outdoor Garden',
      instructions: 'Al fresco dining under the stars',
      category: 'Outdoor',
      image: p4
    },
    {
      name: 'Bar & Lounge',
      instructions: 'Curated selection of wines and cocktails',
      category: 'Bar',
      image: p5
    }
  ]
  return (
    <section id={id} className="scroll-m-20 text-white my-20 min-h-screen lg:px-10 px-4   ">
      <p className='text-orange-600 text-center  text-lg font-semibold [word-spacing:8px]'>OUR SPACE</p>
      <p className=' text-center text-6xl mb-5 font-extrabold mt-5 '>Restaurant  <span className='coloring'>Gallery</span></p>
      <p className='text-center  text-gray-400 mb-10 font-normal text-xl '>Step inside MasalaKing and experience the ambiance</p>
      <div className='gap-5 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center mx-auto justify-between'>

        {
          data.map((dat, index) =>
            <OurSpaceCard
              image={dat.image}
              name={dat.name}
              instructions={dat.instructions}
              category={dat.category}
              key={index}
            />
          )
        }
      </div>
    </section>
  )
}

export default OurSpace