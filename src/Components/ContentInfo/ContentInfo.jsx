import React from 'react'
import {Row, Col , Button} from 'reactstrap';
import {connect} from 'react-redux';
import {addProduct} from '../../redux/reducers/product/product.actions';


function ContentInfo({singleProduct , basket, addProduct}) {
console.log(basket)
    console.log(singleProduct);

    const makeMarkup = (singleProduct) => ({__html:singleProduct.description});

    


    const handleAddProduct = () => {
        // alert('به سبد خرید اضافه شد')
        !(basket.includes(singleProduct)) && addProduct(singleProduct)
    }

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
                    <Col xs={2} className="d-flex align-items-center pl-0 m-0 bgGray">
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
                    <Col xs={2} className="d-flex align-items-center pl-0 m-0 bgGray">
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
                <Row className=" rowInfo">
                    <Col xs={2} className="d-flex align-items-center pl-0 m-0 bgGray">
                        <Row className="align-items-center">
                            <p>قیمت
                            </p>
                        </Row>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center pl-0 m-0 h-100 bgGray">
                        <Row className="align-items-center ">
                            <p className="d-flex h-100 justify-content-center">{singleProduct.price}
                                <span className="mr-2">تومان</span>
                            </p>
                        </Row>
                        
                    </Col>

                </Row>
                <Row className="justify-content-center my-3">
                    <Button type="submit" onClick={handleAddProduct} className="purchase-Btn">افزودن به سبد خرید</Button>
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


const mapStateToProps = state => {
    return {
        basket: state.product.basketCard,
    }
}

export default connect(mapStateToProps , {addProduct})(ContentInfo);
