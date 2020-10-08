import React from 'react'
import {Card, Col, Row} from 'reactstrap';
import {Badge} from 'reactstrap';

function CardProduct({item}) {
    return (
        <Card key={item.id} className="specialProductCard">
            <Col>
                <Row className="d-flex justify-content-center specialBoxImage">
                    <img className="img-i" src={item.images[0].src} alt="pic"/>
                </Row>
                <Row className="d-flex justify-content-center p-3">
                    <Col className="justify-content-center">
                        <Row className="d-flex mb-3  specialNameProduct">
                            <strong >{`${item.name.slice(0, 45)}...`}</strong>
                        </Row>
                        <Row className="">
                            <Badge className="badgeOff" color="danger" pill>
                                <span>۳۰%</span>
                            </Badge>
                        </Row>
                        <Row className="justify-content-center">
                            <p>{item.price} تومان</p>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Card>
    )
}

export default CardProduct
