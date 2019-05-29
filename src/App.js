import React, { Component }from 'react'
import { Route } from 'react-router-dom'
import Registerform from './Registerform/Registerform'
import Generalhomepage from './Generalhomepage/Generalhomepage'
import Login from './Login/Login'
import Userhomepage from './Userhomepage/Userhomepage'

class App extends Component {
  render () {

  
  return (
    <main className='App'>
      <Route path='/register' component= {Registerform} />
      <Route path='/homepage' component={Generalhomepage} />
      <Route path='/login' component={Login} />
      <Route path='/userhomepage' component={Userhomepage} />
    </main>
  );
  }
}


export default App;
