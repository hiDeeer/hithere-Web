"use client";
import React, { useEffect } from "react";
import * as S from "./style";
import { LoginLogo, SignUpLogo1, SignUpLogo2 } from "@hithere/icon";
import { useSectionStore, useLogoStore, SectionName } from "@/store/sign/signStore";
import Login from "@/components/auth/login";
import Sign from "@/components/auth/sign";


const Auth = () => {
  const { section, setSection } = useSectionStore();
  const { isState, setState } = useLogoStore();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      
      const previousSection = (event.state?.section as SectionName) || "login";
      setSection(previousSection);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [setSection]);

  const handleSectionChange = (newSection: SectionName) => {
    window.history.pushState({ section: newSection }, "", `/${newSection}`);
    setSection(newSection); 
  };

  return (
    <S.AuthContainer>
      <S.AuthLogoView $state={isState}>
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
        {section === "login" ? (
          <Login setSection={handleSectionChange} setState={setState} />
        ) : (
          <Sign setSection={handleSectionChange} />
        )}
      </S.AuthComponents>
    </S.AuthContainer>
  );
};

export default Auth;
