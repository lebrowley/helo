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

    getPosts() {
        //axios.get('/api/post/:userid')
        //res.data contains {title: '', author:'', authorPic:''}
    }

    //reset search

    render() {
        return (
            <div className='dashboard-component'>
                
                <div className='filter-container'>
                    <div className='search-box'>
                        <input className='search-bar' placeholder='search by title...' />
                        <img className='search-img' alt='magnify-icon' src={searchIcon} />
                        <button className='reset-btn'>Reset</button>
                    </div>

                    <div className='check-box'></div>
                </div>

                <div className="posts-container">
                    <div className='post-content-box'>
                        {/*each one of the post content boxes is a link containing all of the stuff in the box */}
                        <h3>Title</h3>

                        <div className='author-box'>
                            <p>by "author"</p>
                            <img id='profile-pic' alt='author-pic' src='https://robohash.org/gorilla' />
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps = { getUser }
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


var searchIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAeJJREFUSA2tlM0rBGEcx3dWEREp4oBVrvsXLJEoTsR/QDk6ydt1E2ccuIniKGeEi4MLbY6SAzaRUt5C1uer9pkZM7PM2m99muf5vT0zz/yeJxLxUSaTKYch2IJzeIF7SMECdPikeUzWTwuJI9iSUA0HcAhpKIVm6IEWkG/UsqwUz9yiaAmswScsQ31QBr4uOIEnGAyKM3aCVFjB/caYY0CcXmYVPqA7MBTnCOiN/1Q4W4h4C/Rf9D9qs3bzxKifdwNLxhhiQF4V3MGiJw2juuIN6jzOPxrInYRnKHOlYNBnbbuMISfkx0Dqc6ZGmcRB7Za3aMcLkq9BtYxUXC2nPv6vVMPVvir+Ajog/5VqvDqLqPgVxJzGsGP2uoicBlAtIxXfh15jyW+QIK0CdCXYYtV2kDpta7gRuRtwBpYnE+MeHEOxx/mLgZxW0Oke9g3FEYdHWAHv6r5ZkQixTZCGXdAW+wvnALzDJlT6R9lWYhKgwtKM7QkYEaSrVJfQLYxDozOUeRTaYB20FTuQBGnKGes7JqgG5kHXr3QJR3AKDyDp5+lO+t4KnhMguRYI3F8CdSh0T+tI6+TpgKiP1W7HHPkMTyPiJ5jMwTS+WeMo1EALgOT6gkLVVwdlF9CXFF4sMAapL60vtT4ftHlFAAAAAElFTkSuQmCC'