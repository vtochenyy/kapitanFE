import style from './style.module.css';
import {Button, Form, Input} from "antd";

const Login = () => {
    return (
        <div className={style.mainPageContainer}>
            <div className={style.loginCardContainer}>
                <p className={style.cardTitle}>Консоль админинистратора</p>
                <Form onFinish={(x) => console.log(x)}>
                    <Form.Item name='login'>
                        <Input size='large' placeholder="Имя пользователя" />
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