import React from 'react';
import {connect} from 'react-redux';
import { logoutHanler } from "../Actions/AuthAction";

class Logout extends React.Component{
    componentDidMount() {
        this.props.logoutHanler()
        this.props.history.replace('/login')
    }
    render(){
        return ''
    }
}
const mapPropsToState = ()=>{
    return {

    }
}
const mapPropsToDispatch = (dispatch)=>{
    return {
        logoutHanler: ()=> dispatch(logoutHanler())
    }
}
export default connect(mapPropsToState,mapPropsToDispatch)(Logout);