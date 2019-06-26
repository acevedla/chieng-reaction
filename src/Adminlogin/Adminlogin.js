import React, { Component } from 'react'
import './Adminlogin.css'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'

class Adminlogin extends Component {
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
        this.props.history.push('/adminhomepage')
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
               <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Adminlogin;