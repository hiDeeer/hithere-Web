"use client";
import React from "react";
import * as S from "./style";
import { LoginLogo, SignUpLogo1, SignUpLogo2 } from "@hithere/icon";
import { useSectionStore } from "@/store/sign/signStore";
import Login from "@/components/auth/login";
import Sign from "@/components/auth/sign";

const Auth = () => {
  const { section } = useSectionStore(); 

  return (
    <S.AuthContainer>
      <S.AuthLogoView>
        {section === "login" ? (
          <LoginLogo />
        ) : section === "signFirst" ? (
          <SignUpLogo1 />
        ) : (
          <SignUpLogo2 />
        )}
        <p>HiTeeer</p>
      </S.AuthLogoView>
      <S.AuthComponents>
        {section==="login" ? 
        (<Login/>) : 
        (<Sign/>)
      }
      </S.AuthComponents>
    </S.AuthContainer>
  );
};

export default Auth;
