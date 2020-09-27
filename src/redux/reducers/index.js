import {combineReducers} from 'redux';
import productReducer from './product/product.reducer';

const rootReducer = combineReducers(
    {
        product : productReducer,
    }
)

export default rootReducer;
