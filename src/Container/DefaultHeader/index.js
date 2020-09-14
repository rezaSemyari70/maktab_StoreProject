import React from 'react';
import {Row, Col, Container, Input} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const DefaultHeader = () => {

    return (
        <Container fluid={true}>
            <Row className="pt-4 topHeader">
                <Col>
                    <Row>
                        <Col className="contentCenter" xs={4}>
                            <Row>
                                <Col className="d-md-none">
                                    <Row className="menuBox">
                                        <Col>
                                            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
                                            <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
                                            <FontAwesomeIcon icon={faBars} size="lg"/>
                                            <ul id="drawer">
                                                <li>
                                                    <a href="#">Menu Item</a>
                                                </li>
                                                <li>
                                                    <a href="#">Menu Item</a>
                                                </li>
                                                <li>
                                                    <a href="#">Menu Item</a>
                                                </li>
                                                <li>
                                                    <a href="#">Menu Item</a>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="d-none d-md-flex align-items-center">Logo</Col>
                            </Row>
                        </Col>
                        <Col xs={6}>
                            <Row className="d-none d-md-flex">
                                <Col className='searchBox p-0'>
                                    <FontAwesomeIcon className='iconSearch' icon={faSearch}/>
                                    <Input
                                        className="searchProduct"
                                        type="text"
                                        name="search"
                                        id="search"
                                        placeholder="Search"/>
                                </Col>
                            </Row>
                            <Row className="d-md-none justify-content-center align-items-center">Logo</Row>
                        </Col>
                        <Col className="shoppingBasket align-center" xs={2}>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </Col>
                    </Row>
                    <Row className="d-flex d-md-none justify-content-center mt-3">
                        <Col xs="8" className='searchBox p-0'>
                            <FontAwesomeIcon className='iconSearch' icon={faSearch}/>
                            <Input
                                className="searchProduct"
                                type="text"
                                name="search"
                                id="search"
                                placeholder="جستجوی کالا"/>
                        </Col>
                    </Row>
                    <Row className="d-none d-md-flex mt-4">
                        <Col xs={8}>
                            <Row>
                                <Col>Column</Col>
                                <Col>Column</Col>
                                <Col>Column</Col>
                                <Col>Column</Col>
                                <Col>Column</Col>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default DefaultHeader;
