import React from 'react';
import Home from './components/home'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path='/home' component={Home}></Route>
      </Switch> */}
      <Home></Home>
    </div>
  );
}

export default App;
