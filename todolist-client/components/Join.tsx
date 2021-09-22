import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import styled from 'styled-components';
import { LoginType } from '../pages/Login';

const JoinWrapper = styled.div`
    width : 100%;
    height : 100%;
    position : absolute;
    z-index : 10;
    background-color : rgba(0,0,0,0.4);
    display : flex;
    align-items: center;
    justify-content : center;

    .joinForm{
        width : 400px;
        height : 600px;
        background-color : white;
        border-radius : 20px;
        display : flex;
        flex-direction : column;

        .title{
            text-align : center;
            margin-top : 2rem;
            font-weight : bold;
            font-size : 1.5rem;
        }

        .inputWrapper{
            margin : 2rem 0 0 1rem;

            div{
                font-weight : bold;
                margin-bottom : 0.5rem;
            }

            input{
                width : 90%;
                height : 30px;
                border : 1px solid lightgray;
            }

            .failPw{
                font-size : 0.5rem;
                color : red;
            }
        }

        .btns{
            display: flex;
            justify-content : center;
            margin-top : 2rem;

            .joinBtn,
            .cancleBtn{
                width : 100px;
                height : 30px;
                display : flex;
                align-items: center;
                justify-content : center;

                &:hover{
                    cursor : pointer;
                }
            }

            .joinBtn{
                background-color : #EDFF75;
                margin-right : 2rem;

                &:hover{
                    background-color : yellow;
                }
            }

            .cancleBtn{
                background-color : lightgray;

                &:hover{
                    background-color : gray;
                }
            }
        }
    }
`;

interface UserInfo extends LoginType{
    nickName : string,
}

interface Props{
    closeJoinDialog : () => void;
}

const Join = ({ closeJoinDialog }: Props) =>{

    const [userInfo, setUserInfo] = useState<UserInfo>({ id: "", nickName: "", pw: ""});
    const [pwCheck, setPwCheck] = useState<string>();
    const [pwCheckFlag, setPwCheckFlag] = useState<boolean>();

    const onJoinId = (e: ChangeEvent<HTMLInputElement>) =>{
        setUserInfo({ ...userInfo, id : e.target.value });
    }

    const onJoinPw = (e: ChangeEvent<HTMLInputElement>) =>{
        setUserInfo({ ...userInfo, pw : e.target.value });
    }

    const onJoinNick = (e: ChangeEvent<HTMLInputElement>) =>{
        setUserInfo({ ...userInfo, nickName : e.target.value });
    }

    const onPwCheck = (e: ChangeEvent<HTMLInputElement>) =>{
        setPwCheck(e.target.value);
    }

    const onJoinBtn = () =>{
        if(userInfo.id !== "" && userInfo.pw !== "" && userInfo.nickName !== ""){
            if(pwCheckFlag){
                alert("회원가입이 완료되었습니다");
                closeJoinDialog();
                return;
            }
            else{
                alert("비밀번호를 확인해주세요");
                return;
            }
        }
        else{
            alert("항목들을 전부 입력해주세요!");
            return;
        }
    }

    const onCancleBtn = () =>{
        closeJoinDialog();
    }

    useEffect(()=>{
        if(userInfo.pw !== "" && pwCheck !== ""){
            if(userInfo.pw === pwCheck){
                setPwCheckFlag(true);
            }
            else{
                setPwCheckFlag(false);
            }
        }
    },[userInfo.pw, pwCheck])

    return(
        <JoinWrapper>
            <div className="joinForm">
                <div className="title">회원가입</div>
                <div className="inputWrapper">
                    <div>아이디</div>
                    <input type="text" onChange={(e)=>onJoinId(e)}></input>
                </div>
                <div className="inputWrapper">
                    <div>닉네임</div>
                    <input type="text" onChange={(e)=>onJoinNick(e)}></input>
                </div>
                <div className="inputWrapper">
                    <div>비밀번호</div>
                    <input type="password" onChange={(e)=>onJoinPw(e)}></input>
                </div>
                <div className="inputWrapper">
                    <div>비밀번호 확인</div>
                    <input type="password" onChange={(e)=>onPwCheck(e)}></input>
                    {!pwCheckFlag && userInfo.pw && pwCheck && <div className="failPw">비밀번호를 확인해주세요</div>}
                </div>
                <div className="btns">
                    <div className="joinBtn" onClick={onJoinBtn}>회원가입</div>
                    <div className="cancleBtn" onClick={onCancleBtn}>취소</div>
                </div>
            </div>
        </JoinWrapper>
    )
}

export default Join;