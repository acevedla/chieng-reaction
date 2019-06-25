import React, { Component } from 'react'
import './Userhomepage.css'
import { NavLink } from 'react-router-dom'
import Popup from 'reactjs-popup'
import StarRatingComponent from 'react-star-rating-component'
import config from '../config'
import TokenService from '../services/token-service'

class Userhomepage extends Component {
    constructor() {
        super();
     
        this.state = {
          rating: 1,
          products: [],
        };
      }
     
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
      }

    componentDidMount () {
        fetch(`${config.API_ENDPOINT}/products/userhomepage`, {
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
        const { rating } = this.state;
        console.log(this.state.products)
        return(
            <div>
                <header>
                    <nav>
                    <NavLink onClick={this.handleLogoutClick} to='/generalhomepage'>Log Out</NavLink>
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
                    <Popup trigger={<button>Submit new review</button>} modal>
                    <div className='review-popup'>
                    <StarRatingComponent>
                        name="rate1" 
                        starCount={10}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                    </StarRatingComponent>
                    <form className='review-form'>
                    <label>
                        Leave review below!
                    </label>
                        <textarea></textarea>
                        <button type="submit">Submit</button>
                        <button type="button">Cancel</button> 
                    </form>
                    </div>
                    </Popup>
                </li>)}
            </ul>
            <footer>Social Media Links</footer>
            </div>
        )
    }
}

export default Userhomepage;
