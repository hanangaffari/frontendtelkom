import { 
    StyledTitle,
    StyledTitle2 ,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledForm,
    colors,
    Image
} from "./../component/style";

//import {componentDidMount} from 'react'
import React from "react";

//logo
import Logo from "./../asset/favicon.png"

//redux connect
import { connect } from 'react-redux';
import { logoutUser } from "../auth/actions/userAction";
import {useNavigate} from "react-router-dom";


//new Buffer.from("anything", "base64");

const Dashboard = ({logoutUser,user}) => {        
    const navigate = useNavigate();
    const userProfileImage = user.Foto64;
    

    //console.log(Buffer.from(userProfileImage).toString('base64'));
    
    //const img = new Buffer.from(userProfileImage).toString("base64")
   
    return(
            <div>
                <div style={{
                    
                    top:0,
                    left:0,
                    backgroundColor: "transparent",                    
                    padding:"15px",              
                    display: "flex",
                    justifyContent:"flex-start"
                }}>
                    <Avatar image={Logo}></Avatar>
                </div>
                <StyledForm bg={colors.dark2}>
                <StyledTitle size={65}>Welcome to Telkom-university</StyledTitle>
                <StyledTitle2 size={27}>
                   {user.Username}                   
                </StyledTitle2>
                <StyledTitle2>{user.NamaMahasiswa}</StyledTitle2>
                <StyledTitle2>{user.NIM}</StyledTitle2>
                <Image src={userProfileImage} style={{width:"20%"}}/>
             <ButtonGroup>
                <StyledButton to="#" onClick={() => logoutUser(navigate)}>Logout</StyledButton>
                </ButtonGroup>
                </StyledForm>
                
            </div>
            );   
}
const mapStateToProps = ({session}) => ({
user: session.user
})

export default connect(mapStateToProps,{logoutUser})(Dashboard);