import actionTypes from '../Actions/ActionTypes';

const initialState = {
    isAuthentcated:false,
    profileData:{},
    isLoading:false,
    error:{}
}


const authReducers = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.START_API:
            return {...state,isLoading:true}
        case actionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.idToken)
            localStorage.setItem('userData',{displayName:action.payload.displayName,email:action.payload.displayName})
            return {...state,isAuthentcated:true,isLoading:false,profileData:{displayName:action.payload.displayName,email:action.payload.displayName}}
        case actionTypes.LOGIN_FAILED:
            localStorage.removeItem('token',action.payload.idToken)
            localStorage.setremoveItemItem('userData')
            return {...state,isAuthentcated:false,isLoading:false,error:action.payload}
        case actionTypes.SET_USER_PROFILE:
        console.log('SET_USER_PROFILE Payload',action.payload)
            return {...state,isAuthentcated:true,isLoading:false,profileData:{displayName:action.payload.users[0].displayName,email:action.payload.users[0].displayName}}
        case actionTypes.LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('userData')
            return {...state,isAuthentcated:false,isLoading:false,profileData:{}}
        default:
            return {...state}
    }
  }
export default authReducers;