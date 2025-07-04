import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favorite from './pages/Favorite'
import { Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShow from './pages/admin/AddShow'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'
// import HomeSection from './components/HomeSection'
function App() {
  

  //if we are in /admin route means navbar won't display
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
     { !isAdminRoute &&  <Navbar />}
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/movies/:id' element={<MovieDetails/>} />
      <Route path='/movies/:id/:date' element={<SeatLayout/>} />
      <Route path='/my-bookings' element={<MyBooking/>} />
      <Route path='/favorite' element={<Favorite/>} />

      <Route path='/admin/*' element={<Layout/>} >

      <Route index element={<Dashboard/>} />
      <Route path='add-shows' element={<AddShow/>} />
      <Route path='list-shows' element={<ListShows/>} />
      <Route path='list-bookings' element={<ListBookings/>} />
      </Route>
     </Routes>


  { !isAdminRoute &&  <Footer/>}
     
    </>
  )
}

export default App
