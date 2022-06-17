import {
    StyledInput,
    StyledForm,
    StyledFormda,
    StyledFormBtn,
    StyledRegBtn,
    Wave,
    StyledLabel,StyledTitle,colors,Avatar,Bgr,
    TextLink,
ButtonGroup,
ExtraText,
ErrorMsg
} 
    from './../component/style'

import Logo from './../asset/favicon.png'
//formik
import { Formik, Form } from 'formik';
import { TextInput } from '../component/FormLib';
import {FiMail, FiLock} from 'react-icons/fi';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import * as Yup from 'yup';
import {RotatingLines} from 'react-loader-spinner';

//auth
import { connect } from 'react-redux';
import { regUser } from '../auth/actions/userAction';
import {useNavigate} from "react-router-dom";
import { Buffer } from 'buffer';


const Register = ({regUser}) => {
    const navigate = useNavigate();
    
    
    return(
        
        <div style={{padding:"5% 0px 5% 15%"}}>            
            <Bgr style={{width:"50%",marginLeft:"20%",height:"100%"}}>
            <StyledForm style={{width:"100%",padding:"10%"}}>
                <Avatar image={Logo}></Avatar>
                <StyledTitle color={colors.theme} size={30}>
                    daftar</StyledTitle>
    
                <Formik 
                enableReinitialize
                
                initialValues={{
                    NamaMahasiswa:"",
                    Password:"",
                    FotoMahasiswa:"",
                    repeatpassword:"",
                    NIM:"",
                    Username:"",
                    Foto64:"",
                }}
                validationSchema={
                    Yup.object({
                        NamaMahasiswa: Yup.string()
                        .required("required"),
                        Username: Yup.string()
                        .required("required"),
                        Password : Yup.string().min(8, "password is too short").max(30,"password is too long")
                        .required("required"),
                        NIM: Yup.number().required("Required"),
                        repeatpassword: Yup.string().required("Required").
                        oneOf([Yup.ref("Password")],"Password tidak sama"),
                        FotoMahasiswa: Yup.mixed().required(),
                        Foto64 : Yup.string(),                       
                    })
                }


 

                
                onSubmit={(values,{setSubmitting,setFieldError}) => {
                    const a = document.getElementById("preview").getAttribute("src");
                    values.Foto64=a;
                    console.log(values);
                    regUser(values,navigate,setFieldError,setSubmitting)
                }}
                >
                    {({isSubmitting}) => (
                        <Form   onChange={() => {
                            
                            const filez =  document.getElementById("foto2").files[0];
                            
                            //const  fileType = filez['type'];

                            const validImageTypes = ['image/jpeg','image/jpg', 'image/png'];


                            var file = document.getElementById("foto2").files;

                            if(file. length > 0 ){
                                var filereader = new FileReader();
                                

                                filereader.onload = function(event){
                                    const shee = event.target.result;
                                    /*
                                    if (!validImageTypes.includes(fileType)) {

                                        document.getElementById("preview").setAttribute('src', '');
                                        document.getElementById("foto2").form.reset();
                                        document.getElementById("unsupimg").style.visibility = "visible";
                                        document.getElementById("bigimg").style.visibility = "hidden";
                                        document.getElementById("imgs").style.visibility = "hidden";
                                    }
                                    */

                                     if (filez.size > 500 * 1024) {

                                        document.getElementById("preview").setAttribute('src', '');
                                        document.getElementById("foto2").form.reset();
                                        document.getElementById("bigimg").style.visibility = "visible";
                                        document.getElementById("unsupimg").style.visibility = "hidden";
                                        document.getElementById("imgs").style.visibility = "hidden";
                                    }
                                    else{
                                        
                                        document.querySelector('input[name="Foto64"]').value = shee;                                                                      
                                        document.getElementById("preview").setAttribute("src",event.target.result);
                                        
                                        document.getElementById("bigimg").style.visibility = "hidden";
                                        document.getElementById("unsupimg").style.visibility = "hidden";
                                        document.getElementById("imgs").style.visibility = "visible";
                                        
                                        
                                    }
                                    
                                };
                                filereader.readAsDataURL(file[0]);  
                                                                                                                      
                            }  

                            
                            
                            
                        }
                        
                       }    >
                        
                           <ErrorMsg id='bigimg' style={{position:"absolute",marginTop:"25%",marginLeft:"15%",zIndex:"1",
                                visibility:"hidden",fontSize:"80%"
                            }}>
                               image too big</ErrorMsg>
                           <ErrorMsg id='unsupimg' style={{position:"absolute",marginTop:"26%",marginLeft:"15%",zIndex:"1",
                                visibility:"hidden",fontSize:"80%"
                            }}>
                               unsuported image type</ErrorMsg>
                           <TextInput 
                           name="NamaMahasiswa" 
                           type="text" 
                           label="nama mahasiswa"
                           placeholder="nama mahasiswa"
                           icon={<FiMail/>}/>

                            <div style={{position:"absolute",marginLeft:"25rem"}}>
                            <TextInput 
                           name="Foto64" 
                           type="text" 
                           label="nama mahasiswa"
                           placeholder="nama mahasiswa"
                           
                           />
                           </div>

                           <TextInput 
                           name="NIM" 
                           type="number" 
                           label="Nomor Induk Mahasiswa"
                           placeholder="nomor induk mahasiswa   "
                           icon={<FiMail/>}/>
                           
                           
                                <TextInput
                                name="FotoMahasiswa" 
                                id="foto2"
                                type="file" 
                                label="pas foto"
                                accept="image/*"                                                                                      
                                icon={<AiOutlinePlusSquare style={{pointerEvents:"none"}}/>}
                                style={{height:"100%"}}
                              
                                /> 
                                <div id='imgs' style={{backgroundColor:"#485563",padding:"2%",visibility:"hidden"}}>
                                <img id="preview" style={{width:"50%"}}/>                                                                                          
                                </div>                    
                    
                            
                            <TextInput 
                           name="Username" 
                           type="text" 
                           label="username"
                           placeholder="username"
                           icon={<FiMail/>}/>

                           <TextInput
                           name="Password" 
                           type="password" 
                           label="password"
                           placeholder="password"
                           icon={<FiLock/>}/>

                           <TextInput
                           name="repeatpassword" 
                           type="password" 
                           label="repeat password"
                           placeholder="repeat password"
                           icon={<FiLock/>}/>                            

                           <ButtonGroup>
                               {!isSubmitting &&<StyledFormBtn 
                                 type='submit'>
                                   Register
                               </StyledFormBtn> } 
                               <ExtraText>sudah punya akun?
                    <TextLink to="/login">login</TextLink>                    
                               </ExtraText> 
                                                        
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
            </Bgr>
        </div>

        
    );
}

export default connect(null,{regUser})(Register);