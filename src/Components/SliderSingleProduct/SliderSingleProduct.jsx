import React, {useState, useEffect} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import {Col, Row} from 'reactstrap';
// import {useParams} from 'react-router-dom';
// import api from '../../Api/api';
// import ProductInfo from '../../Components/ProductInfo/ProductInfo';

// import './ShowProductPage.scss'

const SliderSingleProduct = ({items}) => {

//     const {id} = useParams();
//     console.log(id)

//     const [singleProduct , setSingleProduct] = useState({images: [{}]})
//     const [pending , setPending] = useState(true)
// console.log(singleProduct)
//     useEffect(() => {
//         api.get(`products/${id}`).then(res => {
//                 setSingleProduct(res.data)
//                 setPending(false)
//             })
//             .catch(error => console.log(error))
//     }, [])

    // const items = singleProduct.images.map(item => {
    //     return (
    //         {
    //             src: item.src,
    //             id: item.id
    //         }
    //     );
    // })
    // console.log(items)

    const [activeIndex , setActiveIndex] = useState(0);
    const [animating , setAnimating] = useState(false);

    const next = () => {
        if (animating) 
            return;
        const nextIndex = activeIndex === items.length - 1
            ? 0
            : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) 
            return;
        const nextIndex = activeIndex === 0
            ? items.length - 1
            : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // const goToIndex = (newIndex) => {     if (animating)         return;
    // setActiveIndex(newIndex); }

    const slides = items.map((item) => {
        return (
            <CarouselItem
            className="justify-content-center"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}>
                <img src={item.src} alt="product_picture"/>
            </CarouselItem>
        );
    });

    return (
        <Row className="justify-content-center">
            {/* <Col></Col> */}
            <Col xs={10}>
                <Carousel
                    className="carouselBox"
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}>
                    {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
                    {slides}
                    <CarouselControl
                        className="rounded"
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
                </Carousel>
            </Col>

        </Row>
    );
}

export default SliderSingleProduct;
