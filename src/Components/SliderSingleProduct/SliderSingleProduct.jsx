import React, {useState} from 'react';
import {Carousel, CarouselItem, CarouselControl} from 'reactstrap';
import {Col, Row} from 'reactstrap';

const SliderSingleProduct = ({items}) => {

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
                <img key={item.id} src={item.src} alt="product_picture"/>
            </CarouselItem>
        );
    });

    return (
        <Row className="justify-content-center marginTopPage">
            {/* <Col></Col> */}
            <Col xs={10}>
                <Carousel
                    className="mt-5 carouselBox"
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
