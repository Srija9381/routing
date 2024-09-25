import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../utility/data'

import { useNavigate } from 'react-router-dom'

const UserDetails = () => {
    let userdata=useParams()
    console.log(userdata)

    let userInfo=Data.find(ele=>ele.id==userdata.userId)
    console.log(userInfo)

    let navigate=useNavigate()  // hook to navigate back to the pages
    let navigateback=()=>{    // function used to provide functionality when btn i clicked
        navigate('/services')
    }
  return (
    <div>
      
        <h1>User:{userInfo.name}</h1>
        <h1>User:{userInfo.email}</h1>
        <h1>User:{userInfo.username}</h1>
        <h1>User:{userInfo.phone}</h1>
        <button onClick={()=>navigateback()}>Back</button>
        {/* <h1>User:{userInfo.company}</h1>
        <h1>User:{userInfo.phone}</h1> */}
        {/* <h1>User:{userInfo.address.city}</h1>
        <h1>User:{userInfo.address.street}</h1>
        
       */}
    </div>
  )
}

export default UserDetails
