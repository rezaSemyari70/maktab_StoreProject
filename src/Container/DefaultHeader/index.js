import React from 'react';
import {Row, Col, Container, Input, Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingCart , faUser} from '@fortawesome/free-solid-svg-icons';
import CategoryProducts from '../../Views/CategoryProducts/CategoryProducts';
import HomeDrawerMenu from '../../Views/HomeDrawerMenu/HomeDrawerMenu';
import {Link} from 'react-router-dom';

import './Header.scss';

const DefaultHeader = () => {

    return (
        <Container fluid={true}>
            <Row className=" pt-4 topHeader ">
                <Col>
                    <Row className="d-flex justify-content-between">
                        <Col className="pl-0 contentCenter" xs={2} >
                            <HomeDrawerMenu/>
                        </Col>
                        <Col xs={5} className="ml-2">
                            <Row className="d-none d-md-flex ml-3">
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
                            <Row className="d-flex d-md-none justify-content-center align-items-center">Logo</Row>
                        </Col>
                        <Col xs={2} className="shoppingBasket align-center mr-3" >
                            <Row className="justify-contet-between px-0">
                                <Col sm={6} className="d-none d-sm-block nowrap p-0 m-0 acoutBtn">‌
                                    <Button outline>
                                        <Link to="/register"><span><FontAwesomeIcon className="ml-2" icon={faUser}/>حساب کاربری</span></Link>
                                    </Button>
                                </Col>
                                <Col  className="d-flex p-0  justify-content-center mx-2 align-items-center">
                                    <Link to="/ShoppingBasket"><FontAwesomeIcon icon={faShoppingCart}/></Link>
                                </Col>
                                <Col className="d-sm-none mx-1 p-0 m-0">
                                    <FontAwesomeIcon icon={faUser}/>
                                </Col>
                            </Row>
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
