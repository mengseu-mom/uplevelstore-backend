import React from 'react'
import {Outlet} from "react-router-dom";
import Narvbar from '../Narvbar'
import Footer from '../Footer';

const RootLayout = () => {
  return (
    <div>
      <div>
        <Narvbar/>
      </div>
      <div>
        <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default RootLayout
