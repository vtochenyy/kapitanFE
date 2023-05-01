import style from './style.module.css';
import { Button, Table } from 'antd';
import React from 'react';
import { DeleteTypeOfDish } from '../../redux/actions/admin/AdminActions';
import { useDispatch } from 'react-redux';

const DictionaryTypeOfDishTable = ({ loading, data, openModal }) => {
    const dispatch = useDispatch();

    const columnsTypeOfDish = [
        {
            title: 'Код',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Описание',
            dataIndex: 'description',
            key: 'desc',
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            render: (itemData, record) => {
                return (
                    <Button
                        onClick={() => handleTypeOfDishDelete(record.id)}
                        type="link"
                        size="small"
                    >
                        Удалить
                    </Button>
                );
            },
        },
    ];

    function handleTypeOfDishDelete(id) {
        dispatch(DeleteTypeOfDish(id));
    }
    return (
        <>
            <p>Cправочник типов блюд:</p>
            <Button onClick={() => openModal()} className={style.dictAddBtn} size="small">
                Добавить запись
            </Button>
            <Table
                loading={loading}
                dataSource={data}
                pagination={{ defaultPageSize: 5, pageSize: 5 }}
                size="small"
                bordered
                columns={columnsTypeOfDish}
            />
        </>
    );
};

export default DictionaryTypeOfDishTable;
