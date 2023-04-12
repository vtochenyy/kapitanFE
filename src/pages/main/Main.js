import style from './style.module.css';
import {useEffect, useState} from "react";
import {DeleteTypeOfDish, DeleteTypeOfFoodIntake, GetAllDicts} from "../../redux/actions/admin/AdminActions";
import {useDispatch, useSelector} from "react-redux";
import {Button, Menu, Table} from "antd";
import AddDictRecordModal from "../../components/addDictREcordModel/addDictRecordModal";
import AddDishModal from "../../components/addDishModal/addDishModal";

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCreateDishModalOpen, setIsCreateDishModalOpen] = useState(false);
    const [typeOfDict, setTypeOfDict] = useState('');
    const [selectedMenuItem, setSelectedMenuItem] = useState("all_dishes");
    const dispatch = useDispatch();
    const state = useSelector(store => store.app);
    useEffect(() => {
        dispatch(GetAllDicts());
    }, [dispatch]);

    function getMenuItem(label, key, icon, children, type) {
        return {
            label,
            key,
            icon,
            children,
            type
        }
    }

    function handleMenuItemClick(params) {
        setSelectedMenuItem(params.key);
    }

    const items = [
        getMenuItem('Общий список блюд', 'all_dishes'),
        getMenuItem('Конструктор меню', 'counstructor'),
        getMenuItem('Архив меню', 'archive')
    ];

    function openModal(dict) {
        setTypeOfDict(dict);
        setIsModalOpen(true);
    }

    function handleTypeOfFoodIntakeDelete(data) {
        dispatch(DeleteTypeOfFoodIntake(data.id));
    }

    function handleTypeOfDishDelete(data) {
        dispatch(DeleteTypeOfDish(data.id));
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
                return <Button onClick={() => handleTypeOfFoodIntakeDelete(record)} type='link' size='small'>Удалить</Button>
            }
        }
    ];

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
                return <Button onClick={() => handleTypeOfDishDelete(record)} type='link' size='small'>Удалить</Button>
            }
        }
    ];

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
            dataIndex: 'diet',
            key: 'diet',
        },
        {
            title: 'Для детей',
            dataIndex: 'isForKids',
            key: 'isForKids',
        },
        {
            title: 'Тип блюда',
            dataIndex: 'typeOfDish',
            key: 'typeOfDish',
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            render: (itemData, record) => {
                return <Button onClick={() => handleTypeOfDishDelete(record)} type='link' size='small'>Удалить</Button>
            }
        }
    ];

    function renderCentralContent(type) {
        if (type === 'all_dishes') {
            return <>
                <Button onClick={() => setIsCreateDishModalOpen(true)} className={style.dictAddBtn} size='small'>Добавить блюдо</Button>
                <Table size='small' columns={columnsAllDishes}/>
            </>
        }
    }

    function mapTypesOfDishToModal(typesOfDish){
        return typesOfDish.map(x => ({value: x.description}));
    }

    return (
        <div className={style.mainPageContainer}>
            <div className={style.gridContainer}>
                <div className={style.gridItem + ' ' + style.gridItem1}>
                    <Menu style={{borderInlineEnd: 0}} defaultSelectedKeys='all_dishes' onSelect={(e) => handleMenuItemClick(e)} items={items}/>
                </div>
                <div className={style.gridItem + ' ' + style.gridItem2}>
                    {renderCentralContent(selectedMenuItem)}
                </div>
                <div className={style.gridItem + ' ' + style.gridItem3}>
                    <div className={style.dictItem}>
                        <p>Cправочник типов блюд:</p>
                        <Button onClick={() => openModal('typeOfDishes')} className={style.dictAddBtn} size='small'>Добавить запись</Button>
                        <Table loading={state.dicts.typesOfDish.loading} dataSource={state.dicts.typesOfDish.data} pagination={{defaultPageSize: 5, pageSize: 5}} size="small" bordered columns={columnsTypeOfDish}/>
                    </div>
                    <div className={style.dictItem}>
                        <p>Cправочник типов приёмов пищи:</p>
                        <Button onClick={() => openModal('typeOfFoodIntake')} className={style.dictAddBtn} size='small'>Добавить запись</Button>
                        <Table loading={state.dicts.typesOfFoodIntake.loading} dataSource={state.dicts.typesOfFoodIntake.data} pagination={{defaultPageSize: 5, pageSize: 5}} size="small" bordered columns={columnsTypeOfFoodIntake}/>
                    </div>
                </div>
            </div>
            <AddDictRecordModal typeOfDict={typeOfDict} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <AddDishModal typeOfDish={state.dicts.typesOfDish.data} typesOfDishMapped={mapTypesOfDishToModal(state.dicts.typesOfDish.data)} isModalOpen={isCreateDishModalOpen} setIsModalOpen={setIsCreateDishModalOpen}/>
        </div>
    )
}

export default MainPage;