import { createGlobalStyle } from 'styled-components';

interface globalprops{
  isOn: boolean
}

const GlobalStyle = createGlobalStyle<globalprops>`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body{
    height: 100vh;
    background-color: ${(props) => (props.isOn ? '#328ba8' : '#0a1a2e')};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  h1{
    font-size: 1.5em;
    color: white;
  }
`;

export default GlobalStyle;
