import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Card, Col, Row} from 'reactstrap';
import img1 from '../../assets/images/specialBannerPic.png';
import api from '../../Api/api';
import CardProduct from '../../Components/CardProduct/CardProduct';


function BestsellersSliderHome() {

    const [bestsellers, setBestsellers] = useState([])
    const [pending, setPending] = useState(true)
    console.log(bestsellers)
    useEffect(() => {
        api.get("products" ,{category: 119 , on_sale:true}).then(res => {
            setBestsellers(res.data)
                setPending(false)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <Row
            style={{
            direction: "ltr"
        }}
            className="bg-primary mt-5 pt-3 contentSpecialCarousel">
            <Col>

                <Row className='d-flex containerOwlCarousel flex-nowrap order mr-3'>
                    <Col className="d-block specialboxBanner order-1 mt-5 ">
                        <img className="imageBanner" src={img1} alt=""/> {/* <button>مشاهده همه محصولات</button> */}
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

                        {bestsellers.map(item => (
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

export default BestsellersSliderHome;
