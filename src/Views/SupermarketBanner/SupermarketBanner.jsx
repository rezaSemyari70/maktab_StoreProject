import React from 'react';
import {Row, Col} from 'reactstrap';
import bannerPic from '../../assets/images/supermarketBanner.png';

import './SupermarketBanner.scss';

function SupermarketBanner() {
    return (
        <Row className="bg-warning mx-5 p-3 mt-4 contentSupermarketBanner">
            <Col>
                <Row className="d-flex justify-content-center align-self-center">
                    <span className="titleSupermarketBanner">
                    محصولات سوپرمارکتی
                    </span>
                    <div className="supermarketBannerPic"></div>
                </Row>
                
            </Col>
        </Row>
    )
}

export default SupermarketBanner;