import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Wishlist } from './Wishlist';




import './style.scss';

export const Episode = ({name, air_date, episode, created, id}) => {

    return (
        <Card className="episode">
          <Card.Body>
            <Card.Title>
                <Row>
                    <Col xs="10">{name}</Col>
                    <Col xs="2"><Wishlist episode_id={id} /></Col>
                </Row>
            </Card.Title>

            <Card.Text>
                {episode} / {Date.parse(air_date)}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Created {created}</small>
          </Card.Footer>
        </Card>
    );
}