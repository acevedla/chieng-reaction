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

class App extends Component {
  render () {
  return (
    <main className='App'>
      <Route  exact path='/' component={Landingpage} />
      <Route path='/registerform' component= {Registerform} />
      <Route path='/generalhomepage' component={Generalhomepage} />
      <Route path='/login' component={Login} />
      <Route path='/adminlogin' component={Adminlogin} />
      <Route path='/userhomepage' component={Userhomepage} />
      <Route path='/newproduct' component={Newproduct} />
      <Route path='/adminhomepage' component={Adminhomepage} />
      <Route path='/editproduct' component={Editproduct} />
    </main>
  );
  }
}


export default App;
