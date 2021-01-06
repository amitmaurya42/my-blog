import axios from 'axios';
import ActionTypes from '../Actions/ActionTypes';

const login = (email, password)=> {
    return dispatch => {
        const data = {
            name='Amit'
        }
      setTimeout(() => {
        dispatch(loginSuccess(data));
      }, 1000);
    };
}

const loginSuccess = (data)=>{
    return {
        type:ActionTypes.LOGIN_SUCCESS,
        payload:data
    }
}
