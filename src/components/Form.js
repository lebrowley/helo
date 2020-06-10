import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { getUser } from '../redux/reducer';
import '../styling/Form.css';

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

    //handleChange

    //submit new post

    render() {
        return (
            <div>
                <h6>Form Component</h6>
                <form className='newPost-form'>
                    <label>New Post</label>
                    <img
                        className='post-pic-preview'
                        alt='preview'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLXHndtkDHe3W_vvoP94gL1PpxB6yulkT7nN9qQP-NmrdRCtHp&usqp=CAU' />
                    <input
                        placeholder='image url here' />
                    <textarea
                        className='post-textarea'
                        placeholder='write your thoughts here' />
                    <button className='post-button'>Post</button>
                </form>


            </div>

        )
    }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = { getUser }
export default connect(mapStateToProps, mapDispatchToProps)(Form);