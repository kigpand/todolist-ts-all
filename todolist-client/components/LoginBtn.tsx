import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';
import { LoginType } from '../pages/Login';

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

    const onLoginSubmit = () =>{
        axios.get('http://localhost:3888/login').then((e)=>{
            console.log(e.data);
        });
        
        // router.push('/TodoList')
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