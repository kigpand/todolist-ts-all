import styled from 'styled-components';
import { TodoItemType } from '../recoil/recoil';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useState } from 'react';

interface Props {
    list : TodoItemType;
    onItemRemove : (id : number)=> void;
}

interface TodoState{
    fontColor : string;
    checkColor : string;
}

const ItemWrapper = styled.div<TodoState>`
    width : 100%;
    display : flex;
    margin : 1rem 0 0 1rem;
    font-size : 1.2rem;

    .checkIcon{
        font-size : 1.5rem;
        color : ${(props)=>props.checkColor};

        &:hover{
            cursor : pointer;
        }
    }

    .content{
        color : ${(props)=>props.fontColor};
        margin-left : 1rem;
        width : 70%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    
    .closeBtn{
        font-size : 1.5rem;
        color : gray;
        &:hover{
            cursor : pointer;
            color : red;
        }
    }

    @media only screen and (max-width: 1000px) {
        width : 80%;
    }
`;
const TodoListItem = ({ list, onItemRemove }: Props) =>{
    const [todoState, setTodoState] = useState<TodoState>({ fontColor : "black", checkColor : "gray"})

    const onListCheck = () =>{
        if(todoState.fontColor === "black"){
            setTodoState({ fontColor : "lightgray", checkColor : "green"});
        }
        else{
            setTodoState({ fontColor : "black", checkColor : "gray"});
        }
    }

    return(
        <ItemWrapper fontColor={todoState.fontColor} checkColor={todoState.checkColor}>
            <CheckCircleOutlineIcon className="checkIcon" onClick={onListCheck}/>
            <div className="content">{list.content}</div>
            <HighlightOffIcon className="closeBtn" onClick={()=>onItemRemove(list.id)} />
        </ItemWrapper>
    )
}

export default TodoListItem;