import Link from 'next/link';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  width : 100vw;
  height : 100vh;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;

  .title{
    text-align : center;
    font-family: "HSYuji-Regular";
    font-size : 2rem;

    div{
      margin-top : 1rem;
    }
  }

  .loginBtn{
    margin-top : 3rem;
    width : 200px;
    height : 50px;
    background-color : lightgreen;
    color : white;
    display : flex;
    align-items : center;
    justify-content : center;
    font-weight : bold;
    font-size : 1.5rem;
    font-family: "ImcreSoojin";

    &:hover{
      background-color : green;
    }
  }
  
`;
const Home = () =>{

  return(
    <HomeWrapper>
      <div className = "title">
        <div>By failing to prepare, you are preparing to fail.</div>
        <div>준비에 실패하는 것은 실패를 준비하는 것이다.</div>
        <div>- 벤자민 프랭클린 -</div>
      </div>
      <Link href="/Login"><a className="loginBtn">Login</a></Link>
    </HomeWrapper>
  )
}

export default Home;

