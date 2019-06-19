import React, { Component } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'

class Login extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
      }
    
      state = { error: null }
    
    handleSubmitJwtAuth = ev => {
      ev.preventDefault()
      this.setState({ error: null })
      const { username, password } = ev.target
    
      AuthApiService.postLogin({
        username: username.value,
        password: password.value,
      })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
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
                <label>
                    Username
                </label>
                <input name='username' type='text' placeholder='Please enter a username'></input>
                <label>
                    Password
                </label>
                <input name='password' type='password' placeholder='Please enter a password'></input>
                <NavLink to='/userhomepage'><button type='submit'>Login</button></NavLink>
                </form>
            </div>
        )
    }
}

export default Login;