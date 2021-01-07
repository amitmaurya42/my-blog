import actionTypes from '../Actions/ActionTypes';

const initialState = {
    isAuthentcated:false,
    profileData:{}
}


const authReducers = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            console.log('action.payload',action.payload)
            return {...state,isAuthentcated:true,profileData:action.payload}
        case actionTypes.LOGIN_FAILED:
            return {...state,isAuthentcated:false}
        default:
            return {...state}
    }
  }
export default authReducers;