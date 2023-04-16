import style from './style.module.css';
import React, {useEffect, useMemo, useState} from "react";
import {Button, Calendar, Collapse, Divider, Table} from "antd";
import {ArrowLeftOutlined} from '@ant-design/icons';
import {useSelector} from "react-redux";

const CalendarComponent = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [foodIntakesGroopConstrucorObject, setFoodIntakesGroopConstrucorObject] = useState({});
    const state = useSelector(store => store.app);
    const {Panel} = Collapse;

    useEffect(() => {
        setFoodIntakesGroopConstrucorObject(state.dicts.typesOfFoodIntake.data.map(x => ({foodIntakeId: x.id, data: []})));
    }, [state.dicts.typesOfFoodIntake.data])

    useMemo(() => console.log(foodIntakesGroopConstrucorObject), [foodIntakesGroopConstrucorObject]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
    };

    function handleBackClick() {
        setSelectedDate('');
        setSelectedRowKeys([])
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
        },
        {
            title: 'Для детей',
            dataIndex: 'isForKids',
            key: 'isForKids',
            render: (itemData, record) => {
                return <span>{record.isForKids ? "Да" : "Нет"}</span>
            }
        },
        {
            title: 'Тип блюда',
            dataIndex: 'typeOfDishId',
            key: 'typeOfDish',
            render: (itemData, record) => {
                return <span>{!!state.dicts.typesOfDish.data.length && state.dicts.typesOfDish.data.find(x => record.typeOfDishId === x.id).description}</span>
            }
        },
    ];

    return <div>
        {!selectedDate ? <>
            <p>Выберите дату, на которую составляется меню:</p>
            <Calendar onSelect={(data) => setSelectedDate(data.$d)}/>
        </> : <div>
            <div className={style.topNavigationContainer}>
                <Button className={style.topNavigationContainerButtons} onClick={handleBackClick} icon={<ArrowLeftOutlined/>}/>
                <Button disabled={!selectedRowKeys.length} type='primary' className={style.topNavigationContainerButtons}>Добавить</Button>
                <p className={style.selectedDateText}>Выбранная дата: {new Date(selectedDate).toLocaleDateString()}</p>
            </div>
            <span>Выбрано элементов: {selectedRowKeys.length}</span>
            <Table rowSelection={rowSelection} loading={state.allDishes.loading} pagination={{defaultPageSize: 8, pageSize: 8}} dataSource={state.allDishes.data} size='small' columns={columnsAllDishes}/>
            <Divider>Группировка по приёмам пищи</Divider>
            <Collapse defaultActiveKey={['1']}>
                {state?.dicts?.typesOfFoodIntake?.data?.map((x, i) => {
                    return <Panel header={x.description} key={i + 1}></Panel>
                })}
            </Collapse>
        </div>}
    </div>
}

export default CalendarComponent;