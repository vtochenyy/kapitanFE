import style from './style.module.css';
import { Collapse, Spin } from 'antd';
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
            let result = state.smeta.data.map((x, i) => {
                return (
                    <div key={i} className={style.smetaGridContainer__item}>
                        <p>Стол №{x.tableNumber}</p>
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
                return <span>По этому меню ещё не составлена смета</span>;
            }
        } catch (e) {
            return <div>error</div>;
        }
    }, [state.smeta.data, id]);

    return (
        <div>
            {!state.smeta.loading ? (
                <div className={style.smetaGridContainer}>{renderSmeta}</div>
            ) : (
                <div className={style.spinnerContainer}>
                    <Spin />
                </div>
            )}
        </div>
    );
};

export default Smeta;
