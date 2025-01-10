import React ,{useState,useCallback} from "react"
import {Login} from "@hithere/types";
import { HiThereToast } from "@hithere/toastify/";


export const useLogin = () => {
    const [LoginData, setLoginData] = useState<Login>({
        userId: "",
        userPassword:"",
      });


      const handleSignInData = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
          const {  name, value } = e.target;
          setLoginData((prev) => ({ ...prev, [name]: value }));
        },
        [LoginData]
      );
    const handleLogin = ()=>{
        if (LoginData.userId === "") {
            HiThereToast.showInfo("아이디를 입력해주세요");
            return;
          }
      
          if (LoginData.userPassword === "") {
            HiThereToast.showInfo("비밀번호를 입력해주세요");
            return;
          }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
          handleLogin();
        }
      };

    return{
        LoginData,
        setLoginData,
        handleKeyDown,
        handleLogin,
        handleSignInData,
    }
}