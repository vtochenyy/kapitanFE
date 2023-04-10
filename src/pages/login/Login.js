import style from './style.module.css';
import {Button, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {LoginAction} from "../../redux/actions/admin/AdminActions";

const Login = () => {
    const dispatch = useDispatch();
    const adminState = useSelector(store => store.dish);

    function handleSubmit(data) {
        dispatch(LoginAction(data));
    }

    return (
        <div className={style.mainPageContainer}>
            <div className={adminState.error ? style.loginCardContainerError : style.loginCardContainer}>
                <p className={style.cardTitle}>Консоль админинистратора</p>
                <Form onFinish={(x) => handleSubmit(x)}>
                    <Form.Item name='login'>
                        <Input size='large' placeholder="Имя пользователя"/>
                    </Form.Item>
                    <Form.Item name='password'>
                        <Input size='large' placeholder="Пароль"/>
                    </Form.Item>
                    <Button htmlType='submit' type='primary' size='large' className={style.submitBtn}>Войти</Button>
                </Form>
            </div>
        </div>)
}

export default Login;