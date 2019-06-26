import React, { Component } from 'react'
import './Userhomepage.css'
import { NavLink } from 'react-router-dom'
import Popup from 'reactjs-popup'
import StarRatingComponent from 'react-star-rating-component'
import TokenService from '../services/token-service'

class Userhomepage extends Component {
    onStarClick(nextValue, prevValue, name) {
      this.setState({
        rating: nextValue
      });
    }

    handleLogoutClick = () => {
      TokenService.clearAuthToken()
    }

    render() {
        const { rating } = this.props;
        return(
            <div>
                <header>
                    <nav>
                    <NavLink onClick={this.handleLogoutClick} to='/generalhomepage'>Log Out</NavLink>
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
