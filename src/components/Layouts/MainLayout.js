import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Auxx from '../../Auxx/Auxx';
import Login from '../../container/Login';
import SignUp from '../../container/SignUp';
import Home from '../../container/Home';
import { Route,NavLink } from "react-router-dom";
import {connect} from 'react-redux';

class MainLayout extends React.Component{
    render(){
        let authData = null
            if(this.props.isAuthentcated && this.props.profileData.name !== undefined){
                authData = (<li><p>Hi {this.props.profileData.name}</p><NavLink to="/logout">Logout</NavLink></li>)
            }else{
                authData = (<li><NavLink to="/login">Login</NavLink></li>)
            }
        return (
            <div>
                <div className="top-content">
                    <div className="inner-bg">
                        <div className="container">
                            <Header />
                            <div className="row">
                                <div className="col-sm-3 sidenav">
                                    <h4>Amit's Blog</h4>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><NavLink  to="/">Home</NavLink></li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                        {authData}
                                    </ul>
                                    <br/>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Blog.." />
                                        <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">
                                            <span className="glyphicon glyphicon-search"></span>
                                        </button>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <Route exact path="/" component={Home} />
                                    <Route path="/login" component={Login} />
                                    <Route path="/sign-up" component = {SignUp}/>
                                    <Route path="/contact" render={()=>(<div>List of Items</div>)} />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <Auxx>
                    <Footer />
                </Auxx>
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
export default connect(mapPropsToState,null)(MainLayout)