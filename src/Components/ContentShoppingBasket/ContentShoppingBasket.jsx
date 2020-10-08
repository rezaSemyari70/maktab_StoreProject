import React from 'react'
import {Row , Col } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus , faPlus , faTrash} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function ContentShoppingBasket({basket , deleteProduct}) {


    const handleIncrease = (price) => {
        let priceProduct = parseInt(document.getElementById('productPrice').innerText) + parseInt(price);
        document.getElementById('productPrice').innerText = priceProduct;
   }

   const handleDecrease = (price) => {
       let currentPrice = parseInt(document.getElementById('productPrice').innerText);
        
        let priceProduct = currentPrice - parseInt(price);
        document.getElementById('productPrice').innerText = priceProduct
                       
   }


    return (
        <div className="">
            <div className="marginTopPage">
                <Row className='pt-5 pr-5'>
                    <p className="titleOrders">
                            کالاهای موجود در سبد خرید       
                    </p>
                </Row>
                {basket ? basket.map(item => (
                    <Row key={item.id} className="justify-content-center my-3  purchaseBox">
                        
                        <Col>
                            <Row>
                                <Col className='d-flex justify-content-center p-0 purchaseImageBox' xs={4} >
                                <img className="purchaseImage" src={item.images[0].src} alt="productPicture" />
                                </Col>
                                <Col className="w-100  pr-3 pt-5"  xs={8} >
                                    <Row className="justify-content-end align-items-center">
                                        <Col className="px-0 ">
                                            <Row className="my-1 justify-content-start px-2 mb-2 purchaseName">
                                                <Link to={`/ShowProductPage/${item.id}`}>
                                                    <p className="">{`${item.name.slice(0, 25)}...`}</p>
                                                </Link>
                                            </Row>
                                            <Row className="d-block d-sm-flex mt-1 px-5 justify-content-center">
                                                <Col className="d-flex align-items-center mt-2 justify-content-center px-0 flex-nowarp">تومان <p id="productPrice">{item.price}</p></Col>
                                                <Col className=" px-0 align-items-center mb-2   borderActions">
                                                    <FontAwesomeIcon onClick={()=>handleIncrease(item.price)} id="increaseCount" className="mx-2" icon={faPlus}/>
                                                    <FontAwesomeIcon onClick={()=>handleDecrease(item.price)} id="decreaseCount" className="mx-2" icon={faMinus}/>
                                                    <FontAwesomeIcon onClick={()=>deleteProduct(item)} id="deleteProduct" className="mx-2" icon={faTrash}/>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                       
                        {/* <Col xs={3} className="bg-dark">
                            <Row>
                                <Col className="bg-warning">1</Col>
                                <Col className="bg-success">2</Col>
                            </Row>
                        </Col> */}
                    </Row>
                )): <div>سبد خالی است</div>}
            </div>
        </div>
    )
}

export default ContentShoppingBasket;
