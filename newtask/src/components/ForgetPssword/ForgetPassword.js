import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    const[vaildMail,setValidMail]=useState(true)
   

    const eventhandler=()=>{
        setValidMail(!vaildMail);
        console.log("Not a valid Mail")
    }
    
  return (
    <div><center>
        <form style={{textAlign:"center",paddingTop:"250px"}}>
            <input type='email' placeholder='Enter Your Email'></input><br></br>
        {/* <Link >  <button  onClick={eventhandler}>send otp</button></Link>   */}
        <button  onClick={eventhandler}>send otp</button>
            
          
        </form>
        </center>
    </div>
  )
}

export default ForgetPassword