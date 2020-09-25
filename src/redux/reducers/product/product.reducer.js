import types from './product.types';

const product = {
    products : [],
    loading : true,
    error: {},

}

const productReducer = (state = product , {type , payload}) => {
    
    switch(type){
        case types.GET_PRODUCT_START :
            return {
                ...product , 
                loading : true,
                error : product.error            
            }
        case types.GET_PRODUCT_SUCCESS :
            return {
                ...product ,
                loading : false,
                products : payload
            }

        case types.GET_PRODUCT_ERROR :
            return {
                ...product , 
                loading : false,
                error : payload
            }
        default :
            return state;
    }
}

export default productReducer;