import styled from "styled-components";

export const LoginContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
`
export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;

`
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 60px;
`
export const LoginTitle = styled.div`
    text-align: left;
    width: 100%;
    height: 100px;
    span{
        font-family: Pretendard;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

`

export const SignUpButtonBox = styled.div`
    position: absolute;
    display: flex;
    gap: 8px;
    align-items: end;
    justify-content: center;
    bottom: 0;
    width: 100%;
    height: 10%;
    p{
        cursor: pointer;
        color: #FFA800;
    }
`