import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    render() {
        return(
            <div>
                <form>
                <label>
                    Username
                </label>
                <input type="text" placeholder="Please enter a username"></input>
                <label>
                    Password
                </label>
                <input type="password" placeholder="Please enter a password"></input>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;