import React from 'react'
import Header from '../../Container/DefaultHeader';
import Footer from '../../Container/DefaultFooter';
import ProductInfo from '../../Components/ProductInfo/ProductInfo';

import './ShowProductPage.scss';

function ShowProductPage() {
    return (
        <div>
            <Header/>
            <ProductInfo/>
            <Footer/>
        </div>
    )
}

export default ShowProductPage;
