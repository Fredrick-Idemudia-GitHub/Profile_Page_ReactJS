import React, { useState } from "react";
import Profile from "./Profile";
import Login from "./Login";
import { LoginContext } from "./LoginContext/LonginContext";
import "./index.css"



export default function App() {
  // Using function method
  // const changeColour = () => {
  //   setColour((state) => (state === "dark" ? "light" : "dark"))
  // }

  function changeColour() {
    setColour((state) => (state === "dark" ? "light" : "dark"))
  }
  const [username, setuserName] = useState("")
  const [profile, setProfile] = useState(false)
  const [email, setEmail] = useState("")
  const [balance, setBalance] = useState(35.00)
  const [colour,setColour] = useState("dark")
  return(
    <LoginContext.Provider value={
      {username,setuserName,email, balance,
        setEmail,profile,setProfile,
        changeColour,colour
      }}>
       <div>
        {profile ? <Profile /> : <Login />}
        {/* <Profile /> */}
      </div>
    </LoginContext.Provider>
  )
} 