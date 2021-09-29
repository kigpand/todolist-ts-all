import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { todoListArray, TodoItemType, userInfo, listDate } from '../recoil/recoil';
import TodoListItem from './TodoListItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';
import { url } from '../config/config';
import TodoListSub from './TodoListSub';

const MainWrapper = styled.div`

    margin-left : 10%;
    display: flex;

    .body{
        background-color : white;
        border : 2px solid #EDFF75;
        width : 600px;
        height : 600px;
        border-radius : 20px;
        z-index : 1;
        display : flex;
        flex-direction : column;

        .line{
            margin : 1rem 0 0 1rem;
            width : 100%;
            height : 3px;
            background-color : lightgray;
        }

        .title{
            width : 80%;
            height : 10%;
            margin : 1rem 0 0 1rem;
            font-size : 1.2rem;
            font-weight : bold;
        }

        .lists{
            width : 100%;
            height : 80%;
        }

        .addBtn{
            width : 100%;
            height : 10%;
            display : flex;
            align-items: center;
            justify-content : center;

            .addIcon{
                font-size : 2rem;
                color : green;

                &:hover{
                    color : darkgreen;
                    cursor : pointer;
                }
            }
        }
    }
    
    @media only screen and (max-width: 1000px) {
        width: 100%;
        margin : 0;
        flex-direction: column-reverse;

        .body{
            width: 100%;
            height: 600px;
        }
    }
`;

interface Props{
    onOpenDialog: () => void;
}

interface Items{
    id: number;
    user_id: string;
    content_date: string;
    content: string;
}

const TodoListMain = ({ onOpenDialog }: Props) =>{

    const router = useRouter();
    const [userData, setUserData] = useRecoilState(userInfo);
    const listDateValue = useRecoilValue(listDate);    
    const [todoList, setTodoList] = useRecoilState(todoListArray);

    useEffect(()=>{
        axios.post(`${url}/board/loadBoard`, { userId: userData.id, date: listDateValue })
        .then((v)=>{
            const item: TodoItemType[] = [];
            v.data.result.map((items: Items)=>{
                item.push({ id: items.id, userId: items.user_id, content: items.content });
            })
            setTodoList({ date: new Date(Date.parse(listDateValue)), item: [...item] })
        })
        .catch((err)=>{
            console.log(err);
        })
    },[listDateValue, setTodoList, userData.id]);

    const onItemRemove = (id : number): void =>{
        axios.post(`${url}/board/deleteBoard`,{ id: id })
        .then((v)=>{
            if(v.data.result){
                const result: TodoItemType[] = todoList.item.filter((item) => item.id !== id)
                setTodoList({ date : todoList.date, item : [...result] });
            }
            else{
                alert("게시글 삭제에 실패했습니다");
            }
        })
    }

    const onLogOut = () =>{
        setUserData({ id: "", nick: ""});
        sessionStorage.setItem("user_id", "");
        sessionStorage.setItem("user_nick", "");
        router.push('/Main');
    }

    return(
        <MainWrapper>
            <div className="body">
                <div className = "title">
                    {todoList.date.getFullYear()}년 {todoList.date.getMonth()+1}월 {todoList.date.getDate()}일
                    <div className = "line" />
                </div>
                <div className="lists">
                    {todoList.item.map((v) =>{
                        return( 
                        <TodoListItem key={v.id} list={v} onItemRemove={onItemRemove}/>
                    )})}
                </div>
                <div className="addBtn" onClick={onOpenDialog}><AddCircleOutlineIcon className="addIcon"/></div>
            </div>
            <TodoListSub onLogOut ={onLogOut}/>
        </MainWrapper>
    )
}

export default TodoListMain;