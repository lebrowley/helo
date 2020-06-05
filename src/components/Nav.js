import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {logoutUser} from '../redux/reducer';
import { Link } from 'react-router-dom';
import '../styling/Nav.css';

function Nav(props) {
    console.log(`here are nav props ${props}`)
    const logout = () => {
        axios.delete('/api/auth/logout')
                .then(() => {
                    props.logoutUser()  //on logout button click, reduxState is changing (nav bar disappears)
                    props.history.push('/') //but something is going wrong here because the .catch is firing and it is not redirecting to Auth view
                }) 
                .catch(err => console.log('could not logout'))
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
                <button><Link to='/dashboard'>Home</Link></button>
                <button><Link to='/form'>Post</Link></button>
                <button onClick={() => logout()}>Logout</button> {/*from App*/}
            </div>

        </div>
    );
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = {logoutUser}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);