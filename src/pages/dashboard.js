import { 
    StyledTitle,
    StyledTitle2 ,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledForm,
    colors
} from "./../component/style";

//import {componentDidMount} from 'react'
import React, { Component } from "react";

import  {authFirebase}  from "../config/firebase";

//logo
import Logo from "./../asset/favicon.png"



const Dashboard = () => {
    //componentDidMount = () => {
        authFirebase.onAuthStateChanged((user) => {
            if(!user){
                //this.props.history.push('/login');
                //console.log('sdsds');
                window.location.href = '/login';
            }
        })
    //}
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
            <StyledTitle size={65}>Telkom University</StyledTitle>
            <StyledTitle2 size={27}>
                silahkan masuk
            </StyledTitle2>
            <ButtonGroup>
            <StyledButton to="#">Logout</StyledButton>
            </ButtonGroup>
            </StyledForm>
            
        </div>
        );
}

export default Dashboard;