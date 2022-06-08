import axios from 'axios';

import { sessionService } from 'redux-react-session';

export const loginUser = (credentials,navigate,setFieldError,setSubmitting) => {
//make checks
/*
let data = JSON.stringify({
    username: this.state.username,
    password: this.state.password
  });
*/
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
        }else if(message.includes("Password")){
            setFieldError("Password",message)
        }
    }else if(data.status === "SUCCESS"){
        const userData = data.data[0];

        const token = userData._id;
        
        sessionService.saveSession(token).then(() => {
            sessionService.saveUser(userData).then(() => {
                //history.push('/dashboard')
                navigate('/dashboard')
            }).catch(err => console.error(err))
        }).catch(err => console.error(err))
    }
    setSubmitting(false);
}).catch(err => console.error(err))

}

export const regUser = (credential,history,setFieldError,setSubmitting) => {

}

export const logoutUser = () => {

}