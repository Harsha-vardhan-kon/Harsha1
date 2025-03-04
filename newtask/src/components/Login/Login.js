import React, { useState } from 'react'
 import { Link} from 'react-router-dom';



const Login = () => {
 const[valid,setValid]=useState(true);

 const eventhandler = (event) => {
  event.preventDefault();
  setValid(!valid); 
  console.log("Button clicked. Valid state is now:", !valid);
};
 
  return (
    <div>
        <header>
            <h1 style={{textAlign:"center"}}>LOGIN PAGE</h1></header>
            <form style={{paddingTop: "50px",border: "1px solid black",width: "300px",height: "200px",margin: "150px auto",backgroundColor: "#f9f9f9",borderRadius: "8px",boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
  }}><center>
                <input type='text' placeholder='Email or PhoneNumber'></input><br></br>
                <input type='password' placeholder='Password'></input><br></br>
              <Link to="/ForgetPassword">ForgetPassword</Link><br></br>

             <Link to="/SignIn"><button onClick={eventhandler}>SignIn</button><br></br></Link>  
                
              <Link to="/CreateAccount" ><button style={{color:"purple"}}>CreateAccount</button></Link> 
                
                </center>  
            </form>
        
    </div>
  )
}

export default Login