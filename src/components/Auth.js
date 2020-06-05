import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../redux/reducer';
import '../styling/Auth.css'

class Auth extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
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
            .catch(err => alert('Could not register'))
    }

    login = (e) => {
        e.preventDefault()
        const { username, password } = this.state

        axios.post('/api/auth/login', { username, password })
            .then(res => {
                this.props.loginUser(res.data)
                this.props.history.push('/dashboard') //how to make it so the session doesn't end when the refresh button is clicked? 
            })
            .catch(err => alert('Could not login'))
    }

    render() {
        return (
            <div className='background'>
                <div className='auth-box'>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS838K5RwTbsF3wQSf9GArGQWHG9_j372xsMkAM9VnM8IX8aAEq&usqp=CAU' /> {/*wink face icon*/}
                    <h1>Helo</h1>

                    <form className='auth-form'>
                        <input
                            type='text'
                            name='username'
                            placeholder='username'
                            onChange={e => this.handleChange(e)} />
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            onChange={e => this.handleChange(e)} />

                        <div className='form-buttons'>
                            <button type='submit' onClick={this.register}><Link to='/dashboard'>Register</Link></button>

                            <button type='submit' onClick={this.login}><Link to='/dashboard'>Login</Link></button>
                        </div>

                    </form>

                </div>
            </div>
        )

    }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = { loginUser }
export default connect(mapStateToProps, mapDispatchToProps)(Auth);