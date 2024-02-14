import React from 'react'
// import Navbar from '../components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Gfs from "../pages/Gfs"
import Manhattan from "../pages/Manhattan"
import Manisa from "../pages/Manisa"
import Roma from "../pages/Roma"
import Shoekapss from "../pages/Shoekapss"
import Urla from "../pages/Urla"
import Footer from '../components/Footer'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/gfs" element={<Gfs />} />
        <Route path = "/manhattan" element={<Manhattan />} />
        <Route path = "/manisa" element={<Manisa />} />
        <Route path = "/roma" element={<Roma />} />
        <Route path = "/shoekapss" element={<Shoekapss />} />
        <Route path = "/urla" element={<Urla />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter