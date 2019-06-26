import React, { Component } from 'react'
import './Newproduct.css'
import ProductsApiService from '../services/products-api-service'

class Newproduct extends Component {
    state = { error: null }

    handleNewProductSubmit = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { title, description, images } = e.target

        ProductsApiService.postNewProduct({
            title: title.value,
            description: description.value,
            images: images.value,
        })
        .then(res => {
            title.value = ''
            description.value = ''
            images.value = ''
            this.props.history.push('/adminhomepage')
        })
        .catch(res => {
            this.setState({ error: res.errro })
        })
    } 

    render () {
        return(
            <div>
                <form className='register-form'
                onSubmit={this.handleNewProductSubmit}>
                <div className='title'>
                <label>
                Title
                </label>
                <input id='title' type="text"></input>
                </div>
                <div className='description'>
                <label>
                    Description
                </label>
                <input id='description' type="text"></input>
                </div>
                <div className='images'>
                <label>
                    Image
                </label>
                <input id='images' type="text"></input>
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Newproduct;