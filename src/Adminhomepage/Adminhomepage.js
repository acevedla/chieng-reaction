import React, { Component } from 'react'
import './Adminhomepage.css'
import { NavLink } from 'react-router-dom'
import TokenService from '../services/token-service'
import config from '../config'

function deleteProductsRequest(id, callback) {
  console.log(id)
  fetch(`${config.API_ENDPOINT}/products/adminhomepage`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        id: id,
      }),
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
                 <NavLink to={{
                   pathname:'/editproduct',
                    id: products.id
                 }}><button type='button'>edit</button></NavLink> 
                 <button type='button' onClick={() => {
                             deleteProductsRequest(products.id, this.props.deleteProduct(products.id))}}>Delete</button>
              </li>)}
          </ul>
          <footer>Social Media Links</footer>
          </div>
      )
  }
}

export default Adminhomepage;