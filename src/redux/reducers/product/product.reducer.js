import types from './product.types';

const initial_state = {
    results : [],
    pending : false,
    error: null,

}

const productReducer = (state = initial_state , {type , payload}) => {
    
    switch(type){
        case types.GET_PRODUCT_START :
            return {
                ...state , 
                pending : true,
                error : null            
            }
        case types.GET_PRODUCT_SUCCESS :
            return {
                ...state ,
                pending : false,
                results: payload.results,
            }

        case types.GET_PRODUCT_ERROR :
            return {
                ...state , 
                pending : false,
                error : payload.error
            }
        default :
            return state;
    }
}

export default productReducer;