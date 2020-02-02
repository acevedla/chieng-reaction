import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import Registerform from './Registerform/Registerform'
import Generalhomepage from './Generalhomepage/Generalhomepage'
import Login from './Login/Login'
import Userhomepage from './Userhomepage/Userhomepage'
import Newproduct from './Newproduct/Newproduct'
import Adminhomepage from './Adminhomepage/Adminhomepage'
import Editproduct from './Editproduct/Editproduct'
import Landingpage from './Landingpage/Landingpage'
import Adminlogin from './Adminlogin/Adminlogin'
import config from './config'
import Reviewproduct from './Reviewproduct/Reviewproduct'

class App extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/products`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong')
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
  
  deleteProduct = productId => {
    const newProduct = this.state.products.filter(bm =>
      bm.id !== productId
    )
    this.setState({
      products: newProduct
    })
  }

  render () {
  return (
    <main className='App'>
      <Route exact path='/' component={Landingpage} />
      <Route path='/registerform' component= {Registerform} />
      <Route path='/generalhomepage' render={(routeProps) => 
        (<Generalhomepage {...routeProps} products={this.state.products}/>)} />
      <Route path='/login' component={Login} />
      <Route path='/adminlogin' component={Adminlogin} />
      <Route path='/userhomepage' render={(routeProps) => 
        (<Userhomepage {...routeProps} products={this.state.products} rating={this.state.rating}/>)} />
      <Route path='/newproduct' component={Newproduct} />
      <Route path='/adminhomepage' render={(routeProps) => 
        (<Adminhomepage {...routeProps} products={this.state.products} deleteProduct={this.deleteProduct}/>)} />
      <Route path='/editproduct' component={Editproduct} />
      <Route path='/review' component={Reviewproduct} />
    </main>
  );
  }
}


export default App;
