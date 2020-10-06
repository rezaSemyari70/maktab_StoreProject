// import api from '../../../Api/api';
// import {actions} from './auth.actions';

// export const registerAccount = (data) => {
//     return (dispatch) => {
//         dispatch(actions.REGISTER_START())
//         api.post("customers", data).then(res => {
//             dispatch(actions.REGISTER_SUCCESS(res.data))
//         }).catch(error => {
//             dispatch(actions.REGISTER_ERROR)
//         })
//     }
// }

// export const loginUser = (data) => {
//     return (dispatch) => {
//         dispatch(actions.LOGIN_START())
//         api.post("customers", data).then(res => {
//             dispatch(actions.LOGIN_SUCCESS(res.data))
//         }).catch(error => {
//             dispatch(actions.LOGIN_ERROR(error))
//         })
//     }
// }