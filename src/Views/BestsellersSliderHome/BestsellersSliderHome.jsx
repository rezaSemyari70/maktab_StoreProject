import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Card, Col, Row} from 'reactstrap';
import img from '../../assets/images/bestSellersbanner.png';
import { connect, useSelector } from 'react-redux';
import {getProducts} from '../../redux/reducers/product/product.thunk';
import CardProduct from '../../Components/CardProduct/CardProduct';
import {Link} from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import {bestsellers , pending} from '../../redux/reducers/product/product.selectors';
import {createStructuredSelector} from 'reselect';

function BestsellersSliderHome({getProducts , bestsellers , pending}) {

    const [property, setProperty] = useState({on_sale:true});
    const [faction, setFaction] = useState('products');
    const [categoryId, setCategoryId] = useState('bestsellers');

    useEffect(() => {
        getProducts(faction, property, categoryId);
    }, [])

    return (
        <Row style={{direction: "ltr"}}
            className="bg-primary mt-5 pt-3 contentSpecialCarousel">
            { pending ? <Spinner/> :<Col>

                <Row className='d-flex containerOwlCarousel flex-nowrap order mr-3'>
                    <Col className="d-block specialboxBanner order-1 mt-5 ">
                        <img className="imageBanner" src={img} alt=""/> 
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

                        {
                        categoryId === 'bestsellers' ?
                        bestsellers[categoryId].map(item => (
                            <Card key={item.id} className="specialProductCard">
                                <Link to={`ShowProductPage/${item.id}`}><CardProduct item={item}/></Link>
                            </Card>
                        )): <div></div>}
                    </OwlCarousel>
                </Row>
            </Col>}
        </Row>
    )
}


const mapStateToProps = createStructuredSelector({
    bestsellers,
    pending
})

export default connect(mapStateToProps , {getProducts})(BestsellersSliderHome);
