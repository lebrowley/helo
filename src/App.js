import React from 'react';
import {connect} from 'react-redux';
import routes from './routes';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';

import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.isLoggedIn ? <Dashboard/> : <Auth/>}
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App);
