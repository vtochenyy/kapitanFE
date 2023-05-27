import style from './style.module.css';
import { Alert, Button, Collapse, Divider, Spin } from 'antd';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetSmetaByGlobalMenuID } from '../../redux/actions/admin/AdminActions';

const Smeta = ({ id }) => {
    const { Panel } = Collapse;
    const dispatch = useDispatch();
    const state = useSelector((store) => store.app);
    useEffect(() => {
        dispatch(GetSmetaByGlobalMenuID(id));
    }, []);

    const renderSmeta = useMemo(() => {
        try {
            let result = state.smeta.data.allMenus.map((x, i) => {
                return (
                    <div key={i} className={style.smetaGridContainer__item}>
                        <p className={style.tableTitle}>
                            Стол <span className={style.colorizedTableNum}>№{x.tableNumber}</span>
                        </p>
                        <div>
                            <Collapse>
                                {x.smeta.map((y, y_index) => {
                                    return (
                                        <Panel
                                            key={String(y_index) + y.placeNumber}
                                            header={`Место №${y.placeNumber}`}
                                        >
                                            <Collapse>
                                                {y.menu.typeOfFoodIntakeItems.map((z, z_index) => {
                                                    return (
                                                        <Panel
                                                            key={String(z_index) + y.placeNumber}
                                                            header={
                                                                state.dicts.typesOfFoodIntake.data.find(
                                                                    (x) =>
                                                                        x.id ===
                                                                        z.typeOfFoodIntakeId
                                                                ).description
                                                            }
                                                        >
                                                            {z.typeOfDishItems
                                                                .map((j, j_index) => j.dishes)
                                                                .flat()
                                                                .map((j1, j1_index) => {
                                                                    return (
                                                                        <span
                                                                            key={
                                                                                String(j1_index) +
                                                                                j1.name
                                                                            }
                                                                        >
                                                                            {j1.name + '; '}
                                                                        </span>
                                                                    );
                                                                })}
                                                        </Panel>
                                                    );
                                                })}
                                            </Collapse>
                                        </Panel>
                                    );
                                })}
                            </Collapse>
                        </div>
                    </div>
                );
            });
            if (!!result.length) {
                return result;
            } else {
                return (
                    <div className={style.smetaNotExistContainer}>
                        <Alert
                            message="Внимание"
                            description="По этому меню ещё не составлена смета."
                            type="warning"
                            showIcon
                        />
                    </div>
                );
            }
        } catch (e) {
            return (
                <Alert
                    message="Ошибка"
                    description="Ошибка отрисовки компонента."
                    type="error"
                    showIcon
                />
            );
        }
    }, [state.smeta.data, id]);

    const renderSmetaDishData = useMemo(() => {
        try {
            let result = state.smeta.data?.dishCountToSmeta?.map((x) => {
                return (
                    <div className={style.dishSmetaEl}>
                        <div>{state.allDishes.data.find((y) => y.id === x.dishId).name}</div>
                        <div className={style.colorizedTableNum}>{x.count}</div>
                    </div>
                );
            });
            if (!!result.length) {
                return result;
            } else {
                return (
                    <div className={style.smetaNotExistContainer}>
                        <Alert
                            message="Внимание"
                            description="По этому меню ещё нет сводки заказанных блюд."
                            type="warning"
                            showIcon
                        />
                    </div>
                );
            }
        } catch (e) {
            return (
                <Alert
                    message="Ошибка"
                    description="Ошибка отрисовки компонента."
                    type="error"
                    showIcon
                />
            );
        }
    }, [state.smeta.data, id]);

    return (
        <div>
            {!state.smeta.loading ? (
                <>
                    <div className={style.smetaGridContainer}>{renderSmeta}</div>
                    <Divider>Сводка заказанных блюд</Divider>
                    <div className={style.dishSmetaContianer}>{renderSmetaDishData}</div>
                </>
            ) : (
                <div className={style.spinnerContainer}>
                    <Spin />
                </div>
            )}
        </div>
    );
};

export default Smeta;
