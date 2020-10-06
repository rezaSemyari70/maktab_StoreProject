import * as actions from './product.actions';
import api from '../../../Api/api';

export const getProducts = (faction , property , categoryId) => {
    return (dispatch) => {
        dispatch(actions.getProductsStart())
        api.get(faction , property).then(res => {
            dispatch(actions.getProductSuccess(res.data , categoryId))
        }).catch(error => {
            dispatch(actions.getProductError(error))
        })
    }
}


