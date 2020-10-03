import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card, Col, Row } from 'reactstrap';
import img1 from '../../assets/images/specialBannerPic.png';
import { getProducts } from '../../redux/reducers/product/product.thunk';
import { connect, useSelector } from 'react-redux';
import CardProduct from '../../Components/CardProduct/CardProduct';
import { Link } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import {specialProducts , pending} from '../../redux/reducers/product/product.selectors';
import {createStructuredSelector} from 'reselect';

import './SpecialProductSlider.scss';

function SpecialProductSlider({ getProducts , specialProducts , pending}) {

    const [property, setProperty] = useState({category:119 , on_sale: true , per_page:20});
    const [faction, setFaction] = useState('products');
    const [categoryId, setCategoryId] = useState('specialProducts');

    useEffect(() => {
        getProducts(faction, property, categoryId);
    }, []);

    return (
        <Row style={{direction: "ltr"}}
            className="bg-danger mt-5 pt-3 contentSpecialCarousel">

            {pending ? <Spinner /> :
                <Col>
                    <Row className='d-flex containerOwlCarousel flex-nowrap order mr-3'>
                        <Col className="d-block specialboxBanner order-1 mt-5 ">
                            <img className="imageBanner" src={img1} alt="" /> {/* <button>مشاهده همه محصولات</button> */}
                        </Col>
                        <OwlCarousel
                            className="owl-theme ml-4"
                            items={2}
                            margin={10}
                            autoplay={true}
                            loop
                            autoWidth
                            animateIn
                            dots={false}
                            nav>
                            {
                                categoryId === 'specialProducts' ? 
                                specialProducts[categoryId].map(item => (
                                    <Card key={item.id} className="specialProductCard">
                                        <Link to={`ShowProductPage/${item.id}`}><CardProduct item={item}/></Link>
                                    </Card>
                                )): <div></div>
                            }
                        </OwlCarousel>
                    </Row>
                </Col>}
        </Row>

    )
}

const mapStateToProps = createStructuredSelector({
    specialProducts,
    pending
})

export default connect(mapStateToProps, { getProducts })(SpecialProductSlider);