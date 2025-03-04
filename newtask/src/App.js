import React from 'react'
import Login from './components/Login/Login'
 import { Route,Routes } from 'react-router-dom'
import ForgetPassword from './components/ForgetPssword/ForgetPassword'
import CreateAccount from './components/CreateAccount/CreateAccount'
import SignIn from './components/SignIn/SignIn'


const App = () => {
  return (
    <div>
   
  
   
    <Routes>
    <Route path='/' element={<Login/>}/>
   <Route path='/ForgetPassword' element={<ForgetPassword />} />
   <Route path='/CreateAccount' element={<CreateAccount/>}/>
   <Route path='/SignIn' element={<SignIn/>}/>
   </Routes> 
   
  
    </div>
  )
}

export default App