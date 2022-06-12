//import { Navigate, Outlet, useLocation } from "react-router-dom";
import Login from '../pages/login'




/*
//dashboard
import {Route,Navigate} from 'react-router-dom';

import { connect } from 'react-redux';

const AuthRoute = ({children,authenticated, ...rest}) => {
return(
    <Route
    {...rest}
    render={
        ({location})=> authenticated ? (children) : (
            <Navigate
            to={{
                pathname: "/login",
                state: {from:location}
            }}
            />
        )
    }
    />
)
}
const mapStateToProps = ({session}) => ({
    authenticated: session.authenticated
})

export default connect(mapStateToProps)(AuthRoute);
*/
//dashboard
/*
import { Navigate,Outlet } from 'react-router-dom'

export function AuthRoute({logged}){
    return logged ? <Outlet/> : <Navigate to="login"/>
}

export default AuthRoute;
*/

/*
export const useAuth = (logged) => {
    if(logged == true){
    const user = {loggedIn: true}
    return user && user.loggedIn;
}else{
    const user = {loggedIn: false}
    return user && user.loggedIn;
}

}
const AuthRoute = () => {
    const location = useLocation();
    const isAuth = useAuth();
return  isAuth ? <Outlet/> : <Navigate to='/login' replace state={{from: location}}/>
};


export default AuthRoute;
*/
/*
export const useAuth = (logged) => {
    if(logged == true){
    const user = {loggedIn: true}
    return user && user.loggedIn;
}else{
    const user = {loggedIn: false}
    return user && user.loggedIn;
}
}*/
/*
export const isAuth = false;
const AuthRoute = () => {
    const location = useLocation();
   
   <Outlet> <Navigate to='/login' replace state={{from: location}}/></Outlet>

};
*/

//export default AuthRoute;
/*
import { useContext } from 'react'
import AuthContext from '../auth/context/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext);
    
}
export default useAuth; 
*/
//dashboard
import {Outlet,Navigate} from 'react-router-dom';
const useAuth = () => {
    const user = localStorage.getItem('user');
    if(user){
        return true
    }else{
        return false;
    }
    
}

 const AuthRoute = () => {

    const authenticated = useAuth()
    
    return authenticated ? <Outlet/> : <Navigate to ="/login"/>

}


export default AuthRoute;