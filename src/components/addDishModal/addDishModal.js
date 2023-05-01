import style from './style.module.css';
import { AutoComplete, Button, Checkbox, Form, Input, InputNumber, Modal, Tag, theme } from 'antd';
import { useDispatch } from 'react-redux';
import { CreateDish, UpdateDish } from '../../redux/actions/admin/AdminActions';
import { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

const AddDishModal = ({
    form,
    isModalOpen,
    setIsModalOpen,
    typesOfDishMapped,
    typeOfDish,
    typeOfModalAction,
    currentIdOfUpdatedRecord,
}) => {
    const [isChecked, setIsChecked] = useState(false);
    const { token } = theme.useToken();
    const [tags, setTags] = useState([]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsChecked(form.getFieldValue('isForKids'));
        setTags(form.getFieldValue('dieta'));
    }, [form, isModalOpen]);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    const handleClose = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };
    const showInput = () => {
        setInputVisible(true);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags((prev) => [...prev, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };

    function handleSubmit(params) {
        if (typeOfModalAction === 'create') {
            dispatch(
                CreateDish({
                    ...params,
                    typeOfDishId: typeOfDish.find((x) => x.description === params.typeOfDishId).id,
                    isForKids: isChecked,
                    dieta: tags,
                })
            );
        } else {
            dispatch(
                UpdateDish({
                    ...params,
                    typeOfDishId: typeOfDish.find((x) => x.description === params.typeOfDishId).id,
                    isForKids: isChecked,
                    id: currentIdOfUpdatedRecord,
                })
            );
        }
        setIsModalOpen(false);
        form.resetFields();
    }

    function handleCancel() {
        setIsModalOpen(false);
        form.resetFields();
    }

    const forMap = (tag) => {
        const tagElem = (
            <Tag
                closable
                onClose={(e) => {
                    e.preventDefault();
                    handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span
                key={tag}
                style={{
                    display: 'inline-block',
                }}
            >
                {tagElem}
            </span>
        );
    };

    const tagChild = !!tags ? tags.map((x) => forMap(x)) : [];
    const tagPlusStyle = {
        background: token.colorBgContainer,
        borderStyle: 'dashed',
    };

    return (
        <Modal centered footer={null} onCancel={handleCancel} open={isModalOpen}>
            <p className={style.modalTitle}>Добавление записи</p>
            <Form form={form} onFinish={handleSubmit}>
                <div className={style.inputs}>
                    <Form.Item className={style.discInput} name="name">
                        <Input name="description" placeholder="Название" />
                    </Form.Item>
                    <Form.Item className={style.discInput} name="weight">
                        <Input name="description" placeholder="Масса" />
                    </Form.Item>
                    <div className={style.numInputs}>
                        <Form.Item className={style.codeInput} name="protein">
                            <InputNumber name="code" min={1} max={1000} placeholder="Белки" />
                        </Form.Item>
                        <Form.Item className={style.codeInput} name="fats">
                            <InputNumber name="code" min={1} max={1000} placeholder="Жиры" />
                        </Form.Item>
                        <Form.Item className={style.codeInput} name="carbohydrates">
                            <InputNumber name="code" min={1} max={1000} placeholder="Углеводы" />
                        </Form.Item>
                        <Form.Item className={style.codeInput} name="calories">
                            <InputNumber name="code" min={1} max={5000} placeholder="Калории" />
                        </Form.Item>
                    </div>
                    <Form.Item className={style.discInput} name="dieta">
                        <>
                            <span>Диеты: </span>
                            {tagChild}
                            {inputVisible ? (
                                <Input
                                    ref={inputRef}
                                    type="text"
                                    size="small"
                                    style={{ width: 78 }}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleInputConfirm}
                                    onPressEnter={handleInputConfirm}
                                />
                            ) : (
                                <Tag onClick={showInput} style={tagPlusStyle}>
                                    <PlusOutlined /> Добавить диету
                                </Tag>
                            )}
                        </>
                    </Form.Item>
                    <Form.Item className={style.discInput} name="isForKids">
                        <Checkbox
                            onChange={() => setIsChecked((prev) => !prev)}
                            checked={isChecked}
                        >
                            Для детей?
                        </Checkbox>
                    </Form.Item>
                    <Form.Item className={style.discInput} name="typeOfDishId">
                        <AutoComplete options={typesOfDishMapped}>
                            <Input name="description" placeholder="Тип блюда" />
                        </AutoComplete>
                    </Form.Item>
                </div>
                <footer className={style.modalFooter}>
                    <Button className={style.modalButtons} type="primary" htmlType="submit">
                        Добавить
                    </Button>
                    <Button className={style.modalButtons} type="default" onClick={handleCancel}>
                        Отмена
                    </Button>
                </footer>
            </Form>
        </Modal>
    );
};

export default AddDishModal;
