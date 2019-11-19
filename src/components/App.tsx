import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme, GlobalStyle } from '../styles';
import Main from './Main';

export default class App extends Component {

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Main></Main>
      </ThemeProvider>
    );
  }
}
