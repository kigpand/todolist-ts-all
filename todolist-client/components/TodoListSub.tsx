import styled from 'styled-components';
import TodoListCalendar from './TodoListCalendar';
import TodoListLogOutBtn from './TodoListLogOutBtn';
import TodoListTime from './TodoListTime';

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const TodoListSub = ({ onLogOut }) =>{
    return(
        <SubWrapper>
            <TodoListTime />
            <TodoListLogOutBtn onLogOut={onLogOut} />
            <TodoListCalendar />
        </SubWrapper>
    )
}

export default TodoListSub;