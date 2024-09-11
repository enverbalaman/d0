import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/footer'
import Modal from '../components/common/modal'
import HeaderOne from '../components/common/headers/headerOne'

const LayoutTwo = () => {
  return (
    <>
      <Modal />
      <HeaderOne/>
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutTwo