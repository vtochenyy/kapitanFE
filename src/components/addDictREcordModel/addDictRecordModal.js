import {Button, Form, Input, InputNumber, Modal} from "antd";
import style from './style.module.css';
import {useDispatch} from "react-redux";
import {AddTypeOfDish, AddTypeOfFoodIntake} from "../../redux/actions/admin/AdminActions";
import {useForm} from "antd/es/form/Form";

const AddDictRecordModal = ({isModalOpen, setIsModalOpen, typeOfDict}) => {

    const dispatch = useDispatch();
    const [form] = useForm();

    function handleCancel() {
        setIsModalOpen(false);
        form.resetFields(["code", "description"]);
    }

    function handleSubmit(params) {
        if (typeOfDict === 'typeOfDishes') {
            dispatch(AddTypeOfDish(params));
        } else {
            dispatch(AddTypeOfFoodIntake(params));
        }
        setIsModalOpen(false);
        form.resetFields(["code", "description"]);
    }

    return <Modal centered footer={null} onCancel={handleCancel} open={isModalOpen}>
        <p className={style.modalTitle}>Добавление записи</p>
        <Form form={form} onFinish={handleSubmit}>
            <div className={style.inputs}>
                <Form.Item className={style.codeInput} name='code'>
                    <InputNumber name="code" min={1} max={20} placeholder="Код"/>
                </Form.Item>
                <Form.Item className={style.discInput} name='description'>
                    <Input name="description" placeholder="Введите описание"/>
                </Form.Item>
            </div>
            <footer className={style.modalFooter}>
                <Button className={style.modalButtons} type='primary' htmlType='submit'>Добавить</Button>
                <Button className={style.modalButtons} type='default' onClick={handleCancel}>Отмена</Button>
            </footer>
        </Form>
    </Modal>
}

export default AddDictRecordModal;