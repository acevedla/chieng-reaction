import React, { Component } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'

class Login extends Component {
      state = { error: null }
    
    handleSubmitJwtAuth = ev => {
      ev.preventDefault()
      this.setState({ error: null })
      const { username, password } = ev.target
      console.log(ev.target.password.value)
    
      AuthApiService.postLogin({
        username: username.value,
        password: password.value,
      })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    }
    render() {
        return(
            <div>
                <form className='login-form'
                onSubmit={this.handleSubmitJwtAuth}>
                <div className='username'>
                <label htmlFor='LoginForm__username'>
                    Username
                </label>
                <input name='username' id='LoginForm__username' type='text' placeholder='Please enter a username'></input>
                </div>
                <div className='password'>
                <label htmlFor='LoginForm__password'>
                    Password
                </label>
                <input name='password' id='LoginForm__password' type='password' placeholder='Please enter a password'></input>
                </div>
                <NavLink to='/userhomepage'><button type='submit'>Login</button></NavLink>
                </form>
            </div>
        )
    }
}

export default Login;