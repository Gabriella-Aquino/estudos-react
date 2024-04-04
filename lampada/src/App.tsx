import React, { useState } from 'react';
import Lampada from './components/lampada/Lampada';
import styled from 'styled-components';
import GlobalStyle from './style/GlobalStyle';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [onBackGround, setOnBackGround] = useState<boolean>(false);

  const toggleBackGround = () =>{
    setOnBackGround(!onBackGround)
  }

  return (
    <AppContainer>
      <GlobalStyle isOn = {onBackGround}/>
      <h1>Clique na lampada para ligar/desligar</h1>
      <Lampada toggleBackground={toggleBackGround}/>
    </AppContainer>
    
  );
}

export default App;
