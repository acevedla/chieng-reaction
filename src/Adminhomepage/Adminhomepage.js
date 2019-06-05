import React, { Component } from 'react'
import './Adminhomepage.css'
import { NavLink } from 'react-router-dom'
import Popup from 'reactjs-popup'
import StarRatingComponent from 'react-star-rating-component';

class Adminhomepage extends Component {
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
                    <NavLink to='/generalhomepage'>Log Out</NavLink>
                    <NavLink to='/newproduct'>Add new product</NavLink>
                    </nav>
                </header>
                <ul>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/editproduct'><button type='button'>edit</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/editproduct'><button type='button'>edit</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/editproduct'><button type='button'>edit</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/editproduct'><button type='button'>edit</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/editproduct'><button type='button'>edit</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/editproduct'><button type='button'>edit</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/editproduct'><button type='button'>edit</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/editproduct'><button type='button'>edit</button></NavLink>
                </li>
                <li>
                    <p>Insert picture here!</p>
                    <p>Rate</p>
                    <p>Review snippet</p>
                    <NavLink to='/editproduct'><button type='button'>edit</button></NavLink>
                </li>
            </ul>
            <footer>Social Media Links</footer>
            </div>
        )
    }
}

export default Adminhomepage;