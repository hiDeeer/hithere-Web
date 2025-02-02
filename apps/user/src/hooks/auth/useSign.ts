import React ,{useState,useCallback} from "react"
import { Sign } from "@hithere/types";
import { HiThereToast } from "@hithere/toastify";
import { useSectionStore } from "@/store/sign/signStore";
export const useSign = () => {
    const { section, setSection } = useSectionStore();
    const [ signData, setSignData] = useState<Sign>({
        userId: "",
        userPassword: "",
        userChckPassword: "",
        userName: "",
        userPhone: "",
      });

      const handleSignInData = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
          const {  name, value } = e.target;
          setSignData((prev) => ({ ...prev, [name]: value }));
        },
        [signData]
      );

      const submitSignFrist = () => {
        if (signData.userId === "") {
          HiThereToast.showInfo("아이디를 입력해주세요");
          return;
        }
    
        if (signData.userPassword === "") {
          HiThereToast.showInfo("비밀번호를 입력해주세요");
          return;
        }
        if (signData.userChckPassword === signData.userPassword ) {
          HiThereToast.showInfo("비밀번호가 일치하지 않습니다.");
          return;
        }
        setSection("signSecond");
      }
      const submitSignSecond = ()=>{
          if (signData.userName === "") {
            HiThereToast.showInfo("이름을 입력해주세요");
            return;
          }
          if (signData.userPhone === "") {
            HiThereToast.showInfo("번호를 입력해주세요");
          }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        if(section === "signFirst"){
          submitSignFrist();
        }else if(section === "signSecond"){
          submitSignSecond();
        }
      }
    };

      return{
        signData,
        handleSignInData,
        submitSignSecond,
        handleKeyDown,
      }
}