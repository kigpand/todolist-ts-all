import styled from 'styled-components';

const InputWrapper = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-bottom: 4rem;

    .idContainer,
    .pwContainer{
        width : 70%;
        display : flex;
        flex-direction : column;
        margin-bottom: 2rem;

        input{
            margin-top : 0.3rem;
            border : none;
            border-bottom : 2px solid black;
            outline : none;
            height : 30px;
            background-color : transparent;
        }
    }
`;
const LoginInput  = ({ onSetId, onSetPw}) =>{

    return(
        <InputWrapper>
            <div className="idContainer">
                <label className="idLabel">UserId</label>
                <input type="text" className="idInput" onChange={(e)=>{onSetId(e.target.value)}}/>
            </div>
            <div className="pwContainer">
                <label className="pwLabel">Password</label>
                <input type="password" className="pwInput" onChange={(e)=>{onSetPw(e.target.value)}}/>
            </div>
        </InputWrapper>
    )
}

export default LoginInput;