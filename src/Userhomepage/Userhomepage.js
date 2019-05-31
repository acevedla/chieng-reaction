import React, { Component } from 'react'
import './Userhomepage.css'
import { NavLink } from 'react-router-dom'
import Popup from 'reactjs-popup'
import StarRatingComponent from 'react-star-rating-component';

class Userhomepage extends Component {
    constructor() {
        super();
     
        this.state = {
          rating: 1
        };
      }
     
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }

    render() {
        const { rating } = this.state;

        return(
            <div>
                <header>
                    <nav>
                    <NavLink to='/homepage'>Log Out</NavLink>
                    </nav>
                </header>
                <ul>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
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
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/review'><button>Submit new review</button></NavLink>
                </li>
            </ul>
            <footer>Social Media Links</footer>
            </div>
        )
    }
}

export default Userhomepage;
