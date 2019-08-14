import React, {Component} from "react";
import { Container, Row, Col } from 'react-bootstrap'
import VarukorgView from './Varukorgview'

import styled from 'styled-components'

const SlyledH1 = styled.h1`
padding: 40px 0px 10px 0px;
margin-bottom: .1rem;
@import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');
font-family: 'Cairo', serif;
font-size: 48px;
color: grey;

`
export default class Varukorg extends Component {
  render() {
    return (
      <div>
        <Container >
        <Row >

          <Col>
          <SlyledH1>
           Varukorg
          </SlyledH1> 
          </Col>

        </Row>
        <Row>
          <Col>
          <VarukorgView/>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}