import React, { ChangeEventHandler, KeyboardEventHandler, useRef, useState } from "react";
import styled,{ useTheme as styledUseTheme } from "styled-components";
import { OpenEye, CloseEye, CloseRing } from "@hithere/icon";
import {hexToRgba} from "@hithere/util";

type InputType = "text" | "password";
type Type = "Default" | "Disabled" | "Active" | "Error";

interface TextFieldProps {
  id: string;
  name: string;
  inputType: InputType;
  Type?: Type;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
  Label?: string;
  errorMessage?: string;
  
  isIcon?:boolean;
}

export const TextField = ({
  id,
  name,
  inputType,
  Type = "Default",
  value: initialValue,
  onChange,
  onKeyDown,
  placeholder,
  Label,
  errorMessage,
  isIcon=false,
}: TextFieldProps) => {
  const theme = styledUseTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isfocus ,setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changePasswordState = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = ""; 
      inputRef.current.focus(); 
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e); 
  };

  return (
    <div style={{ position: "relative" }}>
      {Label !== "" ? <StyledSupportingText >{Label}</StyledSupportingText> : ""}
      <StyledTextField
       isError={Type=="Error"}
       isFocused={isfocus}
       isDisabled={Type=="Disabled"}
        >
        <Text_Field
          id={id}
          name={name}
          ref={inputRef} 
          defaultValue={initialValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          isDisabled={Type=="Disabled"}
          isActive={Type=="Active"}
          type={
            inputType === "password" ? (showPassword ? "text" : "password") : "text"
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onKeyDown(e);
            }
          }}
        />
        {isIcon ? inputType === "text" ? (
            <CloseRing onClick={handleClear} color={Type=="Error" ? theme.StatusNegative :theme.LineNormal}/>
        ) : showPassword ? (
          <OpenEye onClick={changePasswordState} color={Type=="Error" ? theme.StatusNegative :theme.LineNormal} />
        ) : (
          <CloseEye onClick={changePasswordState} color={Type=="Error" ? theme.StatusNegative :theme.LineNormal}/>
        ) : ""}
      </StyledTextField>
      {Type=="Error" ? <ErrorMessage>{errorMessage}</ErrorMessage> : ""}
    </div>
  );
};


const StyledTextField = styled.div<{
  isFocused:boolean;
  isError:boolean;
  isDisabled:boolean;
  }>`
  display: flex;
  height: 48px;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid;
  border-color: ${({ isFocused,isError,theme }) => isFocused ? theme.PrimaryNormal : isError ? theme.StatusNegative : theme.LineNormal};
  background: ${({ isFocused, isError, isDisabled, theme }) =>
    isFocused
      ? hexToRgba('#FFA800', 0.03)
      : isError
      ? hexToRgba('#FF4242', 0.03)
      : isDisabled
      ? theme.FillNormal
      : theme.BackgroundNormal};
  
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
`;

const Text_Field = styled.input<{
  isDisabled:boolean;
  isActive:boolean;
  }>`
  &::placeholder {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: ${({  isDisabled , isActive, theme }) => isActive ? theme.LabelNeutral : isDisabled ? theme.LabelDisable : theme.LabelNeutral};
  }
  background-color: transparent;
  color: ${({ isDisabled, isActive, theme }) => isActive ? theme.LabelNeutral : isDisabled ? theme.LabelDisable : theme.LabelNeutral };
  display: flex;
  width: 80%;
  height: 100%;
  padding: 10px 20px 10px 10px;
  align-items: center;
  flex-shrink: 0;
  font-size: 16px;
  border: none;
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
`;

const StyledSupportingText = styled.span`
  color: ${({ theme }) => theme.LabelAssistive};
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.StatusNegative};
`;


