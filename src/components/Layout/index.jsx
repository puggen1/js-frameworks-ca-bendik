import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Modal from '../Modal'
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <Modal/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout