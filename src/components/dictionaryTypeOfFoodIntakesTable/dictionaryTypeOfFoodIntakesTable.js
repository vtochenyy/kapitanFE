import { Button, Table } from 'antd';
import style from './style.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteTypeOfFoodIntake } from '../../redux/actions/admin/AdminActions';

const DictionaryTypeOfFoodIntakesTable = ({ loading, data, openModal }) => {
    const dispatch = useDispatch();

    function handleTypeOfFoodIntakeDelete(id) {
        dispatch(DeleteTypeOfFoodIntake(id));
    }

    const columnsTypeOfFoodIntake = [
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
                        onClick={() => handleTypeOfFoodIntakeDelete(record.id)}
                        type="link"
                        size="small"
                    >
                        Удалить
                    </Button>
                );
            },
        },
    ];

    return (
        <>
            <p>Cправочник типов приёмов пищи:</p>
            <Button onClick={() => openModal()} className={style.dictAddBtn} size="small">
                Добавить запись
            </Button>
            <Table
                loading={loading}
                dataSource={data}
                pagination={{ defaultPageSize: 5, pageSize: 5 }}
                size="small"
                bordered
                columns={columnsTypeOfFoodIntake}
            />
        </>
    );
};

export default DictionaryTypeOfFoodIntakesTable;
