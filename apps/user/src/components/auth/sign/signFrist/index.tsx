import React from "react"
import { Sign } from "@hithere/types"
import * as S from "./style";

interface SignProps{
    signupData:Sign
    handleSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
    keydownButton: (e: React.KeyboardEvent) => void;
    
}

const SignFrist = ({signupData,handleSignupData}:SignProps) =>{

    return(
        <S.SignBox>
            
        </S.SignBox>
    )
}

export default SignFrist