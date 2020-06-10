import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {logoutUser} from '../redux/reducer';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import '../styling/Nav.css';

function Nav(props) {
    console.log('nav props', props)
    const logout = () => {
        axios.delete('/api/auth/logout')
                .then(() => {
                    props.logoutUser()  
                    props.history.push('/') 
                }) 
                .catch(err => console.log(err))
      }
    return (
        <div className="sidenav">
            <div className='profile-info'>
                <img
                    alt='profile-pic'
                    src={props.user.profilePic}
                    className='profile-pic'
                />

                <h2>{props.user.username}</h2>
            </div>

            <div className='nav-links'>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/form'><button>Post</button></Link>

                <button onClick={() => logout()}>Logout</button> 
            </div>

        </div>
    );
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = {logoutUser}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));