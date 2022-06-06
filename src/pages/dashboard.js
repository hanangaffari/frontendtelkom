import { 
    StyledTitle,
    StyledTitle2 ,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledForm,
    colors
} from "./../component/style";

//logo
import Logo from "./../asset/favicon.png"
const Dashboard = () => {
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