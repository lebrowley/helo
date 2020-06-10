import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../redux/reducer';


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
                this.props.history.push('/dashboard') 
            })
            .catch(err => alert('Could not register'))
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
                <div className='auth-box'>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS838K5RwTbsF3wQSf9GArGQWHG9_j372xsMkAM9VnM8IX8aAEq&usqp=CAU'
                        alt='helo-icon' /> 
                    
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
                            <button type='submit' onClick={this.register}>Register</button>

                            <button type='submit' onClick={this.login}>Login</button>
                        </div>

                    </form>

                </div>
        )

    }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = { loginUser }
export default connect(mapStateToProps, mapDispatchToProps)(Auth);