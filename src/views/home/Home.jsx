import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Carousel from '../../components/carousel/Carousel'

export default function Home() {
  const a=["1","2","3"]
  console.log();
  return (
    <div className=' '>
      <Carousel/>
      <Section1/>
      <Section2/>
      {/* <Section2/>
      <Section2/>
      <Section2/> */}
    </div>
  )
}
