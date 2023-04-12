import style from './style.module.css';
import {Button, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {LoginAction} from "../../redux/actions/admin/AdminActions";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const adminState = useSelector(store => store.app);

    function handleSubmit(data) {
        dispatch(LoginAction(data, navigate));
    }

    return (
        <div className={style.loginPageContainer}>
            <div className={adminState.error ? style.loginCardContainerError : style.loginCardContainer}>
                <p className={style.cardTitle}>Консоль админинистратора</p>
                <Form onFinish={(x) => handleSubmit(x)}>
                    <Form.Item name='login'>
                        <Input size='large' placeholder="Имя пользователя"/>
                    </Form.Item>
                    <Form.Item name='password'>
                        <Input size='large' placeholder="Пароль"/>
                    </Form.Item>
                    <Button loading={adminState.loading} htmlType='submit' type='primary' size='large' className={style.submitBtn}>Войти</Button>
                </Form>
            </div>
        </div>)
}

export default Login;