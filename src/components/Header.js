
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { FiShoppingBag } from 'react-icons/fi'
import styled from 'styled-components'
 
const StyledRow = styled.div`
background: white;
height: 100px;
border-bottom: solid 1px lightgrey;
`
const Logo = styled.div`

color: #26408B;
@import url('https://fonts.googleapis.com/css?family=Cairo');
font-family: 'Cairo', serif;
font-size: 38px;
font-weight: bold;
padding-top: 20px;
padding-left: 10px;
`

const Top = styled.div`
padding-top: 40px;
`
const TopVarukorg = styled.div`
padding-top: 20px;
`
export default class Header extends Component {

    

    render() {
        return (
            <StyledRow>  
          <Container fluid >
              
  <Row >
      
    <Col  sm={2}>
   <Logo> Saga </Logo>
    </Col>
  
    <Col  sm={2}><Link to='/'><Top>Katalog</Top></Link></Col>
    <Col  sm={2}>  <Link to='/about'><Top>Om projekt</Top></Link></Col>
    <Col> </Col>
    <Col  sm={1}>  <Link to='/varukorg'><TopVarukorg> <Button variant="light"><FiShoppingBag/> Varukorg</Button></TopVarukorg></Link></Col>
  
  </Row>
  
</Container>
</StyledRow>
            
          
     
        
        )
    }
}
