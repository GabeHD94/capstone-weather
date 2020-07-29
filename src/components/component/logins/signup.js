import React from 'react'
import Signuptyles from "./loginstyles/signup.css";


export default function Signup(props) {
    const errorMessage = {
        "None": "",
        "username taken": "Username is already taken",
        "dont match": "Passwords do not match",
        "fetch error": "We can not retrieve you account at this time. Try again later."
    }


    return (


        <div className="signup-wrap">
            <form onSubmit={props.handleSignup}>
                <input
                    type="text"
                    name="usernameInput"
                    placeholder="Username"
                    value={props.usernameInput}
                    onChange={props.handleChange} required />
                <input
                    type="password"
                    name="passwordInput"
                    placeholder="Password"
                    value={props.passwordInput}
                    onChange={props.handleChange} required />
                <input
                    type="password"
                    name="passwordConfirmInput"
                    placeholder="Confirm Password"
                    value={props.passwordConfirmInput}
                    onChange={props.handleChange} required />
                <p className="error" >{errorMessage[props.errorMessage]}</p>
                {/* <input
                    type="location"
                    name="locationInput"
                    placeholder="What is your City"
                    value={props.locationInput}
                    onChange={props.handleChange} required />
                <p className="error" >{errorMessage[props.errorMessage]}</p> */}
                <p onClick={props.handleClick}>Log in</p>

                <button>Sign Up</button>
            </form>
        </div>


    )
}


