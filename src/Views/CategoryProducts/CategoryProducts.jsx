import React, {useState, useEffect} from 'react';
import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import api from '../../Api/api';
import './CategoryProducts.scss';

function CategoryProducts() {

    const [categories,
        setCategories] = useState([]);
    const [pending,
        setPending] = useState(true);

    useEffect(() => {
        api
            .get("products/categories")
            .then(res => {
                setCategories(res.data);
                console.log(res.data);
                setPending(false);
            })
            .catch((error) => {
                // Invalid request, for 4xx and 5xx statuses
                console.log("Response Status:", error.response.status);
                console.log("Response Headers:", error.response.headers);
                console.log("Response Data:", error.response.data);
            });
    }, [])

    return (
        <div>
            <div className="navbar">
                
                    <div className="dropdown">
                        <FontAwesomeIcon icon={faList} size="sm"/>
                        <button className="dropbtn">دسته‌بندی محصولات</button>
                        <div className="dropdown-content">
                            {/* <div className="header">
                            <h3>Mega Menu</h3>
                        </div> */}
                            <Row className="row">
                                <Col className="column p-0 m-0">
                                    {categories.map(item => <ListGroup key={item.id}>
                                        <ListGroupItem className="listItem" tag="a" href="#">{item.name}</ListGroupItem>
                                    </ListGroup>)}
                                </Col>
                            </Row>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default CategoryProducts;
