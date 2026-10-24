import React from 'react'
import logo from '../../images/logo.png'
import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react'
import { Separator } from '../ui/separator'
const Footer = () => {
  return (
    <>
      <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  px-10 gap-10 xl:gap-12 mx-auto'>

        <div className="logo ">
          <div
            className="logo !bg-transparent transition-transform 
           duration-500 hover:scale-105 font-bold flex gap-2
          items-center text-xl">
            <img className='w-10 h-10' src={logo} alt="Logo" />
            <p className='font-extrabold bg-gradient-to-r
          from-orange-600 via-orange-500 to-amber-400 
          bg-clip-text text-transparent text-3xl 
          inline'>
              BURGER HOME</p>
          </div>
          <p className='mt-5 text-lg text-gray-400'>Where every dish ignites passion and every bite tells a story of fire and flavor. Join us on a spicy journey through India's culinary heritage.</p>
          <div className='text-white flex justify-between w-[100%] lg:w-[50%] my-5'>
            <IconBrandFacebook className='hover:scale-125 hover:bg-orange-500 transition duration-300 hover:text-white px-1 py-2 rounded-full border-orange-500 bg-orange-500/10 border-2 text-orange-500  '
              size={45} />
            <IconBrandInstagram className='hover:scale-125 hover:bg-orange-500 transition duration-300 hover:text-white px-1 py-2 rounded-full border-orange-500 bg-orange-500/10 border-2 text-orange-500  '
              size={45} />
            <IconBrandX className='hover:scale-125 hover:bg-orange-500 transition duration-300 hover:text-white px-1 py-2 rounded-full border-orange-500 bg-orange-500/10 border-2 text-orange-500  '
              size={45} />
          </div>
        </div>
        <div className="text-white quick-links">
          <p className='text-orange-500 mb-8 text-2xl'>Quick Links</p>
          <p className='text-xl text-gray-400 hover:translate-x-2 hover:text-orange-500 transition duration-300 my-5'><a href="#hero">Home</a></p>
          <p className='text-xl text-gray-400 hover:translate-x-2 hover:text-orange-500 transition duration-300 my-5'><a href="#about">About</a></p>
          <p className='text-xl text-gray-400 hover:translate-x-2 hover:text-orange-500 transition duration-300 my-5'><a href="#menu">Menu</a></p>
          <p className='text-xl text-gray-400 hover:translate-x-2 hover:text-orange-500 transition duration-300 my-5'><a href="#services">Services</a></p>
          <p className='text-xl text-gray-400 hover:translate-x-2 hover:text-orange-500 transition duration-300 my-5'><a href="#portfolio">Portfolio</a></p>
          <p className='text-xl text-gray-400 hover:translate-x-2 hover:text-orange-500 transition duration-300 my-5'><a href="#help">Help</a></p>
          <p className='text-xl text-gray-400 hover:translate-x-2 hover:text-orange-500 transition duration-300 my-5'><a href="#contact">Contact</a></p>
        </div>
        <div className="contact-info">
          <p className='text-orange-500 mb-8 text-2xl'>Contact Info</p>
          <p className='text-xl text-gray-400 my-2'>123 Spice Street</p>
          <p className='text-xl text-gray-400 my-2'>Connaught Place</p>
          <p className='text-xl text-gray-400 my-2'>New Delhi, India 110001</p>
          <p className='text-xl text-orange-500 my-2'>+91 98765 43210</p>
          <p className='text-xl text-orange-500 my-2'>info@masalaking.com</p>

        </div>
        <div className="opening-hours">
          <p className='text-orange-500 mb-8 text-2xl'>Openning Hours</p>
          <p className='text-lg text-gray-400 my-2'>Monday - Thursday</p>
          <p className='text-lg text-orange-500 my-2'>11:00 AM - 10:30 PM</p>
          <p className='text-lg text-gray-400 my-2'>Friday - Sunday</p>
          <p className='text-lg text-orange-500 my-2'>11:00 AM - 11:30 PM</p>
          <p className='text-sm font-[100] text-gray-400 my-2'>Kitchen closes 30 mins before</p>
        </div>

      </div>
      <Separator className="  bg-gradient-to-r  from-orange-500/0 via-orange-500 to-orange-500/0 bg-transparent my-5" />
      <p className='text-gray-500 text-center my-5'>© 2024 MasalaKing. All Rights Reserved. Crafted with 🔥 and Spices.</p>
    </>

  )

}

export default Footer