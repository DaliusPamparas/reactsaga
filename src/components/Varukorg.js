import React, {Component} from "react";
import { Container, Row, Col } from 'react-bootstrap'
import VarukorgView from './Varukorgview'

export default class Varukorg extends Component {
  render() {
    return (
      <div>
        <Container >
        <Row >

          <Col>
          <h1>
           Varukorg
          </h1> 
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