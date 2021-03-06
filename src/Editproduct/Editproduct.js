import React, { Component } from 'react'
import './Editproduct.css'
import ProductsApiService from '../services/products-api-service'

class Editproduct extends Component {
    state = { error: null }

    handleEditProductSubmit = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { title, description, images } = e.target

        ProductsApiService.editProduct({
            id: this.props.location.id,
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
        console.log(this.props)
        return(
            <div>
                <form className='register-form'
                onSubmit={this.handleEditProductSubmit}>
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

export default Editproduct;