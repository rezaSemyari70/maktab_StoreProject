import types from './product.types';

const initial_state = {
    results : {'specialProducts':[] ,'bestsellers':[] , 'resntlyProducts':[] , 'categories': [] , 'singleProduct':{images: [{}]} , 'listProducts':[]},
    pending : true,
    basketCard : [],
    error: {},
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
                results: {...state.results , [payload.categoryId]: payload.data},
                pending : false,
                error: state.error
            }

        case types.GET_PRODUCT_ERROR :
            return {
                ...state , 
                pending : false,
                error : payload.error
            }
        case types.ADD_PRODUCT :
            return {
               ...state ,
               basketCard: [...state.basketCard , payload]
            }
        case types.DELETE_PRODUCT : 
            return {
                ...state ,
                basketCard : state.basketCard.filter(item => item.id !== payload.id)
            }
        default :
            return state;
    }
}

export default productReducer;