import styled from 'styled-components';

import background from './../asset/bgr.svg';

import background1 from './../asset/doc.svg';

import wavesvg from './../asset/wave.svg';

import wavesvg2 from './../asset/wave3.svg';

import pattern from './../asset/pattern.svg'



import{Link} from 'react-router-dom';
import { icons } from 'react-icons';
import { type } from '@testing-library/user-event/dist/type';




export const colors = {
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1:"#1F2937",
    dark2:"#485563",
    dark3:"#93A3AF",
    red : "#DC2626"
}

export const Wave = styled.div `  
width:100%;
height:100%;  

background-size: 140%;
`;

export const StyledContainer = styled.div`
        margin: 0;
        min-height : 100vh;        
        background: linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${background});
        background-size:cover;
        background-attachment:fixed;
        text-align:center;
 `;

 export const StyledForm = styled.div`
    background-color: ${props => props.bg ||colors.light1};        
    padding: 50px 40px;
`;

export const Bgr = styled.div`
    width:78%;
    height:40rem;
    margin: 0px 20px ;
    align-self: normal;
    display:flex;
    background: url(${pattern})3% -7%;
    background-size:160%;
`;

 export const StyledFormda = styled.div`
    background: url(${background1})no-repeat -1% -10%;
    
    background-size: 140%;
    text-align:center;
    width: 70%;
    height:500px;
    float:right;
`;

 export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
 
    text-align:center;
    color: ${(props) => props.color? props.color: colors.primary};
    padding : 5px;
    margin-bottom:20px;
 `;

 export const StyledTitle2 = styled.p`
    font-size: ${(props) => props.size}px;
    text-align:center;
    color: ${(props) => props.color? props.color: colors.primary};
    padding : 5px;
    margin-bottom:25px;
 `;

 export const Avatar = styled.div`
    width:85px;
    height:85px;
    border-radius:50px;
    background-image: url(${props => props.image});
    background-size:cover;
    background-position:center;
    margin:auto;
 `;

 export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align:center;
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }
 `;

 export const ButtonGroup = styled.div `
    display :flex;
    justify-content space-around;
    flex-direction: row;
    margin-top: 25px;
 `;

 //login
//input
export const StyledInput = styled.input `
    width: 90%;
    padding:25px;
    padding-left: 50px;
    font-size: 17px
    letter-spacing: 1px;
    outline: none;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border:0;
    display: block;
    margin 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color:${colors.primary};`}
    
    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }    
    
`;




export const StyledLabel = styled.p`
    text-align: left;
    font-size: 23px;
    font-weight: bold;
`;

export const StyledFormBtn = styled.button `    
    width: 60%;
    padding: 8px;
    background-color: transparent;
    font-size: 26px;
    border: 2px solid ${colors.red};
    border-radius: 30px;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.red};
        color: ${colors.primary};
        cursor: pointer;        
}`;

export const StyledRegBtn = styled(Link) `    
width: 15%;
padding: 8px;
background-color: transparent;
font-size: 26px;
border: 2px solid ${colors.light1};
border-radius: 30px;
color: ${colors.primary};
text-decoration: none;
text-align:center;
transition: ease-in-out 0.3s;

&:hover{
    background-color: ${colors.primary};
    color: ${colors.theme};
    cursor: pointer;
}
`;


export const ErrorMsg = styled.div`
font-size: 11px;
color: ${colors.red};
margin-top: -5px;
margin-bottom : 10px;
text-align: left;
`;

export const ExtraText = styled.p`
font-size: ${(props) => props.size}px;
position:absolute;
margin-top:5%;

`;

export const TextLink = styled(Link)`
text-decoration:none;
color : ${colors.theme};
transition: ease-in-out 0.3s;

&:hover{
    text-decoration: underline;
    letter-spacing: 2px;
    font-weight: bold;
}
`;

//icons
export const StyledIcon = styled.p `
 color : ${colors.dark1}; 
 position: absolute;
 font-size: 170%;
 top: 45%;
 ${(props) => props.right && `right: 15px;`}
 ${(props) => !props.right && `left: 15px;`}
 `;