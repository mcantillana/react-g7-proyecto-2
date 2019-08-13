import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Wishlist } from './Wishlist';
import './style.scss';


export const Character = ({id, name, status, species, gender, image}) => {

    return (
        <Card className="character">
          <Card.Img variant="top" src={image} />
          <Card.Body>
     
            <Card.Title>
                <Row>
                    <Col xs="10">{name} ({gender})</Col>
                    <Col xs="2"><Wishlist character_id={id} /></Col>
                </Row>
            </Card.Title>
            <Card.Text>
            
              {/*<ul>*/}
                  <li>Status: {status}</li>
                  <li>Species: {species}</li>
              {/*</ul>*/}
            
            </Card.Text>
          </Card.Body>
        </Card>
    );
}