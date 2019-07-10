import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap'
const Katalog = () => {
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
          <Col  sm="3">
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

          
          </Col>

          <Col  sm="3">
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

          
          </Col>

          <Col  sm="3">
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

          
          </Col>
          <Col  sm="3">
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

          
          </Col>
        </Row>

      </Container>
      
    </div>
  );
};

export default Katalog;