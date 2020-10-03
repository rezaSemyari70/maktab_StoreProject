import React, { useState , useEffect } from 'react'
import ListOfProducts from '../../Components/ListOfProducts/ListOfProducts'
import Header from '../../Container/DefaultHeader';
import Footer from '../../Container/DefaultFooter';
import api from '../../Api/api';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/reducers/product/product.thunk';
import {listProducts , pending} from '../../redux/reducers/product/product.selectors';
import {createStructuredSelector} from 'reselect';

function CategoryProductsPage({getProducts , listProducts , pending}) {
    
    const {id} = useParams();
    
    const [property, setProperty] = useState({category:id ,per_page:100});
    const [faction, setFaction] = useState('products');
    const [categoryId, setCategoryId] = useState('listProducts');
    
    useEffect(() => {
        getProducts(faction, property, categoryId);
    }, [])

    return (
        <div>
            <Header/>
            <ListOfProducts listProducts={listProducts} categoryId={categoryId}/>
            <Footer/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    listProducts,
    pending
})

export default connect(mapStateToProps , {getProducts})(CategoryProductsPage)
