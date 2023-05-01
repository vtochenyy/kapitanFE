import { Button, Table, Tag } from 'antd';
import style from './style.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteDish } from '../../redux/actions/admin/AdminActions';

const CentralDishesSection = ({
    setTypeOFModalAction,
    setIsCreateDishModalOpen,
    setCurrentIdOfUpdatedRecord,
    form,
}) => {
    const dispatch = useDispatch();
    const state = useSelector((store) => store.app);

    function handleDishCreate() {
        setTypeOFModalAction('create');
        setIsCreateDishModalOpen(true);
    }

    function handleDishDelete(id) {
        dispatch(DeleteDish(id));
    }

    function handleDishUpdate(id) {
        setTypeOFModalAction('update');
        setCurrentIdOfUpdatedRecord(id);
        console.log(state.allDishes.data.find((x) => x.id === id));
        form.setFields(
            Object.entries(state.allDishes.data.find((x) => x.id === id)).map((x) => ({
                name: x[0],
                value:
                    x[0] !== 'typeOfDishId'
                        ? x[1]
                        : state.dicts.typesOfDish.data.find((dictEl) => dictEl.id === x[1])
                              .description,
            }))
        );
        setIsCreateDishModalOpen(true);
    }

    const columnsAllDishes = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Масса',
            dataIndex: 'weight',
            key: 'weight',
        },
        {
            title: 'Белки',
            dataIndex: 'protein',
            key: 'protein',
        },
        {
            title: 'Жиры',
            dataIndex: 'fats',
            key: 'fats',
        },
        {
            title: 'Углеводы',
            dataIndex: 'carbohydrates',
            key: 'carbohydrates',
        },
        {
            title: 'Калории',
            dataIndex: 'calories',
            key: 'calories',
        },
        {
            title: 'Диета',
            dataIndex: 'dieta',
            key: 'dieta',
            render: (itemData, record) => {
                if (!!record.dieta) {
                    return (
                        <div className={style.dietaTagsContainer}>
                            {record.dieta.map((x, i) => (
                                <Tag
                                    key={x + i}
                                    onClose={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    {x}
                                </Tag>
                            ))}
                        </div>
                    );
                } else {
                    return <span>-</span>;
                }
            },
        },
        {
            title: 'Для детей',
            dataIndex: 'isForKids',
            key: 'isForKids',
            render: (itemData, record) => {
                return <span>{record.isForKids ? 'Да' : 'Нет'}</span>;
            },
        },
        {
            title: 'Тип блюда',
            dataIndex: 'typeOfDishId',
            key: 'typeOfDish',
            render: (itemData, record) => {
                return (
                    <span>
                        {!!state.dicts.typesOfDish.data.length &&
                            state.dicts.typesOfDish.data.find((x) => record.typeOfDishId === x.id)
                                .description}
                    </span>
                );
            },
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            render: (itemData, record) => {
                return (
                    <div className={style.tableActionButtonsContainer}>
                        <Button
                            onClick={() => handleDishUpdate(record.id)}
                            type="link"
                            size="small"
                        >
                            Изменить
                        </Button>
                        <Button
                            onClick={() => handleDishDelete(record.id)}
                            type="link"
                            size="small"
                        >
                            Удалить
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (
        <>
            <Button onClick={handleDishCreate} className={style.dictAddBtn} size="small">
                Добавить блюдо
            </Button>
            <Table
                loading={state.allDishes.loading}
                pagination={{ defaultPageSize: 18, pageSize: 18 }}
                dataSource={state.allDishes.data}
                size="small"
                columns={columnsAllDishes}
            />
        </>
    );
};

export default CentralDishesSection;
