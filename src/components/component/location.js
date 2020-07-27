import React, { Component } from 'react'
import Cookies from "js-cookie"
// import { response } from 'express'

export default class location extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.handleLogout = this.handleLogout .bind(this)

    }



handleLogout() {
   if (Cookies.remove("username")) {
    this.props.history.push("/");
    location.reload()
}
}

    render() {
        return (
            <div>
                <button onClick={this.handleLogout}
                >logout</button>


            </div>
        )
    }
}




