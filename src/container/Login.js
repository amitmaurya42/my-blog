import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { loginHandler } from "../Actions/AuthAction";
import ReactFormInputValidation from "react-form-input-validation";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields:{
                email:'',
                password:''
            },
            errors:{}
        }
        this.form =  new ReactFormInputValidation(this);
        this.form.useRules({
            email:'required|email',
            password:'required|digits_between:1,8'
        })
        this.form.onformsubmit = (fields)=>{
            this.props.loginHandler(fields.email,fields.password)
        }
    };
    
    
    render(){
        return(
            <React.Fragment>
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
                        <form method="post" onSubmit={this.form.handleSubmit} className="login-form">
                            <div className="form-group">
                                <label className="sr-only">Username</label>
                                <input type="text" name="email" placeholder="email..." className="form-username form-control" 
                                onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.email} 
                                />
                                <label className="error">
                                    {this.state.errors.email ? this.state.errors.email : ""}
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="sr-only">Password</label>
                                <input type="password" name="password" placeholder="Password..." className="form-password form-control" onBlur={this.form.handleBlurEvent}
                                onChange={this.form.handleChangeEvent}
                                value={this.state.fields.password}
                                />
                                <label className="error">
                                    {this.state.errors.password ? this.state.errors.password : ""}
                                </label>
                            </div>
                            <button type="submit" className="btn">Sign in!</button>
                        </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
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