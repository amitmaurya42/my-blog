import axios from 'axios';
import ActionTypes from '../Actions/ActionTypes';

export const loginHandler = (email, password)=> {
    console.log('user---',email,password)
    const loginData = {email:email,password:password,"returnSecureToken":true}
    return dispatch => {
        axios.post(proceess.env.BASE_API_URL+`accounts:signInWithPassword?key=${proceess.env.API_KEY}`,loginData).then((response)=>{
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

