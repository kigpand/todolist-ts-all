import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListArray } from '../recoil/recoil';

const SubStyled = styled.div`
    z-index : 10;
    display : flex;
    flex-direction : column;
    margin-bottom : 1rem;
    width : 400px;

    .addCalendar{
        width : 100%;
        border-radius : 4px;
        background-color : #EDFF75;
        font-size : 2rem;
        color : black;
        font-family: 'HSYuji-Regular';
        border : none;
        outline : none;

        &:hover{
            cursor : pointer;
        }
    }

    .calendarWrapper{
        position : relative;
        .calendar{
            position : absolute;
        }
    }

    .playBtn{
        font-size : 3rem;

        &:hover{
            color : darkblue;
            cursor : pointer;
        }
    }
`;
const TodoListSub = () =>{

    const [onCalendar, setOnCalendar] = useState<boolean>(false);

    const [todoList, setTodoList] = useRecoilState(todoListArray);

    const onToggleCalendar = () =>{
        setOnCalendar(!onCalendar);
    }

    const onChangeDate = (e: Date) =>{
        setTodoList({ date : e, item : []})
        setOnCalendar(false);
    }

    return(
        <SubStyled>
            <button className="addCalendar" onClick={onToggleCalendar}>
                날짜 지정하기
            </button>
            <div className="calendarWrapper">
                { onCalendar && <div className="calendar">
                    <Calendar onChange={onChangeDate} value={todoList.date}/>
                </div>}
            </div>
        </SubStyled>
    )
}

export default TodoListSub;