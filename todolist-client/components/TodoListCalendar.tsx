import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { listDate, todoListArray } from '../recoil/recoil';
import { EventAvailable } from '@material-ui/icons';

const SubStyled = styled.div`
    z-index : 10;
    display : flex;
    flex-direction : column;

    .addCalendar{
        display : flex;
        align-items: center;
        justify-content: center;
        width : 60px;
        height : 60px;
        border-radius : 4px;
        background-color : white;
        border : 2px solid #EDFF75;
        outline : none;

        .calendarIcon{
            font-size: 3rem;
        }

        &:hover{
            cursor : pointer;
            background-color: whitesmoke;
        }
    }

    .calendarWrapper{
        position : relative;
        display: flex;
        justify-content: flex-start;
        .calendar{
            top: 0;
            left: 0;
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

    @media only screen and (max-width: 480px) {
        flex-direction: row;

        .addCalendar{
            width: 40px;
            height: 40px;

            .calendarIcon{
                font-size: 1.5rem;
            }
        }

        .calendarWrapper{
            position: static;
            .calendar{
                position : absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 50%;
        
                .react-calendar {
                    width: 100%;
                    height : 100%;
                    border: 1px solid #a0a096;
                    font-family: Arial, Helvetica, sans-serif;
                    line-height: 1.125em;
                }
            }
        }
    }
`;
const TodoListCalendar = () =>{

    const [onCalendar, setOnCalendar] = useState<boolean>(false);

    const [todoList, setTodoList] = useRecoilState(todoListArray);
    const [listDataValue, setListDateValue] = useRecoilState(listDate);

    const onToggleCalendar = () =>{
        setOnCalendar(!onCalendar);
    }

    const onChangeDate = (e: Date) =>{
        const date = `${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`;
        setListDateValue(date);
        setOnCalendar(false);
    }

    return(
        <SubStyled>
            <button className="addCalendar" onClick={onToggleCalendar}>
                <EventAvailable className="calendarIcon"/>
            </button>
            <div className="calendarWrapper">
                { onCalendar && <div className="calendar">
                    <Calendar onChange={onChangeDate} calendarType="Hebrew" value={todoList.date} />
                </div>}
            </div>
        </SubStyled>
    )
}

export default TodoListCalendar;