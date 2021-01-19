import axios from 'axios';
import ActionTypes from '../Actions/ActionTypes';

export const loginHandler = (email, password)=> {
    console.log('process.env.NODE_ENV',process.env.NODE_ENV)
    console.log('process.env.BASE_API_URL',process.env.REACT_APP_BASE_API_URL)
    const loginData = {email:email,password:password,"returnSecureToken":true}
    return dispatch => {
        axios.post(process.env.REACT_APP_BASE_API_URL+`accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,loginData).then((response)=>{
            dispatch(loginSuccess(response.data));
        }).catch((error)=>{
            console.log(error.response.data)
            dispatch(loginFailed(error.response.data));
        })
    };
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

