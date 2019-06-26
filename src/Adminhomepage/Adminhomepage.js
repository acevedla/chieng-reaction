import React, { Component } from 'react'
import './Adminhomepage.css'
import { NavLink } from 'react-router-dom'
import TokenService from '../services/token-service'
import config from '../config'

function deleteProductRequest(id, callback) {
  fetch(`${config.API_ENDPOINT}/products/adminhomepage`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => {
      if (!response.ok) {
        return response.json()
          .then(error => {
            throw error
          })
      }
      return response.json()
    })
    .then(data => {
      callback(id)
    })
    .catch(err => {
      console.error(err)
    })
}

class Adminhomepage extends Component {
  handleLogoutClick = () => {
      TokenService.clearAuthToken()
    }

  render() {
      return(
          <div>
              <header>
                  <nav>
                  <NavLink onClick={this.handleLogoutClick} to='/generalhomepage'>Log Out</NavLink>
                  <NavLink to='/newproduct'>Add new product</NavLink>
                  </nav>
              </header>
              <ul>
                  {this.props.products.map((products) =>
                  <li key={products.id}>
                  <img src={`http://localhost:8000/images/${products.images}`} alt='Not found'></img>
                  {products.title}
                  {products.description}
                  {products.ratings}
                  {products.reviews}
                 <NavLink to='/editproduct'><button type='button'>edit</button></NavLink> 
                 <button type='button'>Delete</button>
              </li>)}
          </ul>
          <footer>Social Media Links</footer>
          </div>
      )
  }
}

export default Adminhomepage;