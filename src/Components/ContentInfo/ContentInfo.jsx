import React from 'react'
import {Row, Col} from 'reactstrap';



function ContentInfo({singleProduct}) {

console.log(singleProduct)
    const makeMarkup = (singleProduct) => ({__html:singleProduct.description});
    return (
        <Row className="mt-5 mx-4 ProductInfoBox">
            <Col>
                <Row className="mb-3 bgNameProduct">
                    <Col className="align-self-center pr-2 ">
                        <Row className="align-items-center">
                            <p className=" text-right">{singleProduct.name}</p>
                        </Row>
                    </Col>
                </Row>
                <Row className="rowInfo ">
                    <Col xs={5} className="d-flex align-items-center pl-0 m-0 bgGray">
                        <Row className="align-items-center">
                            <p>رنگ
                            </p>
                        </Row>
                    </Col>
                    <Col className="d-flex align-items-center pl-0 m-0 bgGray">
                        <Row className="align-items-center">
                            <p>{singleProduct.color}</p>
                        </Row>
                    </Col>
                </Row>
                <Row className="rowInfo ">
                    <Col xs={5} className="d-flex align-items-center pl-0 m-0 bgGray">
                        <Row className="align-items-center">
                            <p>سایز
                            </p>
                        </Row>
                    </Col>
                    <Col className="d-flex align-items-center pl-0 m-0 bgGray">
                        <Row className="align-items-center">
                            <p>{singleProduct.size}</p>
                        </Row>
                    </Col>
                </Row>
                <Row className=" rowInfo bgPrice mb-2">
                    <Col xs={5} className="d-flex align-items-center pl-0 m-0 bgGray">
                        <Row className="align-items-center">
                            <p>قیمت
                            </p>
                        </Row>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center pl-0 m-0 h-100 bgPrice">
                        <Row className="align-items-center ">
                            <p className="d-flex h-100 justify-content-center">{singleProduct.price}
                                <span className="mr-2">ریال</span>
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row>

                    <Col>
                    <Row className="mb-3 titleDescribtion">
                    <Col className="align-self-center pr-2 ">
                        <Row className="align-items-center">
                            <p className=" text-right">مشخصات محصول</p>
                        </Row>
                    </Col>
                </Row>
                        <Row className="rowDescrib">
                            <div
                                className="text-right describStyle"
                                dangerouslySetInnerHTML={makeMarkup(singleProduct)}>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ContentInfo
