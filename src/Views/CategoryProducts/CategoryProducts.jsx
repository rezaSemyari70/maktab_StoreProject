import React, {useState, useEffect} from 'react';
import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import iconHome from '../../assets/images/Home-icon.svg'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {getProducts} from '../../redux/reducers/product/product.thunk';
import {categories , pending} from '../../redux/reducers/product/product.selectors';
import {createStructuredSelector} from 'reselect';
import './CategoryProducts.scss';

function CategoryProducts({getProducts , categories , pending}) {

    const [property, setProperty] = useState({per_page:10});
    const [faction, setFaction] = useState('products/categories');
    const [categoryId, setCategoryId] = useState('categories');
    
    useEffect(() => {
        getProducts(faction, property, categoryId);
    }, [])

    return (
        <div>
            <div className="navbar">
                <Link to="/" className="p-0 mb-1">
                    <div className="ml-3 mb-2 iconHome"><img src={iconHome} alt=""/></div>
                </Link>
                <div className="dropdown">
                    <FontAwesomeIcon className="mb-2" icon={faList} size="sm"/>
                    <button className="dropbtn">
                        <Link to="/AllCategoriesPage" className="p-0 text-dark">دسته‌بندی محصولات</Link>
                    </button>
                    <div className="dropdown-content">
                        <Row className="row">
                            <Col className="column p-0 m-0">

                                {categoryId === 'categories' ?
                                categories[categoryId].map(item => (
                                    <ListGroup key={item.id}>
                                        <ListGroupItem className="listItem" tag="a" href="#">{item.name}</ListGroupItem>
                                    </ListGroup>
                                )):<div></div>}

                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    categories,
    pending
})

export default connect(mapStateToProps , {getProducts})(CategoryProducts);
