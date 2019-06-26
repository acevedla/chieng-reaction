import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Generalhomepage.css'

class Generalhomepage extends Component {
    render () {
        return (
            <div>
                <header>
                    <nav>
                    <NavLink to='/registerform'>Sign up</NavLink>
                    <NavLink to='/login'>Log In</NavLink>
                    </nav>
                </header>
                <ul>
                {this.props.products.map((products) =>
                    <li key={products.id}>
                        {products.title}
                        {products.description}
                        <img src={`http://localhost:8000/images/${products.images}`} alt='Not found'></img>
                    </li>)}
            </ul>
            <footer>Social Media NavLinks</footer>
            </div>
        )
    }
}

export default Generalhomepage;