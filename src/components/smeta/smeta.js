import style from './style.module.css';
import { Collapse } from 'antd';
import React from 'react';

const Smeta = () => {
    const { Panel } = Collapse;
    return (
        <div>
            <div className={style.title}>Смета по текущему меню:</div>
            <div className={style.smetaGridContainer}>
                <div className={style.smetaGridContainer__item}>
                    <p>Стол #1</p>
                    <div>
                        <Collapse>
                            <Panel key={0} header="Место №1">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={1} header="Место №2">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={2} header="Место №3">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={3} header="Место №4">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className={style.smetaGridContainer__item}>
                    <p>Стол #2</p>
                    <div>
                        <Collapse>
                            <Panel key={0} header="Место №1">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={1} header="Место №2">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={2} header="Место №3">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={3} header="Место №4">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className={style.smetaGridContainer__item}>
                    <p>Стол #3</p>
                    <div>
                        <Collapse>
                            <Panel key={0} header="Место №1">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={1} header="Место №2">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={2} header="Место №3">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={3} header="Место №4">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className={style.smetaGridContainer__item}>
                    <p>Стол #1</p>
                    <div>
                        <Collapse>
                            <Panel key={0} header="Место №1">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={1} header="Место №2">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={2} header="Место №3">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={3} header="Место №4">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className={style.smetaGridContainer__item}>
                    <p>Стол #2</p>
                    <div>
                        <Collapse>
                            <Panel key={0} header="Место №1">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={1} header="Место №2">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={2} header="Место №3">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={3} header="Место №4">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className={style.smetaGridContainer__item}>
                    <p>Стол #3</p>
                    <div>
                        <Collapse>
                            <Panel key={0} header="Место №1">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={1} header="Место №2">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={2} header="Место №3">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={3} header="Место №4">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className={style.smetaGridContainer__item}>
                    <p>Стол #1</p>
                    <div>
                        <Collapse>
                            <Panel key={0} header="Место №1">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={1} header="Место №2">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={2} header="Место №3">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={3} header="Место №4">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className={style.smetaGridContainer__item}>
                    <p>Стол #2</p>
                    <div>
                        <Collapse>
                            <Panel key={0} header="Место №1">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={1} header="Место №2">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={2} header="Место №3">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={3} header="Место №4">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
                <div className={style.smetaGridContainer__item}>
                    <p>Стол #3</p>
                    <div>
                        <Collapse>
                            <Panel key={0} header="Место №1">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={1} header="Место №2">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={2} header="Место №3">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                            <Panel key={3} header="Место №4">
                                <Collapse>
                                    <Panel key={100} header="Завтрак">
                                        Компот
                                    </Panel>
                                    <Panel key={101} header="Обед">
                                        Суп; Котлета из птицы
                                    </Panel>
                                    <Panel key={102} header="Ужин">
                                        Рыба
                                    </Panel>
                                </Collapse>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Smeta;
