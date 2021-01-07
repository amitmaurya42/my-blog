import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { loginHandler } from "../Actions/AuthAction";

class Login extends React.Component{
    render(){
        return(
            <div className="col-sm-8">     
                <div className="form-box">
                    <div className="form-top">
                        <div className="form-top-left">
                            <h3>Login to our site</h3>
                            <p>Enter username and password to log on:</p>
                            <p>or</p>
                            <Link to='/sign-up'>Create Account</Link>
                        </div>
                        <div className="form-top-right">
                            <i className="fa fa-key"></i>
                        </div>
                    </div>
                    <div className="form-bottom">
                        <form role="form" method="post" className="login-form">
                            <div className="form-group">
                                <label className="sr-only">Username</label>
                                <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username" />
                            </div>
                            <div className="form-group">
                                <label className="sr-only">Password</label>
                                <input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password" />
                            </div>
                            <button type="button" className="btn" onClick={()=>this.props.loginHandler('amitmaurya42@gmail.com','Chetu@123')}>Sign in!</button>
                        </form>
                    </div>
                </div>
            
                
            </div>
        )
    }
}
const mapPropsToState = (state)=>{
    return {
        isAuthentcated: state.auth.isAuthentcated,
        profileData:state.auth.profileData
    }
}
const mapPropsToDispatch = (dispatch)=>{
    return {
        loginHandler:(username,password)=> dispatch(loginHandler(username,password))
    }
}
export default connect(mapPropsToState,mapPropsToDispatch)(Login);