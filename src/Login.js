import React from "react";
import { LoginContext } from "./LoginContext/LonginContext";
import { useContext } from "react";
import bg from "./images/bgpix.JPG";
import ReactSwitch from "react-switch";


export default function Login() {
    const {setuserName,setEmail,setProfile,colour,changeColour} = useContext(LoginContext)


    return(
        <div>
        <div 
        
        style={{  
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        
        >

            <div className="login-background" id={colour}> 
            
            <div className="login-container">
                <h1 className="h1-text">Login Page</h1>
                <input
                    className="input-button"
                    type="text"
                    placeholder="User Name"
                    onChange={(event) => {
                        setuserName(event.target.value)
                    }}
                />
                <input 
                    className="input-button"
                    type="email"
                    placeholder="Email"
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}

                />
                <button  className="button-login" onClick={() => {setProfile(true)}}>Login</button>
                <label className="label-mode">{colour === "dark" ? "Light Mode" : "Dark Mode"}</label><ReactSwitch onChange={changeColour} checked={colour==="dark"}/>

            </div>
            </div>
        </div>
        </div>
    )
}