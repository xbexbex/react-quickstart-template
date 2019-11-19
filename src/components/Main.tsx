import React, { Component } from 'react';
import styled from 'styled-components';

import { Theme } from '../styles';

export default class Main extends Component {

  constructor(props: {}) {
    super(props)
  }

  render() {
    return (
      <Col>
        <Row>
          <Square>
            <Heading>There</Heading>
          </Square>
          <Square>
            <Heading>is</Heading>
          </Square>
        </Row>
        <Row>
          <Square>
            <Heading>text.</Heading>
          </Square>
          <Square>
            <Loading />
          </Square>
        </Row>
      </Col>
    )
  }
}

const Col: any = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
`;

const Row: any = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Square: any = styled.div`
  display: flex;
  flex: 1;
  background-color: ${Theme.color.primary};
  margin: 5px;
`;

const Heading: any = styled.p`
  color: ${Theme.color.secondary};
  font-size: 7rem;
  margin: auto;
`;

const Loading: any = styled.img.attrs(() => ({
  src: require('../assets/loading.svg'),
}))`
  color: ${Theme.color.secondary};
  width: 10rem;
  margin: auto;
`;
