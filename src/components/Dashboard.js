import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { getUser } from '../redux/reducer';
// import {getPosts} from '../redux/reducer';
// import Nav from './Nav';


class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }
    
   componentDidMount() {
       this.props.getUser()
   }

    //reset search

    render() {
        return (
            <div>
                <h6>Dashboard Component</h6>

                <div className="all-posts">

                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = { getUser }
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);