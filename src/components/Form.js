import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { getUser } from '../redux/reducer';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createPost() {

    }

    render() {
        return (
            <div className='form-component'>
                <div className='form-container'>
                    <h2 className='form-title'>New Post</h2>

                    <div className='form-input-box'>
                        <p>Title:</p>
                        <input
                            className='title-input'
                            placeholder='title...' />

                        <div className='form-img-preview'></div>

                        <div className='form-input-box'>
                            <p>Image URL:</p>
                            <input
                                className='image-input'
                                placeholder='image url...' />
                        </div>

                        <div className='form-text-box'>
                            <p>Content:</p>
                            <textarea
                                className='content-input'
                                placeholder='what do you want to say?'>
                            </textarea>
                        </div>

                        <button className='post-btn'>Post</button>
                    </div>
                </div>


                {/* <form className='post-form'>
                    <label>New Post</label>
                    <img
                        className='post-pic-preview'
                        alt='preview'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLXHndtkDHe3W_vvoP94gL1PpxB6yulkT7nN9qQP-NmrdRCtHp&usqp=CAU' />
                    <input
                        placeholder='image url here'
                        onChange={e => this.handleChange(e)} />
                    <textarea
                        className='post-textarea'
                        placeholder='write your thoughts here' />
                    <button className='post-button' type='submit' onClick={this.createPost}>Post</button>
                </form> */}


            </div>

        )
    }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = { getUser }
export default connect(mapStateToProps, mapDispatchToProps)(Form);


