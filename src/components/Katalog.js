import React, { Component } from 'react'


import { Container, Row, Col, Card} from 'react-bootstrap'
import Katalogview from './Katalogview'

 class Katalog extends Component {

  showProductsList(){
    return this.props.products.map ((product) =>{
      return (
        <Col  sm="3" key={product.id} >
        <Card >
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Text>
              {product.name}
            </Card.Text>
            <Card.Text>
            {product.price} kr.
            </Card.Text>
        
          </Card.Body>
        </Card>

        
        </Col>
      )
    })
  }

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


//function matchDispatchToProps (dispatch){
 //   return bindActionCreators({showMotorInfo: showMotorInfo,
        
      

//    }, dispatch)
//}

export default Katalog






