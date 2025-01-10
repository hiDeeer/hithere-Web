import React from "react";
import * as S from "./style";
import {TextField,Button} from "@hithere/ui";
import { useLogin } from "@/hooks/auth/useLogin";
import { useRouter } from "next/navigation";
import { SectionStore, LogoStore } from "@/store/sign/signStore";


interface LoginProps {
    setSection: SectionStore["setSection"];
    setState: LogoStore["setState"];
  }


const Login = ({ setSection,setState }: LoginProps) =>{
    const {...login} = useLogin();
    const router = useRouter();

    return(
        <S.LoginContainer>
            <S.LoginBox>
                <S.LoginTitle>
                    <span>로그인</span>
                </S.LoginTitle>
                <S.InputBox>
                    <TextField 
                    id="id"
                    name="userId"
                    inputType="text"
                    value={login.LoginData.userId}
                    onChange={login.handleSignInData}
                    onKeyDown={login.handleKeyDown} 
                    placeholder="아이디를 입력해주세요"  
                    isIcon={true}
                    />
                    <TextField 
                    id="password"
                    name="userPassword"
                    inputType="password"
                    value={login.LoginData.userPassword}
                    onChange={login.handleSignInData}
                    onKeyDown={login.handleKeyDown} 
                    placeholder="아이디를 입력해주세요"  
                    isIcon={true}
                    />
                </S.InputBox>
                    <Button 
                    children="로그인" 
                    radius="ExtraSmall" 
                    onClick={login.handleLogin} 
                    type="Default"               
                    />
            </S.LoginBox>
            <S.SignUpButtonBox>
                <span>
                계정이 없으신가요?
                </span>
                <p onClick={()=> {
                setSection("signFirst")
                setState()}}>회원가입</p>
            </S.SignUpButtonBox>
        </S.LoginContainer>
    )
}
export default Login;