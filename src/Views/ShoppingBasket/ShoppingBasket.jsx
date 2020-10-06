import React from 'react'
import {connect} from 'react-redux';
import {deleteProduct} from '../../redux/reducers/product/product.actions';
import ContentShoppingBasket from '../../Components/ContentShoppingBasket/ContentShoppingBasket';
import Header from '../../Container/DefaultHeader'; 
import Footer from '../../Container/DefaultFooter'; 
import './ShoppingBasket.scss';


function ShoppingBasket({basket  ,  deleteProduct}) {
    console.log(basket)




    return (
        <div>
            <Header/>
            <ContentShoppingBasket basket={basket} deleteProduct={deleteProduct}/>
            <Footer/>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        basket: state.product.basketCard,
    }
}
export default connect(mapStateToProps, {deleteProduct})(ShoppingBasket);

