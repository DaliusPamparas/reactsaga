
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { FiShoppingBag } from 'react-icons/fi';

export default class Header extends Component {
    render() {
        return (
            <div>
                    <div>
          <Container fluid >
  <Row >
    <Col  sm={2}>ReactSaga</Col>
    <Col  sm={2}><Link to='/'>Katalog</Link></Col>
    <Col  sm={2}>  <Link to='/about'>About</Link></Col>
    <Col> </Col>
    <Col  sm={1}>  <Link to='/varukorg'> <Button variant="light"><FiShoppingBag/> Varukorg</Button></Link></Col>
  </Row>
  
</Container>
            
          
     
        </div>
            </div>
        )
    }
}
