import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Container} from 'reactstrap';
import CardProduct from '../CardProduct/CardProduct';
import './ListOfProducts.scss';

function ListOfProducts({listProducts , categoryId}) {
    return (
        <Container fluid style={{
            overflow: 'hidden'
        }}>
            <Row className="mt-5 marginTopPage">
                <Col xl="3" className="bg-white d-none d-xl-flex">
                    <Row className="justify-content-start bg-light w-100 p-0 m-0">
                        <Col className="w-75">
                            
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" xl="9" className="">
                    <Row style={{
                        direction: 'ltr'
                    }}>
                        {categoryId === "listProducts" ?
                        listProducts[categoryId].map(item => 
                            (<Col xs={12} sm={6} lg={4} className="p-0" key={item.id}>
                                <Link to={`/ShowProductPage/${item.id}`}><CardProduct item={item}/></Link>
                            </Col>)) : <div></div>}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ListOfProducts;
