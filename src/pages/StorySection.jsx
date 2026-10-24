
import { Separator } from "@/components/ui/separator"
import React from 'react'
import { Trophy } from 'lucide-react'
import { IconChefHat, IconPepper } from "@tabler/icons-react"
import Cards from "@/components/reusableComponents/Cards"
import spicies from '../images/spicies.png'
import meal from '../images/meal.png'
import pizza from '../images/pizza.png'
const StorySection = ({ id }) => {


  return (
    <section id={id} className="scroll-m-20 text-white my-20 min-h-screen">
      <p className='text-orange-600 text-center  text-lg font-semibold '>OUR STORY</p>
      <p className=' text-center text-5xl font-extrabold mt-5 '>The Heat  <span className='coloring'>Legacy</span></p>
      <p className='text-center my-5 text-gray-500 font-normal text-xl '>A journey through fire, flavor, and tradition</p>
      <div className='flex flex-col md:flex-row w-[85%] gap-10 mx-auto  mt-10 items-start'>
        <div className="left gap-4 flex-1 md:flex-row flex-col min-w-0 h-[800px] flex">
          <div className="relative shadow-[0_0_20px_rgba(249,115,22,0.35),0_0_40px_rgba(249,115,22,0.15)] overflow-hidden  h-full min-w-0 flex-1 group  rounded-xl transition duration-500">
            <img src={pizza} alt="" className="group-hover:scale-115  group-hover:skew-1 transition duration-500 w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <p className="absolute text-xl font-bold bottom-5 left-5 transition-opacity duration-300 group-hover:opacity-100 opacity-0  ">MASTER CHEF</p>
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <div className="relative shadow-[0_0_20px_rgba(249,115,22,0.35),0_0_40px_rgba(249,115,22,0.15)] overflow-hidden  h-full min-w-0 flex-1 group  rounded-xl transition duration-500">
              <img src={meal} alt="" className="group-hover:scale-115  group-hover:skew-1 transition duration-500 w-full h-full object-cover rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <p className="absolute text-xl font-bold bottom-5 left-5 transition-opacity duration-300 group-hover:opacity-100 opacity-0  ">Our Kitchen </p>

            </div>
            <div className="relative shadow-[0_0_20px_rgba(249,115,22,0.35),0_0_40px_rgba(249,115,22,0.15)] overflow-hidden  h-full min-w-0 flex-1 group  rounded-xl transition duration-500">
              <img src={spicies} alt="" className="group-hover:scale-115  group-hover:skew-1 transition duration-500 w-full h-full object-cover rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <p className="absolute text-xl font-bold bottom-5 left-5 transition-opacity duration-300 group-hover:opacity-100 opacity-0  ">Fresh Spices</p>

            </div>
          </div>
        </div>
        <div className="right flex-1 min-w-0">
          <div className="right flex gap-5">
            <p className="semi w-2 bg-orange-600" />
            <p className="text-xl lg:text-2xl">Since 2008, MasalaKing has been Delhi's premier destination for authentic spicy Indian cuisine. What started as a small family kitchen has grown into a legendary restaurant known for pushing the boundaries of heat and flavor.</p>
          </div>
          <p className="text-lg my-9 text-gray-500 font-normal">Our master chefs source the finest chilies from across India - from the smoky Kashmiri chilies of the north to the fiery bird's eye chilies of the south. Each dish is a carefully crafted balance of heat, spice, and authentic Indian flavors.</p>
          <p className="text-lg my-9 text-gray-500 font-normal">Whether you're a spice novice or a heat-seeking veteran, we have something to challenge and delight your palate. Our spice scale ranges from mild warmth to intense heat that will test even the bravest food warriors.</p>
            <div className="w-[100%] p-5 relative my-10 flex flex-col lg:flex-row  gap-10">
              <Cards
                name='Spicy Varieties'
                icon={IconPepper}
                number='50+' />

              <Cards
                name='Expert Chefs'
                icon={IconChefHat}
                number='12+' />

              <Cards
                name=' Awards Won'
                icon={Trophy}
                number='25+' />

            </div>
        </div>
      </div>
      <div className="h-px w-[100%] text-center   mx-auto mt-15  ">
        <Separator className="  bg-gradient-to-r  from-orange-500/0 via-orange-500 to-orange-500/0 " />
      </div>
    </section>
  )
}

export default StorySection