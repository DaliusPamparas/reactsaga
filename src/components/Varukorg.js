import React, {Component} from "react";
import {Column, Container, Row} from "react-rasta";

export default class Varukorg extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Column size={3}>Left</Column>
          <Column size={{xs: 9, md: 3}}>Middle 1</Column>
          <Column size={{xs: 9, md: 3}}>Middle 2</Column>
          <Column size={3}>Right</Column>
        </Row>
      </Container>
    );
  }
}