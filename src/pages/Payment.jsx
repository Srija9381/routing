import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Payment = () => {
  return (
    <div>
        <Outlet/>
      <Link to={'/payment/basicpay'}>Basicpay</Link>
      <Link to={'/payment/premium'}>premiumpay</Link>
    </div>
  )
}

export default Payment
