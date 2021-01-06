import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

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
                        <form role="form" action="" method="post" className="login-form">
                            <div className="form-group">
                                <label className="sr-only">Username</label>
                                <input type="text" name="form-username" placeholder="Username..." className="form-username form-control" id="form-username" />
                            </div>
                            <div className="form-group">
                                <label className="sr-only">Password</label>
                                <input type="password" name="form-password" placeholder="Password..." className="form-password form-control" id="form-password" />
                            </div>
                            <button type="submit" className="btn">Sign in!</button>
                        </form>
                    </div>
                </div>
            
                
            </div>
        )
    }
}
const mapPropsToState = (state)=>{
    return {
        isAuthentcated: state.auth.isAuthentcated
    }
}

export default connect(mapPropsToState,null)(Login);