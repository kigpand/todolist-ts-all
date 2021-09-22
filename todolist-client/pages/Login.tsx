import styled from 'styled-components';
import LoginInput from '../components/LoginInput';
import LoginBtn from '../components/LoginBtn';
import {  useState } from 'react';
import Join from '../components/Join';

export interface LoginType  {
    id : string,
    pw : string
}

const LoginWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    align-items : center;
    justify-content : center;
    position : relative;

    .loginForm{
        background-color : lightgreen;
        width : 450px;
        height : 600px;
        border-radius : 8px;
        box-shadow: 0px 0px 29px -2px #000000;
        background-color : none;
        color : black;
        font-family: 'HSYuji-Regular';
        display : flex;
        flex-direction: column;
        align-items: center;
        z-index : 1;

        .title{
            font-size : 3rem;
            margin-top : 3rem;
        }

        .otherLogin{
            margin : 3rem 0;
            font-size : 2rem;
        }
    }
`;
const Login = () =>{

    const [loginInfo, setLoginInfo] = useState<LoginType>({ id: null, pw: null});
    const [onJoin, setOnJoin] = useState<boolean>(false);

    const onSetId = (id: string) =>{
        setLoginInfo({ id : id, pw: loginInfo.pw });
    }

    const onSetPw = (pw: string) =>{
        setLoginInfo({ id: loginInfo.id, pw: pw });
    }

    const onJoinDialog = () =>{
        setOnJoin(true);
    }

    const closeJoinDialog = () =>{
        setOnJoin(false);
    }

    return(
        <LoginWrapper>
            { onJoin 
            ? <Join closeJoinDialog = {closeJoinDialog}/>
            :<div className="loginForm">
                <div className="title">WelCome!</div>
                <div className="otherLogin">Other</div>
                <LoginInput onSetId={onSetId} onSetPw={onSetPw}/>
                <LoginBtn id = {loginInfo.id} pw = {loginInfo.pw} onJoinDialog={onJoinDialog}/>
            </div>
            }
        </LoginWrapper>
    )
}

export default Login;