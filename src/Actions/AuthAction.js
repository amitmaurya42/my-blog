import axios from 'axios';
import ActionTypes from '../Actions/ActionTypes';

export const loginHandler = (email, password)=> {
    console.log('user---',email,password)
    console.log('process.env.NODE_ENV',process.env.NODE_ENV)
    const loginData = {email:email,password:password,"returnSecureToken":true}
    return dispatch => {
        axios.post(process.env.BASE_API_URL+`accounts:signInWithPassword?key=${process.env.API_KEY}`,loginData).then((response)=>{
            dispatch(loginSuccess(response.data));
        }).catch((error)=>{
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

