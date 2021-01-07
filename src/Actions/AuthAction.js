import axios from 'axios';
import ActionTypes from '../Actions/ActionTypes';

export const loginHandler = (email, password)=> {
    console.log('user---',email,password)
    return dispatch => {
        const data = {
            name:'Amit'
        }
      setTimeout(() => {
        dispatch(loginSuccess(data));
      }, 2000);
    };
}

const loginSuccess = (data)=>{
    return {
        type:ActionTypes.LOGIN_SUCCESS,
        payload:data
    }
}
