import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Header from './components/Header'
import PageNotfound from './pages/PageNotfound'
import Payment from './pages/Payment'
import BasicPay from './pages/BasicPay'
import Premium from './pages/Premium'
import UserDetails from './pages/userDetails'




const App = () => {
  return (
    <div>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* dynamic routing */}
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/:userId' element={<UserDetails/>}/>
        {/* nested routing */}
        <Route path='/payment'element={<Payment/>}>
        {/* default page */}
        <Route index element={<BasicPay/>}/>
        {/* nested route by clicking or path navigation  */}
        <Route path='basicpay' element={<BasicPay/>}/>
        <Route path='premium' element={<Premium/>}/>

        </Route>



        <Route path='*' element={<PageNotfound/>}/>
      </Routes>
     
      
    </div>
  )
}

export default App
