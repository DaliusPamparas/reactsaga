
import React, { Component } from 'react'
//import{bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Row, Col, Table} from 'react-bootstrap'
//import { addToCart } from '../actions/index'
import { Trash } from 'react-feather'


class Varukorgview extends Component {
  
  render() {
    let cartproductsList = this.props.cartProducts.map(product=>{
        return(
         
  
          
              <tbody key={product.id}>
               
                <tr >
                  
                  <td>{product.name}  </td>
                  <td> <Trash/> Remove</td>
                  <td>{product.price} kr.</td>
               
                </tr>
              </tbody>
         
         
              
        )
      })
    /* let cartproductsList = this.props.cartProducts.map(product=>{
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
    }) */




    return (
      <Row>
              <Col>
              <Table responsive>
              <thead>
                <tr>
                 
                  <th>Namn</th>
                  <th>Antal</th>
                  <th>Pris/stk</th>
                
                </tr>
              </thead>
              {cartproductsList} 
              </Table>
         </Col>
            </Row>
    )
  }
}
function mapStateToProps (state){
  return {
    cartProducts: state.cart.products

  };  
}

/* function matchDispatchToProps (dispatch){
 return bindActionCreators({addToCart: addToCart,
        
      

   }, dispatch)
} */

export default connect(mapStateToProps)(Varukorgview);