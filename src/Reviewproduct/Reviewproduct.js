import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import ReviewsApiService from '../services/reviews-api-service'
import { NavLink } from 'react-router-dom'


class Reviewproduct extends Component {
    state = { 
        error: null,
        rating: 1,
    };

    handleNewReviewSubmit = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { rating, review } = e.target
  
        ReviewsApiService.postNewReview({
            products_id: this.props.location.id,
            ratings: this.state.rating,
            reviews: review.value,
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

    render() {

        const { rating } = this.state
        console.log(this.props.location.id)
        return(
            <div className='review-window'>
            <form onSubmit={this.handleNewReviewSubmit} className='review-form'>  
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
        )
    }
}

export default Reviewproduct