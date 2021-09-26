import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { todoListArray, TodoItemType, userInfo, listDate } from '../recoil/recoil';
import TodoListItem from './TodoListItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';
import { url } from '../config/config';

const MainWrapper = styled.div`
    background-color : white;
    width : 400px;
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
                item.push({ id: items.id, content: items.content });
            })
            setTodoList({ date: new Date(Date.parse(listDateValue)), item: [...item] })
        })
        .catch((err)=>{
            console.log(err);
        })
    },[listDateValue]);

    const onItemRemove = (id : number): void =>{
        const result: TodoItemType[] = todoList.item.filter((item) => item.id !== id)
        setTodoList({ date : todoList.date, item : [...result] });
    }

    const onLogOut = () =>{
        setUserData({ id: "", nick: ""});
        sessionStorage.setItem("user_id", "");
        sessionStorage.setItem("user_nick", "");
        router.push('/Main');
    }


    return(
        <MainWrapper>
            <div onClick={onLogOut}>로그아웃</div>
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
        </MainWrapper>
    )
}

export default TodoListMain;