import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const SlyledH1 = styled.h1`
padding: 40px 0px 10px 0px;
margin-bottom: .1rem;
@import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');
font-family: 'Cairo', serif;
font-size: 48px;
color: grey;

`
const About = () => {
    return (
        <div>
            <Container >
            <Row >
    
              <Col>
              <SlyledH1>
                Om projekt
              </SlyledH1> 
              </Col>
    
            </Row>
            <Row >
    
              <Col>
               Projekt skapades av Dalius för att förbättra inom React, Redux, Saga, Styled components, Yarn, Bootstrap, Redux-logger.
              </Col>
    
            </Row>
          </Container>
        </div>
    );
};

export default About;