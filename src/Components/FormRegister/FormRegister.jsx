import React , {useState} from 'react'
import {Row ,Form, FormGroup, Input, Button} from 'reactstrap';
// import {registerAccount} from '../../redux/reducers/auth/auth.thunk';
// import {connect} from 'react-redux';


import './FormRegister.scss';

function FormRegister({registerAccount}) {

    // const [dataUser , setDataUser] = useState();

    // const handleChange = (e) => {
    //     const {name , value} = e.target;
    //     setDataUser({...dataUser , [name] : value})
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const data = new FormData(e.target);
    //     registerAccount(data);
    // }


    return (
        <Form >
            <FormGroup>
                <Row className="pr-5">
                    <h4>عضویت در ResStore</h4>
                </Row>
                <Input
                    type="text"
                    name="username"
                    id="username"
                    // value={dataUser.username}
                    // onChange={handleChange}
                    placeholder="رمز کاربری یا ایمیل"
                />
                <Input
                    type="password"
                    name="password"
                    id="password"
                    // value={dataUser.password}
                    // onChange={handleChange}
                    placeholder="رمز عبور"
                />
                <Input
                    type="password"
                    name="confirm"
                    id="confirm"
                    // value={dataUser.confirm}
                    // onChange={handleChange}
                    placeholder="تکرار رمز عبور"
                />
                <Row className="pr-4">
                    <Input type="checkbox"/>
                    <span className="checkIsUser inline-block">حساب کاربری دارم</span>
                </Row>
                <Row className="justify-content-end pl-4">
                    <Button type="submit">ثبت عضویت</Button>
                </Row>
            </FormGroup>
        </Form>
    )
}

export default FormRegister;
