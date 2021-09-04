import { Component } from 'react';
import {Redirect, Route, route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={
            (props) => 
                localStorage.getItem("adminToken") ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to="/adminLogin"/>
                )
                
            
        }
        />
    )
}
export default PrivateRoute;