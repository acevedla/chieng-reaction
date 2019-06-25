import React, { Component } from 'react'
import './Adminhomepage.css'
import { NavLink } from 'react-router-dom'
import config from '../config'
import TokenService from '../services/token-service'

class Adminhomepage extends Component {
  state = {
      products: [],
  };

  handleLogoutClick = () => {
      TokenService.clearAuthToken()
    }
 
  componentDidMount () {
    fetch(`${config.API_ENDPOINT}/products/adminhomepage`, {
      headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
      })
      .then(response => {
        if(!response.ok) {
          throw new Error ('Something went wrong')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
          this.setState({ 
          products: data,
          });
        })
      .catch(err => {
        console.log('Error', err);
      });
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
                  {this.state.products.map((products) =>
                  <li key={products.id}>
                  <img src={`http://localhost:8000/images/${products.images}`} alt='Not found'></img>
                  {products.title}
                  {products.description}
                  {products.ratings}
                  {products.reviews}
                  <button type='button'>edit</button>
              </li>)}
          </ul>
          <footer>Social Media Links</footer>
          </div>
      )
  }
}

export default Adminhomepage;