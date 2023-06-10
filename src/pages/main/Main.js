import React, { useEffect } from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetSettingByTitleAction } from '../../redux/actions/SettingsActions';
import { ABOUT_SCHOOL_SETTING } from '../../common/settingsConstants';
import { Spin } from 'antd';
import testIMG from '../../assets/test2.jpg';

const MainPage = () => {
    const dispatch = useDispatch();
    const about = useSelector((store) => store?.app?.about?.data);
    const loading = useSelector((store) => store?.app?.about?.loading);
    useEffect(() => {
        dispatch(GetSettingByTitleAction(ABOUT_SCHOOL_SETTING));
    }, [dispatch]);
    return (
        <>
            {!loading ? (
                <div className={style.mainPageContainer}>
                    <h1>О Школе</h1>
                    <div className={style.mainPageContainerBorder}>
                        <img src={testIMG} alt="n/f" />
                        <div className={style.description}>{about.description}</div>
                    </div>
                </div>
            ) : (
                <div className={style.spinnerContainer}>
                    <Spin />
                </div>
            )}
        </>
    );
};

export default React.memo(MainPage);
