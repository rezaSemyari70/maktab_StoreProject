import React, {useState , useEffect } from 'react'
import { Card ,Col, Row } from 'reactstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import api from '../../Api/api';
import CardProduct from '../../Components/CardProduct/CardProduct';
import {Link} from 'react-router-dom';

function RelatedProducts() {

    const [relatedProdutcs , setRelatedProducts] = useState([]);
    const [pending , setPending] = useState(true);
    console.log(relatedProdutcs)

    useEffect(()=> {
        api.get("products").then(res=> {
            setRelatedProducts(res.data)
            setPending(false)
        })
    },[])

    return (
        <Row
            style={{
            direction: "ltr"
        }}
            className="mt-3 pt-3 contentSpecialCarousel">
            <Col>
            <Row className="headerResentlyProducts">محصولات مرتبط</Row>

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

                        {relatedProdutcs.map(item => (
                            <Card key={item.id} className="specialProductCard">
                                <Link to={`/ShowProductPage/${item.id}`}><CardProduct item={item}/></Link>
                            </Card> 
                        ))}
                    </OwlCarousel>
                </Row>
            </Col>
        </Row>
    )
}

export default RelatedProducts
