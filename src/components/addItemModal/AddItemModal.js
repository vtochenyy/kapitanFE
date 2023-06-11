import style from './style.module.css';
import { Button, Form, Input, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import UploadComponent from '../uploadComponent/UploadComponent';

const AddItemModal = ({ isOpen, setIsOpen, finalCB, type }) => {
    const [photoBASE64, setPhotoBASE64] = useState('');
    const [photoAlbumElement1, setPhotoAlbumElement1] = useState('');
    const [photoAlbumElement2, setPhotoAlbumElement2] = useState('');
    const [photoAlbumElement3, setPhotoAlbumElement3] = useState('');
    const [photoAlbumElement4, setPhotoAlbumElement4] = useState('');
    const [photoAlbumElement5, setPhotoAlbumElement5] = useState('');

    function onFinish(data) {
        if (type === 'news') {
            finalCB({ ...data, preview_img: photoBASE64 }, 'news');
        } else if (type === 'contacts') {
            finalCB({ ...data }, 'contacts');
        } else if (type === 'teachers') {
            finalCB({ ...data }, 'teachers');
        } else if (type === 'mentions') {
            finalCB({ ...data, preview_img: photoBASE64 }, 'mentions');
        } else if (type === 'school_about') {
            finalCB({ title: 'school_about', ...data }, 'school_about');
        } else if (type === 'photo_album') {
            const photosToSend = [
                photoAlbumElement1,
                photoAlbumElement2,
                photoAlbumElement3,
                photoAlbumElement4,
                photoAlbumElement5,
            ].filter((el) => !!el);

            finalCB(
                {
                    ...data,
                    images: photosToSend,
                },
                'photo_album'
            );
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
        } else if (type === 'teachers') {
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
                    <Form.Item name="position">
                        <Input placeholder="Введите позицию" />
                    </Form.Item>
                    <Button className={style.applybtn} htmlType="submit" type="primary">
                        Подтвердить
                    </Button>
                    <Button onClick={handleCancel}>Отменить</Button>
                </Form>
            );
        } else if (type === 'mentions') {
            return (
                <Form onFinish={onFinish}>
                    <UploadComponent photoBASE64={photoBASE64} setPhotoBASE64={setPhotoBASE64} />
                    <Form.Item name="title">
                        <Input placeholder="Введите заголовок мероприятия" />
                    </Form.Item>
                    <Form.Item name="description">
                        <TextArea placeholder="Введите описание мероприятия" />
                    </Form.Item>
                    <Button className={style.applybtn} htmlType="submit" type="primary">
                        Подтвердить
                    </Button>
                    <Button onClick={handleCancel}>Отменить</Button>
                </Form>
            );
        } else if (type === 'school_about') {
            return (
                <Form onFinish={onFinish}>
                    <Form.Item name="description">
                        <TextArea placeholder="Введите информацию о школе" />
                    </Form.Item>
                    <Button className={style.applybtn} htmlType="submit" type="primary">
                        Подтвердить
                    </Button>
                    <Button onClick={handleCancel}>Отменить</Button>
                </Form>
            );
        } else if (type === 'photo_album') {
            return (
                <Form onFinish={onFinish}>
                    <Form.Item name="title">
                        <Input placeholder="Введите название фотоальбома" />
                    </Form.Item>
                    <Form.Item name="description">
                        <TextArea placeholder="Введите описание фотоальбома" />
                    </Form.Item>
                    <UploadComponent
                        photoBASE64={photoAlbumElement1}
                        setPhotoBASE64={setPhotoAlbumElement1}
                    />
                    <UploadComponent
                        photoBASE64={photoAlbumElement2}
                        setPhotoBASE64={setPhotoAlbumElement2}
                    />
                    <UploadComponent
                        photoBASE64={photoAlbumElement3}
                        setPhotoBASE64={setPhotoAlbumElement3}
                    />
                    <UploadComponent
                        photoBASE64={photoAlbumElement4}
                        setPhotoBASE64={setPhotoAlbumElement4}
                    />
                    <UploadComponent
                        photoBASE64={photoAlbumElement5}
                        setPhotoBASE64={setPhotoAlbumElement5}
                    />
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
