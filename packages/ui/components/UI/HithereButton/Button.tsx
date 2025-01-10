import React from "react";
import styled from "styled-components";
import { ShapeSizeType,HiDeerShape } from "../../Layout/Shap";

type ButtonSize = "Large" | "Medium" | "Small";

type ButtonType = "Default" | "Stroke" | "ColorStroke";

interface ButtonProps{
    children:string;
    radius:ShapeSizeType;
    onClick: () => void;
    size?:ButtonSize;
    type:ButtonType;
}


export const Button =({
    children,
    radius="Large",
    onClick,
    size,
    type="Default",
    }:ButtonProps)=>{
return(
    <StyledButton
    $radius={radius}
    $size={size}
    $type={type}
    onClick={onClick}
    >
    {children}
    </StyledButton>
)
}

const StyledButton = styled.div<{
    $radius?:ShapeSizeType,
    $size?:ButtonSize,
    $type:ButtonType
}>`
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: ${({ $size }) => $size=="Large" ? "120px": $size=="Medium" ? "97px" : $size=="Small" ? "75px" : "100%"};
    height: ${({ $size }) => $size=="Large" ? "57px": $size=="Medium" ? "51px" : "45px"};
    ${({ $radius }) => $radius && HiDeerShape[$radius]} 
    background-color: ${({$type,theme})=>$type=="Default" ? theme.PrimaryNormal : $type=="Stroke" ? theme.BackgroundNormal : "rgba(255, 168, 0, 0.40)"};
    border: ${({ $type, theme }) =>
    $type === "Stroke" || $type === "ColorStroke"
      ? `1px solid ${
          $type === "ColorStroke" ? theme.PrimaryNormal : theme.LineNormal
        }`
      : "none"};
    color: ${({theme,$type})=> $type=="Stroke" ? theme.LabelStrong : $type=="ColorStroke" ? theme.LabelNormal : theme.StaticWhite };

`