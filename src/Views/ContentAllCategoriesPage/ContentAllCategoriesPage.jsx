import React from 'react'
import {Col, Row} from 'reactstrap';
import iconCoat from '../../assets/images/icon-coat.svg';
import iconBasketFood from '../../assets/images/icon-basketFood.svg';
import iconLavazemtahrir from '../../assets/images/icon-lavazemtahrir.svg';
import iconSport from '../../assets/images/icon-sport.svg';
import iconChair from '../../assets/images/icon-chair.svg';
import iconHealth from '../../assets/images/icon-health.svg';
import iconDigital from '../../assets/images/icon-digital.svg';
import iconTools from '../../assets/images/icon-tools.svg';

import './ContentAllCategoriesPage.scss';


function ContentAllCategoriesPage() {
    return (
        <Row>
            <Col xs="12" sm="4" md="3"  xl="2">
                <Row className="bg-light">
                    <Col >
                        <Row className="categoryPicBox">
                            <img className="mr-4 categoryPic-digital" src={iconDigital} alt=""/>
                            <h5 className="titleCategory">محصولات دیجیتال</h5>
                        </Row>
                    </Col>
                </Row>
                <Row className="bg-light">
                    <Col >
                        <Row className="categoryPicBox">
                            <img className="mr-3 categoryPic" src={iconHealth} alt=""/>
                            <h5 className="titleCategory">بهداشت و سلامت</h5>
                        </Row>
                    </Col>
                </Row>
                <Row className="bg-light">
                    <Col >
                        <Row className="categoryPicBox">
                            <img className="mr-3 categoryPic-chair" src={iconChair} alt=""/>
                            <h5 className="titleCategory">خانه و آشپزخانه</h5>
                        </Row>
                    </Col>
                </Row>
                <Row className="bg-light">
                    <Col >
                        <Row className="categoryPicBox ">
                            <img className="mr-3 categoryPic" src={iconSport} alt=""/>
                            <h5 className="titleCategory">ورزش و سفر</h5>
                        </Row>
                    </Col>
                </Row>
                <Row className="bg-light">
                    <Col >
                        <Row className="categoryPicBox ">
                            <img className="mr-3 categoryPic" src={iconLavazemtahrir} alt=""/>
                            <h5 className="titleCategory">لوازم تحریر</h5>
                        </Row>
                    </Col>
                </Row>
                <Row className="bg-light">
                    <Col >
                        <Row className="categoryPicBox ">
                            <img className="mr-3 categoryPic" src={iconCoat} alt=""/>
                            <h5 className="titleCategory">مد و پوشاک</h5>
                        </Row>
                    </Col>
                </Row>
                <Row className="bg-light">
                    <Col >
                        <Row className="categoryPicBox ">
                            <img className="mr-3 categoryPic" src={iconBasketFood} alt=""/>
                            <h5 className="titleCategory">خوردنی‌ها و نوشیدنی‌ها</h5>
                        </Row>
                    </Col>
                </Row>
                <Row className="bg-light">
                    <Col >
                        <Row className="categoryPicBox ">
                            <img className="mr-3 categoryPic" src={iconTools} alt=""/>
                            <h5 className="titleCategory">ابزار و تجهیزات</h5>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col xs='8' className="d-none d-lg-flex">
             {/* <HomeSlider/> */}
            </Col>
        </Row>
    )
}

export default ContentAllCategoriesPage;
