import types from './product.types';

export const getProductsStart = () => (
    {
        type : types.GET_PRODUCT_START
    }
)

export const getProductSuccess = (data , categoryId) => (
    {
        type : types.GET_PRODUCT_SUCCESS,
        payload : {data , categoryId}
    }
)

export const getProductError = (error) => (
    {
        type : types.GET_PRODUCT_ERROR,
        payload : error
    }
)