import style from './style.module.css';
import { useEffect, useMemo, useState } from 'react';
import { DeleteDish, GetAllDicts, GetAllDishes } from '../../redux/actions/admin/AdminActions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Menu } from 'antd';
import AddDictRecordModal from '../../components/addDictREcordModel/addDictRecordModal';
import AddDishModal from '../../components/addDishModal/addDishModal';
import React from 'react';
import CalendarComponent from '../../components/calendar/calendar';
import { useForm } from 'antd/es/form/Form';
import DictionaryTypeOfDishTable from '../../components/dictionaryTypeOfDishTable/dictionaryTypeOfDishTable';
import DictionaryTypeOfFoodIntakesTable from '../../components/dictionaryTypeOfFoodIntakesTable/dictionaryTypeOfFoodIntakesTable';
import CentralDishesSection from '../../components/centralDishesSection/centralDishesSection';

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCreateDishModalOpen, setIsCreateDishModalOpen] = useState(false);
    const [typeOfDict, setTypeOfDict] = useState('');
    const [selectedMenuItem, setSelectedMenuItem] = useState('all_dishes');
    const [typeOfModalAction, setTypeOFModalAction] = useState('');
    const [currentIdOfUpdatedRecord, setCurrentIdOfUpdatedRecord] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((store) => store.app);
    const [form] = useForm();
    useEffect(() => {
        dispatch(GetAllDicts());
        dispatch(GetAllDishes());
    }, [dispatch]);

    function getMenuItem(label, key, icon, children, type) {
        return {
            label,
            key,
            icon,
            children,
            type,
        };
    }

    function handleMenuItemClick(params) {
        setSelectedMenuItem(params.key);
    }

    const items = [
        getMenuItem('Общий список блюд', 'all_dishes'),
        getMenuItem('Конструктор меню', 'constructor'),
        getMenuItem('Архив меню', 'archive'),
        getMenuItem('Сводка заказов по текущему меню', 'all_orders'),
    ];

    function openModal(dict) {
        setTypeOfDict(dict);
        setIsModalOpen(true);
    }

    const renderCentralContent = useMemo(() => {
        if (selectedMenuItem === 'all_dishes') {
            return (
                <>
                    <CentralDishesSection
                        setTypeOFModalAction={setTypeOFModalAction}
                        setIsCreateDishModalOpen={setIsCreateDishModalOpen}
                        setCurrentIdOfUpdatedRecord={setCurrentIdOfUpdatedRecord}
                        form={form}
                    />
                </>
            );
        } else if (selectedMenuItem === 'constructor') {
            return <CalendarComponent />;
        }
    }, [state.allDishes.data, state.allDishes.loading]);

    function mapTypesOfDishToModal(typesOfDish) {
        return typesOfDish.map((x) => ({ value: x.description }));
    }

    return (
        <div className={style.mainPageContainer}>
            {sessionStorage.getItem('isAuth') === 'true' ? (
                <>
                    <div className={style.gridContainer}>
                        <div className={style.gridItem + ' ' + style.gridItem1}>
                            <Menu
                                style={{ borderInlineEnd: 0 }}
                                defaultSelectedKeys="all_dishes"
                                onSelect={(e) => handleMenuItemClick(e)}
                                items={items}
                            />
                        </div>
                        <div className={style.gridItem + ' ' + style.gridItem2}>
                            {renderCentralContent}
                        </div>
                        <div className={style.gridItem + ' ' + style.gridItem3}>
                            <div className={style.dictItem}>
                                <DictionaryTypeOfDishTable
                                    openModal={() => openModal('typeOfDishes')}
                                    loading={state.dicts.typesOfDish.loading}
                                    data={state.dicts.typesOfDish.data}
                                />
                            </div>
                            <div className={style.dictItem}>
                                <DictionaryTypeOfFoodIntakesTable
                                    openModal={() => openModal('typeOfFoodIntake')}
                                    loading={state.dicts.typesOfFoodIntake.loading}
                                    data={state.dicts.typesOfFoodIntake.data}
                                />
                            </div>
                        </div>
                    </div>
                    <AddDictRecordModal
                        typeOfDict={typeOfDict}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                    <AddDishModal
                        typeOfModalAction={typeOfModalAction}
                        currentIdOfUpdatedRecord={currentIdOfUpdatedRecord}
                        form={form}
                        typeOfDish={state.dicts.typesOfDish.data}
                        typesOfDishMapped={
                            !!state.dicts.typesOfDish.data &&
                            mapTypesOfDishToModal(state.dicts.typesOfDish.data)
                        }
                        isModalOpen={isCreateDishModalOpen}
                        setIsModalOpen={setIsCreateDishModalOpen}
                    />
                </>
            ) : (
                <div>Не авторизован</div>
            )}
        </div>
    );
};

export default React.memo(MainPage);
