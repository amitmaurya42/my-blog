import actionTypes from '../Actions/ActionTypes';

const initialState = {
    isAuthentcated:true
}


const authReducers = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {...state,isAuthentcated:true}
        case actionTypes.LOGIN_FAILED:
            return {...state,isAuthentcated:false}
        default:
            return {...state}
    }
  }
export default authReducers;