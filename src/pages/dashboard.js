import { 
    StyledTitle,
    StyledTitle2 ,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledForm,
    colors,
    ExtraText
} from "./../component/style";

//import {componentDidMount} from 'react'
import React, { Component } from "react";

import  {authFirebase}  from "../config/firebase";

//logo
import Logo from "./../asset/favicon.png"

//redux connect
import { connect } from 'react-redux';
import { logoutUser } from "../auth/actions/userAction";
import {useNavigate} from "react-router-dom";


const Dashboard = ({logoutUser,user}) => {        
    const navigate = useNavigate();
    
        return(
            <div>
                <div style={{
                    
                    top:0,
                    left:0,
                    backgroundColor: "transparent",
                    width:"100%",  
                    padding:"15px",              
                    display: "flex",
                    justifyContent:"flex-start"
                }}>
                    <Avatar image={Logo}></Avatar>
                </div>
                <StyledForm bg={colors.dark2}>
                <StyledTitle size={65}>test</StyledTitle>
                <StyledTitle2 size={27}>
                   {user.Username}                   
                </StyledTitle2>
                <StyledTitle2>{user.NamaMahasiswa}</StyledTitle2>
                <StyledTitle2>{user.NIM}</StyledTitle2>
                <img src={user.FotoMahasiswa}></img>

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