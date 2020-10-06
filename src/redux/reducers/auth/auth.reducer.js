import types from './auth.types';

const initial_state ={
    user : null,
    token : "",
    pending : false,
    error: null
}

const authReducer = (state = initial_state , {type , payload})=> {
    switch(type){
        case types.LOGIN_START:
        case types.REGISTER_START:
            return {
                ...state,
                pending: true ,
                token: null,
                error: null
            }
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return {
                ...state , 
                pending: false,
                token: payload.token
            }
        case types.LOGIN_ERROR:
        case types.REGISTER_ERROR:
            return {
                ...state,
                pending: false,
                error: payload
            }

        default :
        return state;
    }
}

export default authReducer;

