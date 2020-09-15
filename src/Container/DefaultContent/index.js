import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row ,
  Col
} from 'reactstrap';

import './Content.scss';

const items = [
  {
    src: "https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/3637521.jpg",
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: "https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/2782153.jpg",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: "https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/3239247.jpg",
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
  ,
  {
    src: "https://woocommerce.maktabsharif.ir/wp-content/uploads/2019/12/2473246.jpg",
    altText: 'Slide 4',
    caption: 'Slide 4'
  }
  ,
  {
    src: "https://woocommerce.maktabsharif.ir/wp-content/uploads/2020/01/113845063.jpg",
    altText: 'Slide 5',
    caption: 'Slide 5'
  }
  ,
  {
    src: "https://woocommerce.maktabsharif.ir/wp-content/uploads/2019/12/2371066.jpg",
    altText: 'Slide 6',
    caption: 'Slide 6'
  }
//   ,
//   {
//     src: "https://woocommerce.maktabsharif.ir/wp-content/uploads/2019/12/114165665.jpg",
//     altText: 'Slide 7',
//     caption: 'Slide 7'
//   }

];

const DefaultContent = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Row className="carouselBox">
      <Col></Col>
      <Col xs={12}>
      <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl className="rounded" direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl  direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
      </Col>
      <Col></Col>

    </Row>
  );
}

export default DefaultContent;