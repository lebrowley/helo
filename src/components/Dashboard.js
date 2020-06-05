import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {getUser} from '../redux/reducer';
// import {getPosts} from '../redux/reducer';


class Dashboard extends Component {
    constructor() {
        super ()

        this.state= {
            posts: [], 
            search: '',
            userposts: true
        }
    }
  
    // componentDidMount() {
    //     this.props.getUser()
    //     .catch(() => {
    //         this.props.history.push('/')
    //     })
        //also need to call the getPosts function? to display all posts like in shelfie getInventory
    // }  

    render() {
        return <div>Dashboard Component</div>
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Dashboard);