import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Nav(props) {
  return (
    <div className="sidenav">
      <Link to='/dashboard'>Home</Link>
      <Link to='/form'>Post</Link>
    </div>
  );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Nav);