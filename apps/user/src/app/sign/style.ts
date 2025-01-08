import styled from "styled-components";
import { lightTheme } from "@hithere/styled-theme";

export const AuthContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    
`
export const AuthLogoView = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border-radius: 0px 500px 0px 0px;
    background: ${lightTheme.PrimaryAlternative};
    p{
        position: absolute;
        left: 5%;
        bottom: 20px;
    }
`

export const AuthComponents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 40px;
`