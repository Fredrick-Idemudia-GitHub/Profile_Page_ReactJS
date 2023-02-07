import React, { useContext } from "react";
import { LoginContext } from "./LoginContext/LonginContext";
import ReactSwitch from "react-switch";


export default function Profile() {
    const {username,email,changeColour,colour,balance} = useContext(LoginContext)

    return(
        <div className="profile-page" id={colour}>
            <div className="welcome-text">
                <h1>Welcome {username}</h1>
            </div>
            <table className="table-tag">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr className="table-row">
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>${balance}</td>
                        </tr>
                    </tbody>
                    
            </table>
            
            <label className="label-mode">{colour === "dark" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={changeColour} checked={colour==="dark"}/>
        </div>
    )
}