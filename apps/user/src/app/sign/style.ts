import styled from "styled-components";
import { lightTheme } from "@hideeer/styled-theme";

export const SignContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    
`
export const SignLogoView = styled.div`
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