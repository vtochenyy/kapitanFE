import style from './style.module.css';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllGlobalMenus, GetGlobalMenuById } from '../../redux/actions/admin/AdminActions';
import { Button, Collapse, Divider, Table } from 'antd';
import Smeta from '../smeta/smeta';

const Archive = () => {
    const [isTargetMenuSelected, setIsTargetMenuSelected] = useState(false);
    const [selectedGlobalMenuId, setSelectedGlobalMenuId] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((store) => store.app);
    const { Panel } = Collapse;
    const [foodIntakesGroopConstrucor, setFoodIntakesGroopConstrucor] = useState([]);
    useEffect(() => {
        dispatch(GetAllGlobalMenus());
        setFoodIntakesGroopConstrucor(
            state.dicts.typesOfFoodIntake.data.map((x) => ({
                typeOfFoodIntakeItemId: x.id,
                dishes:
                    state?.archive?.selectedGlobalMenu?.menu?.typeOfFoodIntakeItems?.filter(
                        (x) => x.typeOfFoodIntakeItemId === x.id
                    )?.dishes ?? [],
            }))
        );
    }, [state.dicts.typesOfFoodIntake.data, isTargetMenuSelected]);

    function handleGlobalMenuSelect(record) {
        dispatch(GetGlobalMenuById(record.id));
        setTimeout(() => {
            dispatch(GetGlobalMenuById(record.id));
        }, 3000);
        setIsTargetMenuSelected(true);
    }

    useMemo(() => {
        isTargetMenuSelected &&
            setFoodIntakesGroopConstrucor(
                state.dicts.typesOfFoodIntake.data.map((x) => ({
                    typeOfFoodIntakeItemId: x.id,
                    dishes: state.archive.selectedGlobalMenu.menu.typeOfFoodIntakeItems
                        .find((y) => y.typeOfFoodIntakeId === x.id)
                        ?.typeOfDishItems?.flatMap((y) => y?.dishes?.map((z) => z?.id)),
                }))
            );
    }, [state.archive.selectedGlobalMenu]);

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

    const tableColumns = [
        {
            title: 'Дата',
            dataIndex: 'targetDate',
            key: 'targetDate',
            render: (itemData, record) => {
                return <span>{new Date(record.targetDate).toLocaleDateString()}</span>;
            },
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            width: 100,
            render: (itemData, record) => {
                return (
                    <Button
                        onClick={() => {
                            setSelectedGlobalMenuId(record.id);
                            handleGlobalMenuSelect(record);
                        }}
                        type="link"
                        size="small"
                    >
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
                        pagination={{ defaultPageSize: 17, pageSize: 17 }}
                        dataSource={state.archive.data}
                        size="small"
                        columns={tableColumns}
                    />
                </>
            ) : (
                <>
                    <div className={style.menuArchiveHeader}>
                        Выбранное меню:{' '}
                        {new Date(
                            state.archive.selectedGlobalMenu?.menu?.targetDate
                        ).toLocaleDateString()}
                    </div>
                    <Collapse defaultActiveKey={['1']}>{renderPanels}</Collapse>
                    <Divider>Смета по текущему меню</Divider>
                    <Smeta id={selectedGlobalMenuId} />
                </>
            )}
        </div>
    );
};

export default Archive;
