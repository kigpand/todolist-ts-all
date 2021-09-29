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
        background-color : none;
        width : 450px;
        height : 600px;
        color : black;
        font-family: 'HSYuji-Regular';
        display : flex;
        flex-direction: column;
        align-items: center;
        z-index : 1;

        .title{
            font-size : 3rem;
            margin : 3rem 0;
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
                <LoginInput onSetId={onSetId} onSetPw={onSetPw}/>
                <LoginBtn id = {loginInfo.id} pw = {loginInfo.pw} onJoinDialog={onJoinDialog}/>
            </div>
            }
        </LoginWrapper>
    )
}

export default Login;