import React from 'react';
import { Card } from 'react-bootstrap';

import './style.scss';


export const Character = ({id, name, status, species, gender, image}) => {

    return (
        <Card className="character">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>
              {name} ({gender})
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