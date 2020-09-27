import * as actions from './product.actions';
import api from '../../../Api/api';
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// const api = new WooCommerceRestApi({
//   url: "https://woocommerce.maktabsharif.ir/",
//   consumerKey: "ck_3aa97ea6c1c09ca060ca70bdfe2a8eb6deca4a26",
//   consumerSecret: "cs_460b3db3d1a975ee21f0c116e66d7dd6c166edfe",
//   version: "wc/v3"
// });


import axios from 'axios';

export const getProducts = () => {
    return (dispatch) => {
        dispatch(actions.getProductsStart())
        api.get("products")
            .then(res => {
                dispatch(actions.getProductSuccess(res.data))
                console.log(res.data)
            })
            .catch(error => {
                dispatch(actions.getProductError(error))
            })
    }

}


