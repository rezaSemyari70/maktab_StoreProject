import React from 'react';
import {Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom' ;

import './SupermarketBanner.scss';

function SupermarketBanner() {
    return (
        <Row className="bg-warning mx-5 p-3 mt-4 contentSupermarketBanner">
        <Link to ={`/CategoryProductsPage/81`}>
            <Col>
                <Row className="d-flex justify-content-center align-self-center">
                    <span className="titleSupermarketBanner">
                    محصولات سوپرمارکتی
                    </span>
                    <div className="supermarketBannerPic"></div>
                </Row>
                
            </Col>
            </Link>
        </Row>
    )
}

export default SupermarketBanner;