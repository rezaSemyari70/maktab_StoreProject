import * as actions from './product.actions';
import api from '../../../Api/api';
import axios from 'axios';

export const getProducts = () => {
    return (dispatch) => {
        dispatch(actions.getProductsStart())
        api.get("products/categories")
            .then(res => {
                dispatch(actions.getProductSuccess(res.data))
                console.log(res.data)
            })
            .catch(error => {
                dispatch(actions.getProductError(error))
            })
    }

}


