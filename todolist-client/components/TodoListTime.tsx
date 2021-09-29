import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimeWrapper = styled.div`
    width : 200px;
    margin-left : 1rem;
    font-size : 2rem;

    @media only screen and (max-width: 480px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 40px;
        font-size: 1rem;
    }
`;
const TodoListTime = () =>{

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date());
        },1000);

        return () => clearInterval(timer);
    },[]);


    return(
        <TimeWrapper>
            {time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}
            :{time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}
            :{time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()}
        </TimeWrapper>
    )
}

export default TodoListTime;