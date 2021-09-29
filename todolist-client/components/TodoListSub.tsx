import styled from 'styled-components';
import TodoListCalendar from './TodoListCalendar';
import TodoListLogOutBtn from './TodoListLogOutBtn';
import TodoListTime from './TodoListTime';
import TodoListWeather from './TodoListWeather';

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .btns{
        display: flex;
        flex-direction: column;
    }

    @media only screen and (max-width: 1000px) {
        justify-content: space-around;
        flex-direction: row;
        align-items: center;

        .btns{
            flex-direction: row;
        }
    }
`
const TodoListSub = ({ onLogOut }) =>{


    return(
        <SubWrapper>
            <TodoListTime />
            <TodoListWeather />
            <div className="btns">
                <TodoListLogOutBtn onLogOut={onLogOut} />
                <TodoListCalendar />
            </div>
        </SubWrapper>
    )
}

export default TodoListSub;