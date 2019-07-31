import React, { Component } from 'react'
//import{bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Container, Row, Col, Card} from 'react-bootstrap'

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
        <Row>
          {this.showProductsList()}
         {/*  <Col  sm="3">
          <Card >
            <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0628/2445/products/4252_BT_large.jpg?v=1536090756" />
            <Card.Body>
              <Card.Text>
                Some name
              </Card.Text>
              <Card.Text>
                500 kr.
              </Card.Text>
          
            </Card.Body>
          </Card>

          
          </Col> */}

         

         
         
        </Row>

      </Container>
      </div>
    )
  }
}
function mapStateToProps (state){
  return {
    products: state.products

  };  
}

//function matchDispatchToProps (dispatch){
 //   return bindActionCreators({showMotorInfo: showMotorInfo,
        
      

//    }, dispatch)
//}

export default connect(mapStateToProps)(Katalog);






