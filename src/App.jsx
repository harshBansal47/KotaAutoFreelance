import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import CreatePassword from './login-signup/forgetPassword/CreatePassword';
import ForgotPassword from './login-signup/forgetPassword/ForgotPassword';
import Otp from './login-signup/forgetPassword/Otp';
import Login from './login-signup/login/Login';
import Register from './login-signup/register/Register';
import Esc1 from './onboarding/Esc1';
import Esc2 from "./onboarding/Esc2";
import Esc3 from "./onboarding/Esc3";
import Loading from "./onboarding/Loading";
import Welcome from "./onboarding/Welcome";
import Home from "./Components/Home"
const App = () => {
  const [load,setLoad] = useState(true);
  const [wel,setWel] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setLoad(false);
      setWel(true);
    },3000)
    setTimeout(()=>{
      setWel(false);
    },6000);
  },[])
  return (
    <div>
      {load && <Loading />}
      {wel && <Welcome />}
      <Routes>
        <Route path="/" element={<Esc1 />} />
        <Route path="/page2" element={<Esc2 />} />
        <Route path="/page3" element={<Esc3 />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path = "/register" element = {<Register/>} />
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/otp" element = {<Otp/>} />
        <Route path = "/createPass" element = {<CreatePassword/>}/>
        <Route path = "/home" element = {<Home/>}/>
      </Routes>
    </div>
  );
}
export default App;