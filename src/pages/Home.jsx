import React from 'react'
import HeroSection from './HeroSection'
import StorySection from './StorySection'
import SpicyDelightSection from './SpicyDelightSection'
import WhyUS from './WhyUS'
import OurSpace from './OurSpace'
import Help from './Help'
import GetInTouch from './GetInTouch'

const Home = () => {
  return (
    <div>
      <HeroSection   id="hero"/>
      <StorySection   id="about" />
      <SpicyDelightSection   id="menu"/>
      <WhyUS   id="services"/>
      <OurSpace   id="portfolio"/>
      <Help    id="help"/>
      <GetInTouch   id="contact"/> 
    </div>
  )
}

export default Home