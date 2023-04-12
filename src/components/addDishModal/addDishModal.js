import style from './style.module.css';
import {AutoComplete, Button, Checkbox, Dropdown, Form, Input, InputNumber, Modal} from "antd";
import {useForm} from "antd/es/form/Form";

const AddDishModal = ({isModalOpen, setIsModalOpen, typesOfDishMapped, typeOfDish}) => {
    const [form] = useForm();

    function handleSubmit(params) {
        console.log({...params, typeOfDish: typeOfDish.find(x => x.description === params.typeOfDish).id});
        setIsModalOpen(false);
        form.resetFields();
    }

    function handleCancel() {
        setIsModalOpen(false);
        form.resetFields();
    }

    return <Modal footer={null} onCancel={handleCancel} open={isModalOpen}>
        <p className={style.modalTitle}>Добавление записи</p>
        <Form form={form} onFinish={handleSubmit}>
            <div className={style.inputs}>
                <Form.Item className={style.discInput} name='name'>
                    <Input name="description" placeholder="Название"/>
                </Form.Item>
                <Form.Item className={style.discInput} name='weight'>
                    <Input name="description" placeholder="Масса"/>
                </Form.Item>
                <div className={style.numInputs}>
                    <Form.Item className={style.codeInput} name='protein'>
                        <InputNumber name="code" min={1} max={20} placeholder="Белки"/>
                    </Form.Item>
                    <Form.Item className={style.codeInput} name='fats'>
                        <InputNumber name="code" min={1} max={20} placeholder="Жиры"/>
                    </Form.Item>
                    <Form.Item className={style.codeInput} name='carbohydrates'>
                        <InputNumber name="code" min={1} max={20} placeholder="Углеводы"/>
                    </Form.Item>
                    <Form.Item className={style.codeInput} name='calories'>
                        <InputNumber name="code" min={1} max={20} placeholder="Калории"/>
                    </Form.Item>
                </div>
                <Form.Item className={style.discInput} name='diet'>
                    <Input name="description" placeholder="Диета"/>
                </Form.Item>
                <Form.Item className={style.discInput} name='isForKids'>
                    <Checkbox>Для детей?</Checkbox>
                </Form.Item>
                <Form.Item className={style.discInput} name='typeOfDish'>
                    <AutoComplete options={typesOfDishMapped}>
                        <Input name="description" placeholder="Тип блюда"/>
                    </AutoComplete>
                </Form.Item>
            </div>
            <footer className={style.modalFooter}>
                <Button className={style.modalButtons} type='primary' htmlType='submit'>Добавить</Button>
                <Button className={style.modalButtons} type='default' onClick={handleCancel}>Отмена</Button>
            </footer>
        </Form>
    </Modal>
}

export default AddDishModal;