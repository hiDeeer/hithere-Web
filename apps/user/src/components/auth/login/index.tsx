import React from "react";
import * as S from "./style";
import {TextField} from "@hithere/ui";
import { useLogin } from "@/hooks/auth/useLogin";

const Login = () =>{
    const {...login} = useLogin();
    return(
        <S.LoginContainer>
            <S.LoginBox>
                <S.LoginTitle>
                    <span>로그인</span>
                </S.LoginTitle>
                <TextField 
                id="id"
                name="userId"
                inputType="text"
                value={login.LoginData.userId}
                onChange={login.handleLogin}
                onKeyDown={login.handleKeyDown} 
                placeholder="아이디를 입력해주세요"       
                />
            </S.LoginBox>
        </S.LoginContainer>
    )
}
export default Login;