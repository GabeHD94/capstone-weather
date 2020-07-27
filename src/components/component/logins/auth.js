import React, { Component } from 'react'
import Cookies from "js-cookie"
import Signup from "./signup";
import Login from "./login";
import Weather from "../weather"

export default class Auth extends Component {
    constructor(props) {
        super(props)

        if (Cookies.get("username")){
            props.history.push("/landing")
        }

        this.state = {
            authSwitch: "Login",
            usernameInput: "",
            passwordInput: "",
            passwordConfirmInput: "",
            locationInput: "",
            errorMessage: "None"
              
        }
        this.handleClick = this.handleClick .bind(this)
        this.handleChange = this.handleChange .bind(this)
        this.handleSignup = this.handleSignup .bind(this)
        this.handleLogin = this.handleLogin .bind(this)

      
    }



    defaultloc(props) {
        const api = {
            key: "dbe4e6036b179b241f68b078f58c0c5a",
            base: "https://api.openweathermap.org/data/2.5/"
          }
        if (Cookies.get("username")) {
          fetch(`${api.base}weather?q=${(Cookies.get("location"))}&units=imperial&APPID=${api.key}`)
            .then(response => response.json())
            .then(result => {
            //   setWeather(result);
            //   setQuery('');
              console.log(result)
            })
          }
      }
    

    handleLogin(event) {
        event.preventDefault()
        fetch("https://gfs-weather-api.herokuapp.com/user/verification", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                   username: this.state.usernameInput,
                   password: this.state.passwordInput
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)

            if (data === "User Not Verified") {
                this.setState({ errorMessage: "bad login" })
            }
            else {
                this.setState({ errorMessage: "None" })
                Cookies.set("username", this.state.usernameInput)
                this.props.history.push("/landing")
                Cookies.get("location", this.state.location)
                // console.log(Cookies.get("location"))
                this.props.history.push("/landing")
                this.defaultloc()
            }
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage: "fetch error"})
        })

    
    }

    handleClick() {
        this.setState({
            authSwitch: this.state.authSwitch === "Login" ? "signup": "Login",
            errorMessage: "None",
            usernameInput: "",
            passwordInput: ""
        })

    }
    handleChange(event) {
        this.setState({ 
            [event.target.name]: event.target.value, 
            errorMessage : "None"
        })
    }
    handleSignup() {
        event.preventDefault()

        if (this.state.passwordInput !== this.state.passwordConfirmInput) {
            this.setState({ errorMessage: "dont match" })
        }
        else {
            fetch("https://gfs-weather-api.herokuapp.com/user/create", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({
                    username: this.state.usernameInput,
                    password: this.state.passwordInput,
                    location: this.state.locationInput
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data === "Username Taken"){
                    this.setState({ errorMessage: "username taken" })
                }
                else {
                    this.setState({ errorMessage: "None" })
                    Cookies.set("username", this.state.usernameInput)
                    console.log(Cookies.get("username"))
                    this.props.history.push("/landing")
                    Cookies.set("location", this.state.locationInput)
                    console.log(Cookies.get("location"))
                    this.props.history.push("/landing")
                    this.defaultloc()

                }
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMessage: "fetch error"}) 
            
            })

        }
    }



    render() {
        return (
            <div className="auth-wrapper">

                {this.state.authSwitch === "Login" ? 
                <Login
                handleChange={this.handleChange} 
                handleLogin={this.handleLogin}
                usernameInput={this.state.usernameInput}
                passwordInput={this.state.passwordInput} 
                errorMessage={this.state.errorMessage}
                handleClick={this.handleClick}

                
                /> : 
                <Signup 
                handleChange={this.handleChange} 
                handleSignup={this.handleSignup}
                usernameInput={this.state.usernameInput}
                locationInput={this.state.locationInput}
                passwordInput={this.state.passwordInput}
                passwordConfirmInput={this.state.passwordConfirmInput}
                errorMessage={this.state.errorMessage}
                handleClick={this.handleClick}

                />}
                
            </div>
        )
    }
}
