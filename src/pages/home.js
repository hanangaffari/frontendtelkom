import { StyledTitle,StyledTitle2 ,Avatar,StyledButton,ButtonGroup} from "./../component/style";

//logo
import Logo from './../asset/Telkom.png'
const home = () => {
    return(
        <div>
            <div style={{               
                top:0,
                left:0,
                backgroundColor: "transparent",
                width:"100%",                
                display: "flex",
                justifyContent:"flex-start",
                paddingTop:"8%"
            }}>
                <Avatar image={Logo}></Avatar>
            </div>
            <StyledTitle size={65}>Telkom University</StyledTitle>
            <StyledTitle2 size={27}>
                silahkan masuk
            </StyledTitle2>
            <ButtonGroup>
            <StyledButton to="./login">Login</StyledButton>
            </ButtonGroup>
        </div>
        );
}

export default home;