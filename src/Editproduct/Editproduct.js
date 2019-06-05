import React, { Component } from 'react'
import './Editproduct.css'
import { NavLink } from 'react-router-dom'

class Editproduct extends Component {
    render () {
        return(
            <div>
                <form className='register-form'>
                <label>
                Title
                </label>
                <input type="text"></input>
                <label>
                    Description
                </label>
                <input type="text"></input>
                <label>
                    Image path
                </label>
                <input type="password"></input>
                <NavLink to='/adminhomepage'><button type="submit">Submit</button></NavLink>
                </form>
            </div>
        )
    }
}

export default Editproduct;