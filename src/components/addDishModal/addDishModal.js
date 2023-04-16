import style from './style.module.css';
import {AutoComplete, Button, Checkbox, Form, Input, InputNumber, Modal} from "antd";
import {useDispatch} from "react-redux";
import {CreateDish, UpdateDish} from "../../redux/actions/admin/AdminActions";
import {useState} from "react";

const AddDishModal = ({form, isModalOpen, setIsModalOpen, typesOfDishMapped, typeOfDish, typeOfModalAction, currentIdOfUpdatedRecord}) => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    function handleSubmit(params) {
        console.log(params);
        if (typeOfModalAction === 'create') {
            dispatch(CreateDish(
                {
                    ...params,
                    typeOfDishId: typeOfDish.find(x => x.description === params.typeOfDishId).id,
                    isForKids: isChecked
                }
            ));
        } else {
            dispatch(UpdateDish({
                ...params,
                typeOfDishId: typeOfDish.find(x => x.description === params.typeOfDishId).id,
                isForKids: isChecked,
                id: currentIdOfUpdatedRecord
            }))
        }
        setIsModalOpen(false);
        form.resetFields();
    }

    function handleCancel() {
        setIsModalOpen(false);
        form.resetFields();
    }

    return <Modal centered footer={null} onCancel={handleCancel} open={isModalOpen}>
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
                <Form.Item className={style.discInput} name='dieta'>
                    <Input name="description" placeholder="Диета"/>
                </Form.Item>
                <Form.Item className={style.discInput} name='isForKids'>
                    <Checkbox onChange={() => setIsChecked(prev => !prev)} checked={isChecked} name='isForKids'>Для детей?</Checkbox>
                </Form.Item>
                <Form.Item className={style.discInput} name='typeOfDishId'>
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