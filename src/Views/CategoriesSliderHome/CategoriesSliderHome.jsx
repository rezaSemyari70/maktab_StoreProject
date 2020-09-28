import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Col, Row} from 'reactstrap';
import api from '../../Api/api';

import './CategoriesSliderHome.scss';


function CategoriesSliderHome() {

    const [categories, setCategories] = useState([]);
    const [pending, setPending] = useState(true);

    console.log(categories)

    useEffect(() => {
        api.get("products/categories").then(res => {
                setCategories(res.data)
                setPending(false)
            })
            .catch(error => console.log(error))
    }, []);

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
                        margin={100}
                        autoplay={true}
                        autoplayTimeout={1500}
                        autoplaySpeed={true}
                        loop
                        autoWidth
                        animateIn={true}
                        dots={false}
                        nav>

                        {categories.map(category => (
                            <Row key={category.id}>
                                <Col>
                                    <Row className="justify-content-center">
                                        <img className="imgCategories" src={category.image.src} alt="pic"/>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <Col>
                                            <strong>{category.name}</strong>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        ))}
                    </OwlCarousel>
                </Row>
            </Col>
        </Row>
    )
}

export default CategoriesSliderHome;