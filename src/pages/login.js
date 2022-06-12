import {
    StyledInput,
    StyledForm,
    StyledFormda,
    StyledFormBtn,
    StyledRegBtn,
    Wave,
    TextLink,
    StyledLabel,StyledTitle,colors,Avatar,Bgr,
ButtonGroup,
ExtraText
} 
    from './../component/style'

import Logo from './../asset/favicon.png'
//formik
import { Formik, Form } from 'formik';
import { TextInput } from '../component/FormLib';
import {FiMail, FiLock} from 'react-icons/fi';
import * as Yup from 'yup';
import {RotatingLines} from 'react-loader-spinner';
//auth
import { connect } from 'react-redux';
import { loginUser } from '../auth/actions/userAction';
import {useNavigate,useLocation} from "react-router-dom";
import { useState } from 'react';
const Login = ({loginUser}) => {
    const navigate = useNavigate();



    return(
        
        <div style={{padding:"5% 0px 0px 15%"}}>            
            <Bgr>
            <StyledForm style={{width:"100%"}}>
                <Avatar image={Logo}></Avatar>
                <StyledTitle color={colors.theme} size={30}>login</StyledTitle>
                
                <Formik 
                initialValues={{
                    Username:"",
                    Password:"",
                }}
                validationSchema={
                    Yup.object({
                        Username: Yup.string()
                        .required("required"),
                        Password : Yup.string().min(8, "password is too short").max(30,"password is too long")
                        .required("required"),
                    })
                }
                onSubmit={(values,{setSubmitting,setFieldError}) => {
                    console.log(values);
                    loginUser(values,navigate,setFieldError,setSubmitting)

                }}
                >
                    {({isSubmitting}) => (
                        <Form>
                           <TextInput 
                           name="Username" 
                           type="text" 
                           label="Username"
                           placeholder="Username"
                           icon={<FiMail/>}/>

                           <TextInput
                           name="Password" 
                           type="password" 
                           label="Password"
                           placeholder="password"
                           icon={<FiLock/>}/>                           

                           <ButtonGroup>
                               {!isSubmitting &&<StyledFormBtn 
                                 type='submit'>
                                   Login
                               </StyledFormBtn> }
                               <StyledRegBtn to="/register"
                                    style={{position:"absolute",marginLeft:'67%'}}>
                                daftar
                </StyledRegBtn>
                {isSubmitting && (
                    <RotatingLines
                    
                    color= {colors.red}
                    height={49}
                    width={100}
                    />                    
                )}    
                           </ButtonGroup>

                        </Form>
                    )}
                </Formik>
                
                
            </StyledForm>
            <StyledFormda>            
                <ExtraText> mahasiswa baru ?</ExtraText>
                <ButtonGroup>
                               
                           </ButtonGroup>
            </StyledFormda>
            </Bgr>

        </div>
    );
}

export default connect(null,{loginUser})(Login);