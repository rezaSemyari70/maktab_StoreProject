import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Card, Col, Row} from 'reactstrap';
import api from '../../Api/api';
import CardProduct from '../../Components/CardProduct/CardProduct';

import './ResentlyProducts.scss';

function ResentlyProducts() {

    const [digitalProducts, setDigitalProducts] = useState([])
    const [pending, setPending] = useState(true)

    const resentlyProducts = digitalProducts.filter(item => item.date_created >= "2020-01-03T05:00:00")
    console.log(resentlyProducts)

    useEffect(() => {
        api.get("products").then(res => {
                setDigitalProducts(res.data)
                setPending(false)
            })
            .catch(error => console.log(error))
    }, []);


    return (
        <Row
            style={{
            direction: "ltr"
        }}
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

                        {resentlyProducts.map(item => (
                            <Card key={item.id} className="specialProductCard">
                                <CardProduct item={item}/>
                            </Card> 
                        ))}
                    </OwlCarousel>
                </Row>
            </Col>
        </Row>
    )
}

export default ResentlyProducts;
