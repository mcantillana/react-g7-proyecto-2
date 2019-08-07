import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';


export const TitleSection = props => {


    return(
        <Fragment>
        <Row className="mt-5 mb-3">
            <Col>
                <h1 className="h1">{props.title}</h1>
            </Col>
        </Row>        
        </Fragment>
    );
}

