import style from './style.module.css';
import { Button, Form, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import UploadComponent from '../uploadComponent/UploadComponent';

const AddItemModal = ({ isOpen, setIsOpen, finalCB, type }) => {
    const [photoBASE64, setPhotoBASE64] = useState('');

    function onFinish(data) {
        if (type === 'news') {
            finalCB({ ...data, preview_img: photoBASE64 }, 'news');
        } else if (type === 'contacts') {
            finalCB({ ...data }, 'contacts');
        }
    }

    function handleCancel() {
        setIsOpen(false);
    }

    function RenderModalContent(type) {
        if (type === 'news') {
            return (
                <Form onFinish={onFinish}>
                    <UploadComponent photoBASE64={photoBASE64} setPhotoBASE64={setPhotoBASE64} />
                    <Form.Item name="title">
                        <Input placeholder="Введите заголовок новости" />
                    </Form.Item>
                    <Form.Item name="description">
                        <TextArea placeholder="Введите описание новости" />
                    </Form.Item>
                    <Button className={style.applybtn} htmlType="submit" type="primary">
                        Подтвердить
                    </Button>
                    <Button onClick={handleCancel}>Отменить</Button>
                </Form>
            );
        } else if (type === 'contacts') {
            return (
                <Form onFinish={onFinish}>
                    <Form.Item name="name">
                        <Input placeholder="Введите имя" />
                    </Form.Item>
                    <Form.Item name="lastname">
                        <Input placeholder="Введите фамилию" />
                    </Form.Item>
                    <Form.Item name="middlename">
                        <Input placeholder="Введите отчество" />
                    </Form.Item>
                    <Form.Item name="phoneNumber">
                        <Input placeholder="Введите номер телефона" />
                    </Form.Item>
                    <Form.Item name="position">
                        <Input placeholder="Введите позицию" />
                    </Form.Item>
                    <Button className={style.applybtn} htmlType="submit" type="primary">
                        Подтвердить
                    </Button>
                    <Button onClick={handleCancel}>Отменить</Button>
                </Form>
            );
        }
    }

    return (
        <Modal footer={null} centered closable={false} open={isOpen}>
            {RenderModalContent(type)}
        </Modal>
    );
};

export default AddItemModal;
