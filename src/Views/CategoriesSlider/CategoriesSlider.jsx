import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './SpecialProductSlider.scss';
import {Card, Col, Row} from 'reactstrap';
import img1 from '../../assets/images/specialBannerPic.png';

function SpecialProductSlider() {

    return (
        <Row
            style={{
            direction: "ltr"
        }}
            className="bg-danger mt-5 pt-3 contentSpecialCarousel">
            <Col>

                <Row className='d-flex containerOwlCarousel flex-nowrap order mr-3'>
                    <Col className="d-block specialboxBanner order-1 mt-5 ">
                        <img className="imageBanner" src={img1} alt=""/>
                        {/* <button>مشاهده همه محصولات</button> */}
                    </Col>
                    <OwlCarousel
                        className="owl-theme ml-4"
                        items={2}
                        margin={10}
                        autoplay={true}
                        loop
                        autoWidth
                        animateOut
                        dots={false}
                        nav>

                        <Card className="specialProductCard">
                            <img
                                className="img-i"
                                src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2019/12/2473246.jpg"}
                                alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/2782153.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/3239247.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2019/12/2473246.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/113845063.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2019/12/2371066.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2019/12/2473246.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/2782153.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/3239247.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2019/12/2473246.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/113845063.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="specialProductCard"><img
                            className="img-i"
                            src={"https://woocommerce.maktabsharif.ir/wp-content/uploads/2019/12/2371066.jpg"}
                            alt="pic"/>
                            <Row className="d-flex justify-content-center">
                                <Col>
                                    <strong>product name</strong>
                                    <p>product desc</p>
                                    <span>price product</span>
                                </Col>
                            </Row>
                        </Card>
                    </OwlCarousel>

                </Row>
            </Col>
        </Row>
    )
}

export default SpecialProductSlider;