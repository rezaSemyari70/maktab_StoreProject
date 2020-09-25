import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CategoriesSliderHome.scss';
import {Col, Row} from 'reactstrap';
import iconCoat from '../../assets/images/icon-coat.svg';
import iconBasketFood from '../../assets/images/icon-basketFood.svg';
import iconLavazemtahrir from '../../assets/images/icon-lavazemtahrir.svg';
import iconSport from '../../assets/images/icon-sport.svg';
import iconChair from '../../assets/images/icon-chair.svg';
import iconHealth from '../../assets/images/icon-health.svg';
import iconDigital from '../../assets/images/icon-digital.svg';
import iconTools from '../../assets/images/icon-tools.svg';

function CategoriesSliderHome() {

    return (
        <Row
            style={{
            direction: "ltr"
        }}
            className="bg-success mt-4 pt-3 contentSpecialCarousel">
            <Col>
                <Row className='d-flex containerCategoriesSlider flex-nowrap mr-4'>
                    <OwlCarousel
                        className="owl-theme ml-4"
                        items={2}
                        margin={80}
                        autoplay={true}
                        autoplayTimeout={1000}
                        autoplaySpeed={true}
                        loop
                        autoWidth
                        animateIn={true}
                        dots={false}
                        nav>
                        <div className=" specialProductCard">
                            <img
                                className="imgCategories"
                                src={iconCoat}
                                alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>مد و پوشاک</strong>
                                    
                                </Col>
                            </Row>
                        </div>
                        <div className="specialProductCard">
                            <img
                                className="imgCategories"
                                src={iconBasketFood}
                                alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>خوردنی و آشامیدنی</strong>
                                    
                                </Col>
                            </Row>
                        </div>
                        <div className="specialProductCard">
                            <img
                                className="imgCategories"
                                src={iconLavazemtahrir}
                                alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>لوازم تحریر</strong>
                                </Col>
                            </Row>
                        </div>
                        <div className="specialProductCard">
                            <img
                                className="imgCategories"
                                src={iconSport}
                                alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>ورزش و سفر</strong>
                                </Col>
                            </Row>
                        </div>
                        <div className="specialProductCard">
                            <img
                                className="imgCategories"
                                src={iconChair}
                                alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>خانه و آشپزخانه</strong>
                                </Col>
                            </Row>
                        </div>
                        <div className="specialProductCard">
                            <img
                                className="imgCategories"
                                src={iconHealth}
                                alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>سلامت</strong>
                                </Col>
                            </Row>
                        </div>
                        <div className="specialProductCard">
                            <img
                                className="imgCategories"
                                src={iconDigital}
                                alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>دیجیتال</strong>
                                </Col>
                            </Row>
                        </div>
                        <div className="specialProductCard">
                            <img
                                className="imgCategories"
                                src={iconTools}
                                alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>ابزار و تجهیزات</strong>
                                </Col>
                            </Row>
                        </div>
                    </OwlCarousel>
                </Row>
            </Col>
        </Row>
    )
}

export default CategoriesSliderHome;