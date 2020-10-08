import React from 'react'
import {Row, Col} from 'reactstrap';
import digitalPic from '../../assets/images/digital_category_banner.png';
import khanePic from '../../assets/images/khane_category_banner.png';
import kifokulePic from '../../assets/images/kifokule_category_banner.png';
import healthPic from '../../assets/images/health_category_banner.png';
import filmPic from '../../assets/images/film_category_banner.png';
import supermarketPic from '../../assets/images/supermarket_category_banner.png';
import poshakPic from '../../assets/images/poshak_category_banner.png';
import ketabohonarPic from '../../assets/images/ketabohonar_category_banner.png';
import gushiPic from '../../assets/images/gushi_category_banner.png';
import {Link} from 'react-router-dom';

function BannerCollection() {
    return ( 
    <> 
        <Col>
            <Row className="justify-content-center mx-xs-1 mx-md-5 mt-5">
                <Col className="">
                    <Row className="justify-content-center digitalBoxBanner digital-bg m-2">
                        <Link to ={`/CategoryProductsPage/52`}>
                            <div className="digitalBanner">
                                <img className="picCategoryBanner" src={digitalPic} alt="digital-banner-pic"/>
                            </div>
                        </Link>
                    </Row>
                    <Row className="BoxBanner m-2 ">
                        <Col xl={6} className="homekitchen-bg m-2 borderBanner">
                            <Link to ={`/CategoryProductsPage/129`}>
                                <div className="digitalBanner">
                                    <img className="picCategoryBanner" src={khanePic} alt="digital-banner-pic"/>
                                </div>
                            </Link>
                        </Col>
                        <Col className="sport-bg m-2 borderBanner">
                            <Link to ={`/CategoryProductsPage/124`}>
                                <div className="digitalBanner">
                                    <img className="picCategoryBanner" src={kifokulePic} alt="digital-banner-pic"/>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="BoxBanner m-2">
                        <Col xl={12} className="health-bg m-2 borderBanner">
                            <Link to ={`/CategoryProductsPage/121`}>
                                <div className="digitalBanner">
                                    <img className="picCategoryBanner" src={healthPic} alt="digital-banner-pic"/>
                                </div>
                            </Link>
                        </Col>
                        <Col className="abzar-bg m-2 borderBanner">
                            <Link to ={`/CategoryProductsPage/53`}>
                                <div className="digitalBanner">
                                    <img className="picCategoryBanner" src={gushiPic} alt="digital-banner-pic"/>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="BoxBanner m-2">

                        <Col xl={6} className="film-bg m-2 borderBanner">
                            <Link to ={`/CategoryProductsPage/77`}>
                                <div className="digitalBanner">
                                    <img className="picCategoryBanner" src={filmPic} alt="digital-banner-pic"/>
                                </div>
                            </Link>
                        </Col>
                        <Col className="lavazemtahrir-bg m-2 borderBanner">
                            <Link to ={`/CategoryProductsPage/76`}>
                                <div className="digitalBanner">
                                    <img
                                        className="picCategoryBanner"
                                        src={ketabohonarPic}
                                        alt="digital-banner-pic"/>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="BoxBanner m-2">
                        <Col xl={6} className="supermarket-bg m-2 borderBanner">
                            <Link to ={`/CategoryProductsPage/81`}>
                                <div className="digitalBanner">
                                    <img
                                        className="picCategoryBanner"
                                        src={supermarketPic}
                                        alt="digital-banner-pic"/>
                                </div>
                            </Link>
                        </Col>
                        <Col className="poshak-bg m-2 borderBanner">
                            <Link to ={`/CategoryProductsPage/62`}>
                                <div className="digitalBanner">
                                    <img className="picCategoryBanner" src={poshakPic} alt="digital-banner-pic"/>
                                </div>
                            </Link>
                        </Col>
                    </Row>

                </Col>
            </Row> 
        </Col>
    </>

    )
}

export default BannerCollection;