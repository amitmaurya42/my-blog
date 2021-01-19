import axios from 'axios';
import ActionTypes from '../Actions/ActionTypes';

export const loginHandler = (email, password)=> {
    const loginData = {email:email,password:password,"returnSecureToken":true}
    return dispatch => {
        dispatch(apiStart())
        axios.post(process.env.REACT_APP_BASE_API_URL+`accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,loginData).then((response)=>{
            dispatch(loginSuccess(response.data));
        }).catch((error)=>{
            console.log(error.response.data)
            dispatch(loginFailed(error.response.data));
        })
    };
}
export const setProfileHandler = (token)=>{
    return dispatch => {
        dispatch(apiStart())
        let requestData = {idToken:token}
        axios.post(process.env.REACT_APP_BASE_API_URL+`accounts:lookup?key=${process.env.REACT_APP_API_KEY}`,requestData).then((response)=>{
            dispatch(setUserProfile(response.data));
        }).catch((error)=>{
            console.log(error.response.data)
            dispatch(loginFailed(error.response.data));
        })
    };
}
export const logoutHanler = ()=>{
    return {
        type:ActionTypes.LOGOUT,
        payload:{}
    }
}
const setUserProfile = (data)=>{
    return {
        type:ActionTypes.SET_USER_PROFILE,
        payload:data
    }
}
const apiStart = ()=>{
    return {
        type:ActionTypes.START_API,
        payload:{}
    }
}
const loginSuccess = (data)=>{
    return {
        type:ActionTypes.LOGIN_SUCCESS,
        payload:data
    }
}
const loginFailed = (data)=>{
    return {
        type:ActionTypes.LOGIN_FAILED,
        payload:data
    }
}

