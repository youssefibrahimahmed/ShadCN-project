import React from 'react'
import background from '../images/background.png'
import { Calendar, CheckCircle2, Flame, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"

import '../index.css'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSection } from "@/features/uiSlice"
import Cards from '@/components/reusableComponents/Cards'

const HeroSection = ({ id }) => {
  const dispatch = useDispatch()
  const activeSection = useSelector(
    (state) => state.ui.activeSection
  )
  return (
    <section
      id={id}
      className={` relative isolate flex flex-col items-center justify-center text-white scroll-m-20 overflow-hidden min-h-screen `}>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className='absolute inset-0 -z-10 scale-105 blur-sm bg-cover bg-center bg-no-repeat  ' />
      <div className='absolute min-h-screen inset-0 -z-10 bg-black/60' />

      <div className="relative flex justify-center text-center items-center mt-20 ">
        <p className='bg-orange-900 py-4 px-8 rounded-full
         border border-orange-500 
         shadow-xl border-2 text-orange-600 text-xl 
         font-semibold glow-animation text-ceneter flex items-center justify-center'>
          <Star size={30} className='inline text-yellow-500' />
          India's Spiciest Restaurant Since 2008
          <Star size={30} className='inline text-yellow-500' /></p>
      </div>
      <h1 className='md:w-3/4 w-full items-center text-center font-extrabold text-orange-600 text-5xl mt-3 sm:text-7xl md:text-9xl'>IGNITE YOUR SENSES</h1>
      <p className='text-center sm:text-4xl text-3xl  font-normal text-yellow-500 my-6'>WHERE FIRE MEETE FLAVOR</p>
      <p className='w-[90%] lg:w-1/2 text-center text-xl text-gray-400 my-5'>Embark on a fiery culinary adventure through India's spiciest delicacies. From mild warmth to extreme heat, we challenge your taste buds with authentic, traditional recipes that pack serious flavor and fire.</p>

      <div className="flex flex-col md:flex-row  gap-2 my-8">
        <Button
          variant="contained"
          onClick={() => dispatch(setActiveSection('menu'))}
          className=' 
       bg-gradient-to-r px-12 py-8
        rounded-full text-lg 
        font-bold to-amber-400
         via-orange-500 from-orange-600'>
          <Flame className='!h-6 !w-6' size={40} /> <a href="#menu">EXPLORE SPICY MENU</a>
        </Button>
        <Button
          onClick={() => dispatch(setActiveSection('contact'))}

          ariant="outlined"
          className='px-12 py-8 rounded-full
           text-lg font-bold border border-2
            text-orange-600 bg-transparent 
            border-orange-600
            hover:bg-orange-600 hover:text-white'>

          <Calendar className='!h-6 !w-6' />
          <a href="#contact"> BOOK A TABLE</a>
        </Button>
      </div>
      <div className="w-[70%] p-5 relative my-10 flex flex-col lg:flex-row  gap-10">

        <Cards
          name='SPICY DISHES'
          icon={CheckCircle2}
          number='50+' />
        <Cards
          name='YEARS EXPERIENCE'
          icon={CheckCircle2}
          number='15+' />

        <Cards
          name='HAPPY GUESTS'
          icon={CheckCircle2}
          number='10K+' />

      </div>




    </section>
  )
}

export default HeroSection