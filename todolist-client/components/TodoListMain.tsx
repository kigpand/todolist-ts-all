import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { todoListArray, TodoItemType } from '../recoil/recoil';
import TodoListItem from './TodoListItem';
import { dummyArray } from '../pages/dummy';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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

const TodoListMain = ({ onOpenDialog }: Props) =>{

    const [todoList, setTodoList] = useRecoilState(todoListArray);

    useEffect(()=>{
        setTodoList({ date : new Date(), item : [...dummyArray] });
    },[]);

    const onItemRemove = (id : number): void =>{
        const result: TodoItemType[] = todoList.item.filter((item) => item.id !== id)
        setTodoList({ date : todoList.date, item : [...result] });
    }


    return(
        <MainWrapper>
            <div className = "title">
                {todoList.date.getFullYear()}년 {todoList.date.getMonth()}월 {todoList.date.getDate()}일
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