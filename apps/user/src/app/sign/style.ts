import styled,{keyframes} from "styled-components";
import { lightTheme } from "@hithere/styled-theme";

export const AuthContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    
`
const slideDown = keyframes`
  0% {
    border-radius: 0px 0px 500px 0px;
    transform: translateY(-100%);
  }
  100% {
    border-radius: 0px 500px 0px 0px;
    transform: translateY(0);
  }
`;
const slideUp = keyframes`
  0% {
    border-radius: 0px 500px 0px 0px;
    transform: translateY(0);
  }
  100% {
    border-radius: 0px 0px 500px 0px;
    transform: translateY(-100%);
  }
`;

const SlideStop  = keyframes`
    100% {
        border-radius: 0px 500px 0px 0px;
    }
`
export const AuthLogoView = styled.div<{
    $state:boolean
    }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    border-radius: ${({$state})=> $state ? "0px 0px 500px 0px" : "0px 500px 0px 0px;"};
    background: #FFF7E8;
    /* animation: ${({$state}) => ($state ?  slideDown : SlideStop )} 0.8s ease; */
    /* animation-fill-mode: ${({$state})=> $state ? "forwards" : "forwards"}; */
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