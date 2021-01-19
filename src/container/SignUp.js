import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import { setProfileHandler } from "../Actions/AuthAction";

class SignUp extends React.Component{
    componentDidMount(){
        let token = localStorage.getItem('token')
        if(token){
            this.props.setProfileHandler(token)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.isAuthentcated){
            this.props.history.replace('/')
        }
    }
    render(){
        return(
            <div className="col-sm-8">                
                <div className="form-box">
                    <div className="form-top">
                        <div className="form-top-left">
                            <h3>Sign up now</h3>
                            <p>Fill in the form below to get instant access:</p>
                            <p>or</p>
                            <Link to='/login'>Login</Link>
                        </div>
                        <div className="form-top-right">
                            <i className="fa fa-pencil"></i>
                        </div>
                    </div>
                    <div className="form-bottom">
                        <form method="post" className="registration-form">
                            <div className="form-group">
                                <label className="sr-only">First name</label>
                                <input type="text" name="form-first-name" placeholder="First name..." className="form-first-name form-control" id="form-first-name"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only">Last name</label>
                                <input type="text" name="form-last-name" placeholder="Last name..." className="form-last-name form-control" id="form-last-name"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only">Email</label>
                                <input type="text" name="form-email" placeholder="Email..." className="form-email form-control" id="form-email"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only">About yourself</label>
                                <textarea name="form-about-yourself" placeholder="About yourself..." 
                                            className="form-about-yourself form-control" id="form-about-yourself"></textarea>
                            </div>
                            <button type="submit" className="btn">Sign me up!</button>
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
        setProfileHandler:(token)=>dispatch(setProfileHandler(token))
    }
}
export default connect(mapPropsToState,mapPropsToDispatch)(SignUp)