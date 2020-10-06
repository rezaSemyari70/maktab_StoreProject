import React from 'react'
import {Row , Col } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus , faPlus , faTrash} from '@fortawesome/free-solid-svg-icons';

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
        <div>
            {basket ? basket.map(item => (
           <Row key={item.id} className="justify-content-center bg-light my-3">
                <Col>
                    <Row>
                        <Col className='d-flex justify-content-center p-0 purchaseImageBox' xs={4} >
                           <img className="purchaseImage" src={item.images[0].src} alt="productPicture" />
                        </Col>
                        <Col className="w-100 h-100 pr-3"  xs={7} >
                            <Row className="d-flex justify-content-end">
                                <Col className="px-0">
                                    <Row className="my-1 justify-content-start px-3">
                                        {`${item.name.slice(0, 25)}...`}
                                    </Row>
                                    <Row className="">
                                        <Col xs={7} sm={8} md={9} className="d-flex aling-items-center justify-content-center px-0 flex-nowarp">تومان <p id="productPrice">{item.price}</p></Col>
                                        <Col className="px-0 align-self-end mb-2 borderActions">
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
    )
}

export default ContentShoppingBasket;
