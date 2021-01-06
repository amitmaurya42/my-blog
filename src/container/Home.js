import React from 'react';
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state={isAuthentcated:true}
    }
    render(){
        let redirectToLogin = null
        console.log('this.props.isAuthentcated',this.props.isAuthentcated)
        if(!this.props.isAuthentcated){
            redirectToLogin=<Redirect to={{pathname: '/login'}}/>
        }
        return (
            <div className="col-sm-9">
                {redirectToLogin}
              <h4><small>RECENT POSTS</small></h4>
              <hr/>
              <h2>I Love Food</h2>
              <h5><span className="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27, 2015.</h5>
              <h5><span className="label label-danger">Food</span> <span className="label label-primary">Ipsum</span></h5><br/>
              <p>Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <br/><br/>
              
              <h4><small>RECENT POSTS</small></h4>
              <hr/>
              <h2>Officially Blogging</h2>
              <h5><span className="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.</h5>
              <h5><span className="label label-success">Lorem</span></h5><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <hr/>
            </div>
        )
    }
}
const mapPropsToState = (state)=>{
    return {
        isAuthentcated: state.auth.isAuthentcated
    }
}
export default connect(mapPropsToState,null)(Home);