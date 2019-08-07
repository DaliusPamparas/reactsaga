import React, { Component } from 'react'
import{bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Row, Col, Card} from 'react-bootstrap'
import { takeproduct } from '../actions/index'

 class Katalogview extends Component {
    showProductsList(){
        return this.props.products.map ((product) =>{
          return (
            <Col  sm="3" key={product.id} >
            <Card onClick={() => this.props.takeproduct (product)}>
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
            <Row>
                {this.showProductsList()}
         
            </Row>
        )
    }
}
function mapStateToProps (state){
    return {
      products: state.products
  
    };  
  }
  
  function matchDispatchToProps (dispatch){
   return bindActionCreators({takeproduct: takeproduct,
          
        
  
     }, dispatch)
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(Katalogview);