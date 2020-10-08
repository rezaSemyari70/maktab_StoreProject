import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import api from '../../Api/api';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/reducers/product/product.thunk';
import {categories , pending} from '../../redux/reducers/product/product.selectors';
import {createStructuredSelector} from 'reselect';
import './CategoriesSliderHome.scss';


function CategoriesSliderHome({getProducts , categories , pending}) {

    const [property, setProperty] = useState({per_page:20});
    const [faction, setFaction] = useState('products/categories');
    const [categoryId, setCategoryId] = useState('categories');

    useEffect(() => {
        getProducts(faction, property, categoryId);
    }, []);

    return (
        <Row
            style={{
            direction: "ltr"
        }}
            className="my-5 pt-3">
            <Col>
                <Row className='d-flex containerCategoriesSlider flex-nowrap mr-4'>
                    <OwlCarousel
                        className="owl-theme ml-4"
                        items={2}
                        margin={60}
                        // autoplay={true}
                        autoplayTimeout={1500}
                        autoplaySpeed={true}
                        loop
                        autoWidth
                        animateIn={true}
                        dots={false}
                        nav>

                        {categoryId === 'categories' ?
                            categories[categoryId].map(category => (
                            <Row key={category.id}>
                                <Col className="categoryItem">
                                    <Link  to ={`/CategoryProductsPage/${category.id}`}>
                                        <Row className="justify-content-center">
                                            <img className="imgCategories" src={category.image.src} alt="pic"/>
                                        </Row>
                                    </Link>
                                    <Row className="d-flex justify-content-center">
                                        <Col>
                                            <strong>{category.name}</strong>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )): <div></div>}
                    </OwlCarousel>
                </Row>
            </Col>
        </Row>
    )
}

const mapStateToProps = createStructuredSelector({
    categories,
    pending
})

export default connect(mapStateToProps , {getProducts})(CategoriesSliderHome);