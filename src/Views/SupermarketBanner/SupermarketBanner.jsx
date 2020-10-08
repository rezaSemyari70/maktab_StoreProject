import React from 'react';
import {Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom' ;
import imageBanner from '../../assets/images/supermarket_category_banner.png';
import './SupermarketBanner.scss';

function SupermarketBanner() {
    return (
        <Row className="bg-warning mx-5 p-3 mt-4 contentSupermarketBanner p-0">
        <Link to ={`/CategoryProductsPage/81`}>
            <Col>
                <Row className="d-flex justify-content-center align-self-center p-0">
                    {/* <span className="titleSupermarketBanner">
                    محصولات سوپرمارکتی
                    </span> */}
                    {/* <div className="supermarketBannerPic">
                        <img src={imageBanner} alt=""/>
                    </div> */}
                    <div className="digitalBanner p-0">
                                <img className="picCategoryBanner" src={imageBanner} alt="digital-banner-pic"/>
                            </div>
                </Row>
                
            </Col>
            </Link>
        </Row>
    )
}

export default SupermarketBanner;