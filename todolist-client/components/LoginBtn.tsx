import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import { LoginType } from '../pages/Login';
import { url } from '../config/config';
import { useRecoilState } from 'recoil';
import { userInfo } from '../recoil/recoil';

const BtnWrapper = styled.div`
    width : 100%;
    margin-top : 2rem;
    display : flex;
    flex-direction : column;
    align-items : center;
    
    .loginBtn,
    .joinBtn{
        width : 70%;
        height : 40px;
        margin-top : 0.5rem;
        display : flex;
        align-items : center;
        justify-content : center;

        &:hover{
            cursor : pointer;
        }
    }

    .loginBtn{
        background-color : lightblue;
        &:hover{
            background-color : skyblue;
        }
    }

    .joinBtn{
        background-color : #EDFF75;
        &:hover{
            background-color : yellow;
        }
    }
`;

interface Props extends LoginType{
    onJoinDialog : ()=> void;
}

const LoginBtn = ({ id, pw, onJoinDialog } : Props) =>{
    const router = useRouter();
    const [userData, setUserData] = useRecoilState(userInfo);

    const onLoginSubmit = async () =>{
        await axios.post(`${url}/user/login`, {id: id, pw: pw}).then((e)=>{
            sessionStorage.setItem("user_id", e.data.result.id);
            sessionStorage.setItem("user_nick", e.data.result.nick);
            setUserData({ id: e.data.result.id, nick: e.data.result.nick });
        });
        router.push('/Main')
    }

    const onJoin = () =>{
        onJoinDialog();
    }

    return(
        <BtnWrapper>
            <div className="loginBtn" onClick={onLoginSubmit}>로그인</div>
            <div className="joinBtn" onClick={onJoin}>회원가입</div>
        </BtnWrapper>
    )
}

export default LoginBtn;