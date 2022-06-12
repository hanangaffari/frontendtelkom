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
    
    return !authenticated ? <Outlet/> : <Navigate to ="/dashboard"/>

}


export default AuthRoute;