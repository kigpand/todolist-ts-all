import styled from 'styled-components';
import TodoListCalendar from './TodoListCalendar';
import TodoListLogOutBtn from './TodoListLogOutBtn';
import TodoListTime from './TodoListTime';
import TodoListWeather from './TodoListWeather';

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 480px) {
        flex-direction: row;
    }
`
const TodoListSub = ({ onLogOut }) =>{


    return(
        <SubWrapper>
            <TodoListTime />
            <TodoListWeather />
            <TodoListLogOutBtn onLogOut={onLogOut} />
            <TodoListCalendar />
        </SubWrapper>
    )
}

export default TodoListSub;