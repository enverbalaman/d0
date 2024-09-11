import React from 'react'
import PageTitle from '../components/common/pageTitle'
import AboutFour from '../components/sections/abouts/aboutFour'
import ServicesThree from '../components/sections/services/servicesThree'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '../components/sections/abouts/aboutOne'
import AboutTwo from '../components/sections/abouts/aboutTwo'
import AboutThree from '../components/sections/abouts/aboutThree'
const About = () => {
  return (
    <>
      {/* <PageTitle link={"About"} pageName={"Hakkımızda"} /> */}
      <AboutThree/>
      {/* <ServicesThree/> */}
      <ScrollRestoration />
    </>
  )
}

export default About