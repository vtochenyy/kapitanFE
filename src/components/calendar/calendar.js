import style from './style.module.css';
import React, { useEffect, useMemo, useState } from 'react';
import {
    AutoComplete,
    Button,
    Calendar,
    Collapse,
    Divider,
    Form,
    Input,
    Modal,
    Table,
    Tag,
} from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { CreateGlobalManu } from '../../redux/actions/admin/AdminActions';

const CalendarComponent = () => {
    const [isGroupDishModalVisible, setIsGroupDishModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [isStep2Active, setIsStep2Active] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [foodIntakesGroopConstrucor, setFoodIntakesGroopConstrucor] = useState([]);
    const state = useSelector((store) => store.app);
    const { Panel } = Collapse;
    const dispatch = useDispatch();

    useEffect(() => {
        setFoodIntakesGroopConstrucor(
            state.dicts.typesOfFoodIntake.data.map((x) => ({
                typeOfFoodIntakeItemId: x.id,
                dishes: [],
            }))
        );
    }, [state.dicts.typesOfFoodIntake.data]);

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
    };

    function handleBackClick() {
        setSelectedDate('');
        setSelectedRowKeys([]);
        setIsStep2Active(false);
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
    ];

    const handleDateSelect = (date) => {
        setSelectedDate(date.$d);
    };

    const handleDatePick = () => {
        setIsStep2Active(true);
    };

    const openGroupOfDishesModal = () => {
        setIsGroupDishModalVisible(true);
    };

    const handleGroupOfDishesModalCancel = () => {
        setIsGroupDishModalVisible(false);
    };

    function mapTypesOfDishToModal(typesOfDish) {
        return typesOfDish.map((x) => ({ value: x.description }));
    }

    const handleConfirmGlobalMenu = () => {
        let sendData = {
            menu: {
                targetDate: new Date(selectedDate).toISOString(),
                typeOfFoodIntakeItems: foodIntakesGroopConstrucor,
            },
        };
        console.log(sendData);
        dispatch(CreateGlobalManu(sendData));
    };

    const onModalFormFinish = (data) => {
        setFoodIntakesGroopConstrucor((prev) => {
            let targetFoodIntakeGroupId = state?.dicts?.typesOfFoodIntake?.data.find(
                (x) => x.description === data.selectedFoodIntake
            ).id;
            let newObj = [...prev];
            let targetGroupData = newObj.find(
                (x) => x.typeOfFoodIntakeItemId === targetFoodIntakeGroupId
            )?.dishes;
            selectedRowKeys
                .map((x) => state?.allDishes?.data?.find((y) => y.key === x).id)
                .forEach((x) => {
                    targetGroupData.push(x);
                });

            return newObj;
        });
        setSelectedRowKeys([]);
    };

    const renderPanels = useMemo(() => {
        return state?.dicts?.typesOfFoodIntake?.data?.map((x, i) => {
            return (
                <Panel header={x.description} key={i + 1}>
                    {foodIntakesGroopConstrucor
                        .find((y) => y.typeOfFoodIntakeItemId === x.id)
                        ?.dishes.map((y) => state.allDishes.data.find((z) => z.id === y)).length >
                    0 ? (
                        foodIntakesGroopConstrucor
                            .find((y) => y.typeOfFoodIntakeItemId === x.id)
                            ?.dishes.map((y) => state.allDishes.data.find((z) => z.id === y))
                            .map((y, index) => <span key={index}>{y.name} ; </span>)
                    ) : (
                        <span>Блюда ещё не добавлены</span>
                    )}
                </Panel>
            );
        });
    }, [foodIntakesGroopConstrucor, state?.dicts?.typesOfFoodIntake?.data]);

    return (
        <div>
            {!isStep2Active ? (
                <>
                    <p>Выберите дату, на которую составляется меню:</p>
                    <Button onClick={handleDatePick} type="primary" disabled={!selectedDate}>
                        Выбрать
                    </Button>
                    <Calendar onSelect={(date) => handleDateSelect(date)} />
                </>
            ) : (
                <div>
                    <div className={style.topNavigationContainer}>
                        <div>
                            <Button
                                className={style.topNavigationContainerButtons}
                                onClick={handleBackClick}
                                icon={<ArrowLeftOutlined />}
                            />
                            <Button
                                onClick={openGroupOfDishesModal}
                                disabled={!selectedRowKeys.length}
                                type="primary"
                                className={style.topNavigationContainerButtons}
                            >
                                Добавить
                            </Button>
                            <Button
                                onClick={handleConfirmGlobalMenu}
                                disabled={
                                    !foodIntakesGroopConstrucor.every((x) => !!x.dishes.length)
                                }
                                type="primary"
                                color="green"
                                className={style.topNavigationContainerButtons}
                            >
                                Сформировать меню
                            </Button>
                        </div>
                        <p className={style.selectedDateText}>
                            Выбранная дата: {new Date(selectedDate).toLocaleDateString()}
                        </p>
                    </div>
                    <span>Выбрано элементов: {selectedRowKeys.length}</span>
                    <Table
                        rowSelection={rowSelection}
                        loading={state.allDishes.loading}
                        pagination={{ defaultPageSize: 8, pageSize: 8 }}
                        dataSource={state.allDishes.data}
                        size="small"
                        columns={columnsAllDishes}
                    />
                    <Divider>Группировка по приёмам пищи</Divider>
                    <Collapse defaultActiveKey={['1']}>{renderPanels}</Collapse>

                    <Modal
                        centered
                        footer={null}
                        onCancel={handleGroupOfDishesModalCancel}
                        open={isGroupDishModalVisible}
                    >
                        <div className={style.modalBodyContainer}>
                            <p>Выберите группу, в которую нужно поместить выбранные элементы: </p>
                            <Form onFinish={(data) => onModalFormFinish(data)}>
                                <Form.Item name="selectedFoodIntake">
                                    <AutoComplete
                                        options={mapTypesOfDishToModal(
                                            state.dicts.typesOfFoodIntake.data
                                        )}
                                    >
                                        <Input name="description" placeholder="Тип приёма пищи" />
                                    </AutoComplete>
                                </Form.Item>
                                <footer className={style.modalFooter}>
                                    <Button
                                        onClick={handleGroupOfDishesModalCancel}
                                        className={style.modalButtons}
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        Добавить
                                    </Button>
                                    <Button
                                        className={style.modalButtons}
                                        type="default"
                                        onClick={handleGroupOfDishesModalCancel}
                                    >
                                        Отмена
                                    </Button>
                                </footer>
                            </Form>
                        </div>
                    </Modal>
                </div>
            )}
        </div>
    );
};

export default CalendarComponent;
