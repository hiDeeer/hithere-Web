import React,{ ChangeEventHandler,KeyboardEventHandler,} from "react";
import styled from "styled-components"

type InputType = "text" | "password";

interface TextFieldProps {
    id:string;
    name:string;
    type: InputType;
    value:string;
    placeholder?: string;
    ref: ChangeEventHandler<HTMLInputElement>;
    keydown: KeyboardEventHandler<HTMLInputElement>;
    isDisabled?: boolean;
    supportingText?: string;
}


export const TextField = ({
    id,
    name,
    type,
    value,
    ref,
    isDisabled,
    keydown,
    supportingText
}:TextFieldProps) =>{
return(
    <StyledTextField $isActive>  
    
    </StyledTextField>
)
}


const StyledTextField =styled.div<{ $isActive: boolean }>`
  display: flex;
  height: 48px;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border-color: ${({ $isActive }) => ($isActive ? "1A9A18" : "#c4c4c4")};
  border: 1px solid ;
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  img {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`