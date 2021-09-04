import { Component } from 'react';
import {Redirect, Route, route} from 'react-router-dom';

const Private = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={
            (props) => 
                localStorage.getItem("authToken") ? (
                    <Component {...props}/>
                ) : (
                    <Redirect to="/auth"/>
                )
                
            
        }
        />
    )
}
export default Private;