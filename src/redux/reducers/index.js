import {combineReducers} from 'redux';
import productReducer from './product/product.reducer';

const rootReducer = combineReducers(
    {
        products : productReducer,
    }
)

export default rootReducer;
