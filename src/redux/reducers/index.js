import {combineReducers} from 'redux';
import productReducer from './product/product.reducer';
import authReducer from './auth/auth.reducer';

const rootReducer = combineReducers(
    {
        product : productReducer,
        auth : authReducer
    }
)

export default rootReducer;
