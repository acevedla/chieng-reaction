import React, { Component } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

class Login extends Component {
    render() {
        return(
            <div>
                <form className='login-form'>
                <label>
                    Username
                </label>
                <input type="text" placeholder="Please enter a username"></input>
                <label>
                    Password
                </label>
                <input type="password" placeholder="Please enter a password"></input>
                <NavLink to='/userhomepage'><button type="submit">Submit</button></NavLink>
                </form>
            </div>
        )
    }
}

export default Login;