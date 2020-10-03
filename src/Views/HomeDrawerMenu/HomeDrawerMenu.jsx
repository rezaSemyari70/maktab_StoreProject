import React from 'react'
import {Row, Col} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBars,
    faList,
    faHeart,
    faHome,
    faEye,
    faTag,
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

function HomeDrawerMenu() {
    return (
        <Row>
            <Col className="d-md-none">
                <Row className="menuBox">
                    <Col>
                        <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
                        <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
                        <FontAwesomeIcon icon={faBars} size="lg"/>
                        <ul id="drawer">
                            <li>
                                <span><FontAwesomeIcon icon={faHome} size="sm"/></span>
                                <a href="/">خانه</a>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faList} size="sm"/></span>
                                <a href="/AllCategoriesPage">همه دسته‌بندی‌ها</a>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faHeart} size="sm"/></span>
                                <a href="#">محصولات مورد علاقه</a>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faShoppingCart} size="sm"/></span>
                                <a href="#">سبد خرید</a>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faEye} size="sm"/></span>
                                <a href="#">پربازدیدترین‌ها</a>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faTag} size="sm"/></span>
                                <a href="#">جدیدترین‌ها</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col className="d-none d-md-flex align-items-center">Logo</Col>
        </Row>
    )
}

export default HomeDrawerMenu
