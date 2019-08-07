import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from "react-icons/fa";

import moment from 'moment';




import './style.scss';

export const Episode = ({name, air_date, episode, created, id}) => {
  // const getDateCreated(date_str) {
  //   const _date = Date.parse(date_str);
  //   return _date.getDate()

  // }
    return (
        <Card className="episode">
          <Card.Body>
            <Card.Title>
                <Row>
                    <Col xs="10">{name}</Col>
                    <Col xs="2"><FaRegHeart /></Col>
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