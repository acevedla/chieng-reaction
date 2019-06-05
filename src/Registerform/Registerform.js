import React, { Component } from 'react'
import './Registerform.css'
import { NavLink } from 'react-router-dom'

class Registerform extends Component {
    render () {
        return(
            <div>
                <form className='register-form'>
                <label>
                Email
                </label>
                <input type="text" placeholder="Please enter a valid email address"></input>
                <label>
                    Username
                </label>
                <input type="text" placeholder="Please enter a username"></input>
                <label>
                    Password
                </label>
                <input type="password" placeholder="Please enter a password"></input>
                <label>
                    Confirm Password
                </label>
                <input type="password" placeholder="Please confirm your password"></input>
                <NavLink to='/userhomepage'><button type="submit">Submit</button></NavLink>
                </form>
            </div>
        )
    }
}

export default Registerform;