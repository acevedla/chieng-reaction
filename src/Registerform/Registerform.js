import React, { Component } from 'react'
import './Registerform.css'
import { NavLink } from 'react-router-dom'
import AuthApiService from '../services/auth-api-service'

class Registerform extends Component {

      state = { error: null }
    
      handleSubmit = ev => {
        ev.preventDefault()
        const { username, password } = ev.target
        console.log(username.value)
        this.setState({ error: null })
          AuthApiService.postUser({
          username: username.value,
          password: password.value,
        })
        .then(user => { 
          username.value = ''
          password.value = ''
        })
        .catch(res => {
        this.setState({ error: res.error })
      })
      }

    render () {
        return(
            <div>
                <form className='register-form'
                onSubmit={this.handleSubmit}>
                <label>
                Email
                </label>
                <input name='email' type='text' placeholder='Please enter a valid email address'></input>
                <label htmlFor='RegistrationForm__username'>
                    Username
                </label>
                <input name='username'  id='RegistrationForm__username' type='text' placeholder='Please enter a username'></input>
                <label htmlFor='RegistrationForm__password'>
                    Password
                </label>
                <input name='password' id='RegistrationForm__password' type='password' placeholder='Please enter a password'></input>
                <label>
                    Confirm Password
                </label>
                <input type='password' placeholder='Please confirm your password'></input>
                <NavLink to='/login'><button type='submit'>Submit</button></NavLink>
                </form>
            </div>
        )
    }
}

export default Registerform;