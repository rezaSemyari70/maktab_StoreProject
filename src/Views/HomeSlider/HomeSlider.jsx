import React, {useState} from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Row, Col
} from 'reactstrap';
import {bannerHome} from "../../assets/images/bannerSliderHome_1.svg";

import './HomeSlider.scss';

const items = [
    // {
    //     src: {bannerHome},
    //     altText: 'Slide 1',
    //     caption: 'Slide 1'
    // },
    {
        src: "https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/1000016881.jpg",
        // altText: 'Slide 2',
        // caption: 'Slide 2'
    }, {
        src: "https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/1000016913.jpg",
        // altText: 'Slide 4',
        // caption: 'Slide 4'
    }


];

const HomeSlider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

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

    const goToIndex = (newIndex) => {
        if (animating) 
            return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}>
                <img src={item.src} alt={item.altText}/>
                {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption}/> */}
            </CarouselItem>
        );
    });

    return (
      <Row className="mt-5">
        <Col></Col>
        <Col xs={12}>
        <Carousel
        className="carouselBox"
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
            {slides}
            <CarouselControl className="rounded" direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl  direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
        </Col>
        <Col></Col>
  
      </Row>
    );
}

export default HomeSlider;