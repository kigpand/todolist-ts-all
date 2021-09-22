import '../styles/globals.css'
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import BACKGROUND from '../images/background.jpg';
import Image from 'next/image';

const AppWrapper = styled.div`
    position : relative;

    .background{
        z-index : -1;
        position: absolute;
        top: 0;
        left : 0;
        width : 100%;
        height : 100%;
        opacity : 0.7;
    }
`;
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AppWrapper>
        <Head>
          <title>Todolist</title>
        </Head>
        <Component {...pageProps} />
        <div className="background">
                <Image src={BACKGROUND} alt = "배경" layout="fill"/>
        </div>
      </AppWrapper>
    </RecoilRoot>
    )
}

export default MyApp;
