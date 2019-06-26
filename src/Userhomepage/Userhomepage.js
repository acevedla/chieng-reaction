import React, { Component } from 'react'
import './Userhomepage.css'
import { NavLink } from 'react-router-dom'
import Popup from 'reactjs-popup'
import StarRatingComponent from 'react-star-rating-component'
import TokenService from '../services/token-service'
import ReviewsApiService from '../services/reviews-api-service'

class Userhomepage extends Component {
  state = { error: null }

  handleNewReviewSubmit = e => {
      e.preventDefault()
      this.setState({ error: null })
      const { rating, review } = e.target

      ReviewsApiService.postNewReview({
          rating: this.props.rating,
          review: review.value,
      })
      .then(res => {
          rating.value = ''
          review.value = ''
          this.props.history.push('/userhomepage')
      })
      .catch(res => {
          this.setState({ error: res.errro })
      })
  } 

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
                  <form onSubmit={this.handleNewReviewSubmit}className='review-form'>  
                  <StarRatingComponent
                      name='Rate'
                      starCount={5}
                      value={rating}
                      onStarClick={this.onStarClick.bind(this)}
                  />
                  <div className='review'>
                    <label>
                        Leave review below!
                    </label>
                    <textarea id='review' required></textarea>
                  </div>
                      <button type="submit">Submit</button>
                      <NavLink to='/userhomepage'><button type="button">Cancel</button></NavLink> 
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
