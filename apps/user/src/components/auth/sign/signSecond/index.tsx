import React from "react"
import { Sign } from "@hithere/types"

interface SignProps{
    signupData:Sign
    handleSignupData: (e: React.ChangeEvent<HTMLInputElement>) => void;
    keydownButton: (e: React.KeyboardEvent) => void;
}

const SignSecond = ({signupData,handleSignupData, keydownButton}:SignProps) =>{

    return(
        <>
        
        </>
    )
}

export default SignSecond