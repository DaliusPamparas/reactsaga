import React, { Component } from 'react'


import { Container, Row, Col} from 'react-bootstrap'
import Katalogview from './Katalogview'

 class Katalog extends Component {

  

  render() {
    return (
      <div>
        <Container >
        <Row >

          <Col>
          <h1>
            Katalog
          </h1> 
          </Col>

        </Row>
        
         <Katalogview/>
        

      </Container>
      </div>
    )
  }
}




export default Katalog






