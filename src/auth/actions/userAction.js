import axios from 'axios';

import { sessionService } from 'redux-react-session';

import AuthRoute from '../../component/AuthRoute';

//export var loggedin = (false);
export const loginUser = (credentials,navigate,setFieldError,setSubmitting) => {
//make checks

return() => { 


axios.post("https://secure-coast-04239.herokuapp.com/user/signin",

credentials,{
    headers: {
        "Content-Type" : "application/json"
    }
}
).then((response)=> {
    const {data} = response;

    if(data.status === "FAILED"){
const {message} = data;

        //chehck error
        if(message.includes("credential")){
            setFieldError("Username",message);
            setFieldError("Password",message)
        }else if(message.includes("password")){
            setFieldError("Password",message)
        }
    }else if(data.status === "SUCCESS"){
        const userData = data.data[0];

        const token = userData._id;
        
        sessionService.saveSession(token).then(() => {
            sessionService.saveUser(userData).then(() => {
                
                localStorage.setItem('user','true');
                navigate('/dashboard')
                
            }).catch(err => console.error(err))
        }).catch(err => console.error(err))
    }
    setSubmitting(false);
})
.catch(err => console.error(err))
}
};

export const regUser = (credentials,navigate,setFieldError,setSubmitting
) => {
     return (dispatch) => {
    axios.post("https://secure-coast-04239.herokuapp.com/user/signup",

    credentials,{
    headers: {
        "Content-Type" : "application/json"
    }
},
).then((response)=>{
    const {data} = response;

    if(data.status === "FAILED"){
        const {message} = data;

        //check
        if(message.includes("exist")){
            setFieldError("Username",message)
        }
        setSubmitting(false);
    }else if(data.status === "SUCCESS"){
        const {Username,Password}  = credentials;

        //loginUser({Username,Password},navigate,setFieldError,setSubmitting)
        dispatch(
            loginUser({Username,Password},navigate,setFieldError,setSubmitting)
        ); 
    }
}).catch((err) => console.log(err.message));
}

};

export const logoutUser = (navigate) => {

return () => {
    localStorage.removeItem('user');    
sessionService.deleteSession();
sessionService.deleteUser().then(() => {
    navigate('/');
});


}
};