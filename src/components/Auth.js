import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../redux/reducer';

class Auth extends Component {
    constructor() {
        super()

        this.state = {
            user: {}
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault()
        const { username, password } = this.state

        axios.post('/api/auth/register', { username, password })
            .then(res => {
                this.props.loginUser(res.data)   //basically setting state, but the reduxState
                this.props.history.push('/dashboard') //because of this maybe don't need links in buttons below?? 
            })
            .catch(err => alert('Could not register')) //this alert is firing even though the data is saved to db and the page is redirected to dashboard 
    }

    login = (e) => {
        e.preventDefault()
        const { username, password } = this.state

        axios.post('/api/auth/login', { username, password })
            .then(res => {
                this.props.loginUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch(err => alert('Could not login'))
    }

    render() {
        return (
            <div className='background'>
                <div className='auth-box'>
                    <img /> {/*wink face icon*/}
                    <h1>Helo</h1>

                    <form className='auth-form'>
                        <input
                            type='text'
                            name='username'
                            label='username'
                            onChange={e => this.handleChange(e)} />
                        <input
                            type='text'
                            name='password'
                            label='password'
                            onChange={e => this.handleChange(e)} />

                        <button className='auth-buttons' type='submit' onClick={this.register}><Link to='/dashboard'>Register</Link></button>
                    </form>

                    <button className='auth-buttons' onClick={this.login}><Link to='/dashboard'>Login</Link></button>

                    
                </div>
            </div>
        )

    }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = {loginUser}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);