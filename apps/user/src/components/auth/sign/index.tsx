import React,{ReactNode} from "react";
import * as S from "./style";
import { SectionStore } from "@/store/sign/signStore";
import SignFrist from "./signFrist";
import SignSecond from "./signSecond";
import { useSign } from "@/hooks/auth/useSign";
import { SIGN_SECTION_NAME } from "@/constants/sign/sign.constants";

interface LoginProps {
    setSection: SectionStore["setSection"];
    section :string;
  }

const Sign = ({ setSection,section }: LoginProps) =>{
    const {...signup}=useSign();
    const signupComponents: ReactNode[] = [
        <SignFrist
        signupData={signup.signData}
        handleSignupData={signup.handleSignInData}
        keydownButton={signup.handleKeyDown}
        />,
        <SignSecond
        signupData={signup.signData}
        handleSignupData={signup.handleSignInData}
        keydownButton={signup.handleKeyDown}
        />
        
      ];
    return(
        <S.SignContainer>
            {signupComponents.map((component, idx) => {
                return section === SIGN_SECTION_NAME[idx].title && (
                    <React.Fragment key={idx}>{component}</React.Fragment>
                );
            })}
        </S.SignContainer>
    )
}

export default Sign;