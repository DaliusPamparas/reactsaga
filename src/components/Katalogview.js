import React, { Component } from 'react'
import{bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Row, Col, Card} from 'react-bootstrap'
import { addToCart } from '../actions/index'



class Katalogview extends Component {
  
  render() {
    let productsList = this.props.products.map(product=>{
      return(
        <Col  sm="3" key={product.id} >
        <Card onClick={() => this.props.addToCart (product)}>
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
    return (
      <Row>
              
              {productsList} 
         
            </Row>
    )
  }
}
function mapStateToProps (state){
  return {
    products: state.init.products

  };  
}

function matchDispatchToProps (dispatch){
 return bindActionCreators({addToCart: addToCart,
        
      

   }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Katalogview);
 