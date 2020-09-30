import React from 'react'
import {Row , Col} from 'reactstrap';

import './Spinner.scss';

function Spinner() {
    return (
        <Col className="contentSpinner ">
            <Row className="justify-content-center">
                <div className="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Row>
        </Col>
    )
}

export default Spinner
