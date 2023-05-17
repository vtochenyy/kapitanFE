import style from './style.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllGlobalMenus } from '../../redux/actions/admin/AdminActions';
import { Button, Table } from 'antd';

const Archive = () => {
    const [isTargetMenuSelected, setIsTargetMenuSelected] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector((store) => store.app);
    useEffect(() => {
        dispatch(GetAllGlobalMenus());
    }, []);

    function handleGlobalMenuSelect() {
        setIsTargetMenuSelected(true);
    }

    const tableColumns = [
        {
            title: 'Дата',
            dataIndex: 'targetDate',
            key: 'targetDate',
            render: (itemData, record) => {
                console.log(record);
                return <span>{new Date(record.targetDate).toLocaleDateString()}</span>;
            },
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            width: 100,
            render: (itemData, record) => {
                console.log(record);
                return (
                    <Button onClick={handleGlobalMenuSelect} type="link" size="small">
                        Перейти
                    </Button>
                );
            },
        },
    ];

    return (
        <div className={style.archiveContainer}>
            {!isTargetMenuSelected ? (
                <>
                    <div className={style.menuArchiveHeader}>Архив меню</div>
                    <Table
                        loading={state.archive.loading}
                        pagination={{ defaultPageSize: 17, pageSize: 8 }}
                        dataSource={state.archive.data}
                        size="small"
                        columns={tableColumns}
                    />
                </>
            ) : (
                <>
                    <div className={style.menuArchiveHeader}>Выбранное меню: </div>
                </>
            )}
        </div>
    );
};

export default Archive;
