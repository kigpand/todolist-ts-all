import styled from 'styled-components';
import TodoListCalendar from './TodoListCalendar';

const SubWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const TodoListSub = () =>{
    return(
        <SubWrapper>
            <TodoListCalendar />
        </SubWrapper>
    )
}

export default TodoListSub;