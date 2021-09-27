import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimeWrapper = styled.div`
    margin-left : 1rem;
    font-size : 2rem;
`;
const TodoListTime = () =>{

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        },1000);
    },[time]);


    return(
        <TimeWrapper>
            {time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}
            :{time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}
            :{time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()}
        </TimeWrapper>
    )
}

export default TodoListTime;