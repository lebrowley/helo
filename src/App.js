import React from 'react';
import routes from './routes';
import { connect } from 'react-redux';

import Nav from './components/Nav';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.isLoggedIn ? <Nav /> : null}
      {routes}
    </div>
  );
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(App);
