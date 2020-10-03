import React from 'react';
import {Row, Col, Container, Input} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
import CategoryProducts from '../../Views/CategoryProducts/CategoryProducts';
import HomeDrawerMenu from '../../Views/HomeDrawerMenu/HomeDrawerMenu';

const DefaultHeader = () => {

    return (
        <Container fluid={true}>
            <Row className="pt-4 topHeader">
                <Col>
                    <Row>
                        <Col className="contentCenter" xs={4}>
                            <HomeDrawerMenu/>
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
                        <Col className="p-0">
                            <CategoryProducts/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default DefaultHeader;
