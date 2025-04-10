import React from 'react'
import Hero from './Hero'
import JobSuccess from './JobSuccess'
import CompalyDetile from './CompalyDetile'
import Testimonial from './Testimonial'
import Project from './Project'
import Team from './Team'
import Testimonial2 from './Testimonial2'
import FAQ from './FAQ'
import Readmap from './Readmap'

const Home = () => {
  return (
    <div>
        <Hero/>
        <JobSuccess/>
        <CompalyDetile/>
        <Readmap/>
        <Testimonial/>
        <Project/>
        <Team/>
        <Testimonial2/>
        <FAQ/>
    </div>
  )
}

export default Home