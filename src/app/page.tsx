import Features from '@/sections/Features'
import Hero from '@/sections/Hero'
import Introduction from '@/sections/Introduction'
import LogoTicker from '@/sections/LogoTicker'
import Navbar from '@/sections/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <Introduction/>
      <Features/>
    </>
  )
}

export default page
