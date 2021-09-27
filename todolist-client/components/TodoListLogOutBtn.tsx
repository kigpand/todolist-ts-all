
import { ExitToApp } from '@material-ui/icons';
import styled from 'styled-components';

const LogOutWrapper = styled.div`
    .logOutBtn{
        width : 60px;
        height : 60px;
        border-radius : 4px;
        background-color : white;
        border : 2px solid #EDFF75;
        outline : none;
        display : flex;
        align-items: center;
        justify-content: center;

        .ExitIcon{
            font-size: 3rem;
        }

        &:hover{
            cursor : pointer;
        }
    }
`;
const TodoListLogOutBtn = ({ onLogOut }) =>{
    return(
        <LogOutWrapper>
            <div className="logOutBtn" onClick={onLogOut}>
                <ExitToApp className="ExitIcon"/>
            </div>
        </LogOutWrapper>
    )
}

export default TodoListLogOutBtn;