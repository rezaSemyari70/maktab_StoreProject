import types from './product.types';

// ----- Register --------
export const registerStart = () => (
    {
        type : types.REGISTER_START
    }
)

export const registerSuccess = (data) => (
    {
        type : types.REGISTER_SUCCESS,
        payload : data
    }
)

export const registerError = (error)=> (
    {
        type : types.REGISTER_ERROR,
        payload : error
    }
)

// ------ Login ------
export const loginStart = () => (
    {
        type : types.LOGIN_START
    }
)

export const loginSuccess = (data) => (
    {
        type : types.LOGIN_SUCCESS,
        payload : data
    }
)

export const loginError = (error)=> (
    {
        type : types.LOGIN_ERROR,
        payload : error
    }
) 

