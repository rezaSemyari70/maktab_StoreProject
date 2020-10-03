import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Card, Col, Row} from 'reactstrap';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/reducers/product/product.thunk';
import CardProduct from '../../Components/CardProduct/CardProduct';
import {Link} from 'react-router-dom';
import {resntlyProducts , pending} from '../../redux/reducers/product/product.selectors';
import {createStructuredSelector} from 'reselect';
import './ResentlyProducts.scss';

function ResentlyProducts({getProducts , resntlyProducts , pending}) {

    const [property, setProperty] = useState({orderby:'date'});
    const [faction, setFaction] = useState('products');
    const [categoryId, setCategoryId] = useState('resntlyProducts');
    
    useEffect(() => {
        getProducts(faction, property, categoryId);
    }, [])


    return (
        <Row style={{direction: "ltr"}}
            className="mt-3 pt-3 contentSpecialCarousel">
            <Col>
            <Row className="headerResentlyProducts">جدیدترین محصولات</Row>
                <Row className='d-flex containerOwlCarousel fullWith order mr-3 '>
                    <OwlCarousel
                        className="owl-theme ml-4"
                        items={5}
                        margin={10}
                        autoplay={false}
                        autoWidth
                        animateOut
                        dots={false}
                        nav>

                        {categoryId === 'resntlyProducts' ?
                        resntlyProducts[categoryId].map(item => (
                            <Card key={item.id} className="specialProductCard">
                                <Link to={`ShowProductPage/${item.id}`}><CardProduct item={item}/></Link>
                            </Card> 
                        )):<div></div>}

                    </OwlCarousel>
                </Row>
            </Col>
        </Row>
    )
}


const mapStateToProps = createStructuredSelector({
    resntlyProducts,
    pending:pending
})

export default connect(mapStateToProps , {getProducts})(ResentlyProducts);
