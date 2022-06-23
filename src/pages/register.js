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

    import Logo from './../asset/Telkom.png';
//formik
import { Formik, Form } from 'formik';
import { TextInput } from '../component/FormLib';

import {RiLockPasswordFill} from 'react-icons/ri';
import {RiLockPasswordLine} from 'react-icons/ri';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBookmarkCheck} from 'react-icons/bs'
import {BiUserPin} from 'react-icons/bi'

import {AiOutlinePlusSquare} from 'react-icons/ai';
import * as Yup from 'yup';
import {Bars} from 'react-loader-spinner';

//auth
import { connect } from 'react-redux';
import { regUser } from '../auth/actions/userAction';
import {useNavigate} from "react-router-dom";
import { Buffer } from 'buffer';


const Register = ({regUser}) => {
    const navigate = useNavigate();
    
    
    return(
        
        <div style={{padding:"5% 0px 5% 0%"}}>            
            <Bgr style={{width:"50%",marginLeft:"25%",height:"100%"}}>
            <StyledForm style={{width:"100%",padding:"10%"}}>
                <Avatar image={Logo}></Avatar>
                <StyledTitle color={colors.red} size={30}>
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
                        .required("tidak bisa kosong").max(30,'maksimal 30 huruf').matches(/^(?=.*[a-z])/, 'Harus mengandung setidaknya satu karakter huruf kecil')
                        .matches(/^(?=.*[A-Z])/, 'Harus mengandung setidaknya satu karakter huruf Besar'),
                        Username: Yup.string()
                        .required("tidak bisa kosong").matches(/^[a-z\s]+$/, "Hanya huruf kecil yang diperbolehkan untuk kolom ini"),
                        Password : Yup.string().min(8, "kata sandi terlalu pendek")
                        .required("tidak bisa kosong")
                        .matches(/^(?=.*[a-z])/, 'Harus mengandung setidaknya satu karakter huruf kecil')
                        .matches(/^(?=.*[A-Z])/, 'Harus mengandung setidaknya satu karakter huruf Besar')
                        .matches(/^(?=.*[0-9])/, 'Harus mengandung setidaknya satu nomor')
                        .matches(/^(?=.*[!@#\$%\^&\_=()*])/, 'Harus mengandung setidaknya satu karakter khusus'),
                        NIM: Yup.string().required("tidak bisa kosong").max(10,'maksimal 10 angka'),
                        repeatpassword: Yup.string().required("tidak bisa kosong").
                        oneOf([Yup.ref("Password")],"Password tidak sama"),
                        FotoMahasiswa: Yup.mixed().required("tidak bisa kosong"),
                        Foto64 : Yup.string(),                       
                    })
                }


 

                
                onSubmit={(values,{setSubmitting,setFieldError}) => {
                    const a = document.getElementById("preview").getAttribute("src");
                    values.Foto64=a;
                    console.log(values);
                    console.log(values.Foto64);                    
                    regUser(values,navigate,setFieldError,setSubmitting)
                }}
                >
                    {({isSubmitting}) => (
                        <Form   onChange={() => {
                            
                            const filez =  document.getElementById("foto2").files[0];
                                                                                
                            const validImageTypes = ['image/jpeg','image/jpg', 'image/png'];                            

                            var file = document.getElementById("foto2").files;

                            if(file. length > 0 ){
                                var filereader = new FileReader();
                                
                                

                                filereader.onload = function(event){
                                    const shee = event.target.result;
                                    
                                    const filetype = filez.type;
                                    
                                    if (!validImageTypes.includes(filetype)) {

                                        document.getElementById("preview").setAttribute('src', '');
                                        document.getElementById("foto2").form.reset();
                                        document.getElementById("unsupimg").style.visibility = "visible";
                                        document.getElementById("bigimg").style.visibility = "hidden";
                                        document.getElementById("imgs").style.visibility = "hidden";
                                        console.log("gak support ext");
                                    }
                                    

                                     else if (filez.size > 500 * 1024) {

                                        document.getElementById("preview").setAttribute('src', '');
                                        document.getElementById("foto2").form.reset();
                                        document.getElementById("bigimg").style.visibility = "visible";
                                        document.getElementById("unsupimg").style.visibility = "hidden";
                                        document.getElementById("imgs").style.visibility = "hidden";
                                        console.log("gak support size");
                                    }
                                    else{
                                                                                
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
                        
                           <ErrorMsg id='bigimg' style={{position:"absolute",marginTop:"27%",marginLeft:"15%",zIndex:"1",
                                visibility:"hidden",fontSize:"80%"
                            }}>
                               image too big</ErrorMsg>
                           <ErrorMsg id='unsupimg' style={{position:"absolute",marginTop:"27%",
                           marginLeft:"15%",zIndex:"1",
                                visibility:"hidden",fontSize:"80%"
                            }}>
                               unsuported image type</ErrorMsg>
                           <TextInput 
                           name="NamaMahasiswa" 
                           type="text" 
                           label="nama mahasiswa"
                           placeholder="nama mahasiswa"
                           icon={<AiOutlineUser/>}/>

                            <div style={{position:"absolute",marginLeft:"25rem",visibility:"hidden"}}>
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
                           placeholder="nomor induk mahasiswa"
                           onKeyDown={ 
                            (evt) => evt.key === 'e' && evt.preventDefault()
                           ||evt.key === '.' && evt.preventDefault() || evt.key === ',' && evt.preventDefault() }
                           icon={<BsBookmarkCheck/>}/>
                           
                           
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
                           icon={<BiUserPin/>}/>

                           <TextInput
                           name="Password" 
                           type="password" 
                           label="password"
                           placeholder="password"
                           icon={<RiLockPasswordLine/>}/>

                           <TextInput
                           name="repeatpassword" 
                           type="password" 
                           label="repeat password"
                           placeholder="repeat password"
                           icon={<RiLockPasswordFill/>}/>                            

                           <ButtonGroup>
                               {!isSubmitting &&<StyledFormBtn                                
                                 type='submit'>
                               <p style={{fontSize:"80%"}}>   Daftar</p>
                               </StyledFormBtn> } 
                               
                                                        
                {isSubmitting && (
                    <Bars
                 
                    color= {colors.red}
                    height={49}
                    width={100}
                    />                    
                )}    
                           </ButtonGroup>
                           <ExtraText >sudah punya akun?
                    <TextLink to="/login">login</TextLink>                    
                               </ExtraText> 
                        </Form>
                    )}
                </Formik>
                
            </StyledForm>
            </Bgr>
        </div>

        
    );
}

export default connect(null,{regUser})(Register);