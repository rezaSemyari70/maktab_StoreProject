import React , {useState , useEffect} from 'react'
import {Row , Col} from 'reactstrap';
import {getProducts} from '../../redux/reducers/product/product.thunk';
import {connect} from 'react-redux';
import {categories, pending} from '../../redux/reducers/product/product.selectors';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';

function SidebarCategoryPage({getProducts, categories, pending}) {

    const [property, setProperty] = useState({per_page: 25});
    const [faction, setFaction] = useState('products/categories');
    const [categoryId, setCategoryId] = useState('categories');

    useEffect(() => {
        getProducts(faction, property, categoryId);
    }, []);


    return (
        <>
            <Col xs={12} sm={5} md={4} lg={3} >
                {categoryId === 'categories'
                    ? categories[categoryId].map(category => (
                        <Row key={category.id} className="bg-light">
                            <Col >
                            <Link to ={`/CategoryProductsPage/${category.id}`}>
                                <Row className="categoryPicBox mr-1">
                                    <img className="mr-4 categoryPic-digital" src={category.image.src} alt=""/>
                                    <h5 className="titleCategory">{category.name}</h5>
                                </Row>
                            </Link>
                            </Col>
                        </Row>
                    ))
                    : <div></div>
                }
            </Col>
        </>
    )
}

const mapStateToProps = createStructuredSelector({categories, pending})

export default connect(mapStateToProps , {getProducts})(SidebarCategoryPage)
