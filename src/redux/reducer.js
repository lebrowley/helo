const initialState = {
    user: {},  
    //contains the values: username: '', profilePic: '', userId: a number from the req.session.user sent from server
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER'

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, user:action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}