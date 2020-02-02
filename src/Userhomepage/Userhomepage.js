import React, { Component } from 'react'
import './Userhomepage.css'
import { NavLink } from 'react-router-dom'
import TokenService from '../services/token-service'

function combineReviews(products) {
    let mergedReviews = {};

    for(let i = 0; i < products.length; i++) {
        if (products[i].id in mergedReviews) {
            mergedReviews[products[i].id].push([products[i].reviews]);
        }
        else {
            {/* also want to add ratings here*/}
            mergedReviews[products[i].id] = [products[i].reviews]; 
        }
    }
    console.log(mergedReviews)
    return mergedReviews
}

class Userhomepage extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }
  
  render() {
      let { products } = this.props
      console.log(products)
      let newProducts = combineReviews(products)
      console.log(newProducts)
      return(
          <div>
              <header>
                  <nav>
                  <NavLink onClick={this.handleLogoutClick} to='/generalhomepage'>Log Out</NavLink>
                  </nav>
              </header>
              <ul>
              {products.map((products) =>
                  <li key={products.id}>
                  <img src={`http://localhost:8000/images/${products.images}`} alt='Not found'></img>
                  {products.title}
                  {products.description}
                  {products.ratings}
                  {products.reviews}
                  <NavLink to={{
                   pathname:'/review',
                    id: products.id
                 }}><button>Submit new review</button></NavLink>
              </li>)}
          </ul>
          <footer>Social Media Links</footer>
          </div>
        )
    }
}

export default Userhomepage;
