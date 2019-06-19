import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Generalhomepage.css'
import config from '../config'


class Generalhomepage extends Component {
    state = {
        products: [],
    };

    componentDidMount () {
        fetch(`${config.API_ENDPOINT}/products`)
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



    render () {
        console.log('hello', this.state.products)
        return (
            <div>
                <header>
                    <nav>
                    <NavLink to='/registerform'>Sign up</NavLink>
                    <NavLink to='/login'>Log In</NavLink>
                    </nav>
                </header>
                <ul>
                {this.state.products.map((products) =>
                    <li key={products.id}>
                        {products.title}
                        {products.description}
                        <img src={products.images} alt='Not found'></img>
                    </li>)}
            </ul>
            <footer>Social Media NavLinks</footer>
            </div>
        )
    }
}

export default Generalhomepage;