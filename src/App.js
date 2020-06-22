import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/contacts'><Contacts /></Route>
          <Route path='/login'><Login /></Route>
          <Redirect from='/' to='/login'/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
