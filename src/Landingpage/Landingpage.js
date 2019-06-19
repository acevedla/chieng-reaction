import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../Landingpage/Landingpage.css'

class Landingpage extends Component {
    render () {
        return(
            <main className='landing-page'>
                <h1>A Collection by Rebecca Chieng</h1>
                <p className='landing-text'>Welcome to my products page! This is a place where I can display and keep track of my creations. Here you 
                will find a collection of some of the crochet projects I've worked on over the years. You're welcome to 
                just browse the collection or to create a new account so that you can rate or review any of the items on 
                the page. For more information please click the links below:
                </p>
                <p className='landing-text'>[Insert social meadia link and or etsy link]</p>
                <NavLink to='/generalhomepage'><button>Continue as Guest</button></NavLink>
                <NavLink to='/registerform'><button>Sign Up</button></NavLink>
                <NavLink to='/login'><button>Sign In</button></NavLink>
            </main>
        )
    }
}

export default Landingpage;