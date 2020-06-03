import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './them';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>hello</h1>
    </ThemeProvider>
  );
}

export default App;
