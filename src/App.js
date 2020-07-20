import React,{ Component } from 'react';
import Login from './components/pages/login';
import Dashboard from './components/pages/dashboard/dashboard';
import Error404 from './components/pages/404/404';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
         
          
          <Switch>
          <Route
              exact
              path="/"
              component={Login} />
            <Route
              exact
              path="/login"
              component={Login} />
            <Route
              exact
              path="/dashboard"
              component={Dashboard} />
            <Route
             component={Error404} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App; 


