import React from 'react';
import Loginstyles from "./loginstyles/login.css";
export default function Login(props) {
    const errorMessage = {
        "None": "",
        "bad login": "Username and or password are incorrect",
        "fetch error": "We can not retrieve you account at this time. Try again later."
    }


    return (
        <div className="login-wrap">
            <form onSubmit={props.handleLogin}>
                <input
                    type="text"
                    name="usernameInput"
                    placeholder="Username"
                    value={props.usernameInput}
                    onChange={props.handleChange} required/>
                <input
                    type="password"
                    name="passwordInput"
                    placeholder="Password"
                    value={props.passwordInput}
                    onChange={props.handleChange} required/>
                    <p className="error" >{errorMessage[props.errorMessage]}</p>
                <button>Login</button>
                    <p onClick={props.handleClick}>Sign up</p>
            </form>
        </div>    
    )
}