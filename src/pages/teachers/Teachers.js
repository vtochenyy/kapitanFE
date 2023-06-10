import style from './style.module.css';
import Search from 'antd/es/input/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetTeacherByAggregation, GetTeachersAction } from '../../redux/actions/TeachersActions';
import profile_img from '../../assets/profile_img.png';
import { Empty, Spin } from 'antd';

const Teachers = () => {
    const teachers = useSelector((store) => store?.app?.teachers?.data);
    const loading = useSelector((store) => store?.app?.teachers?.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetTeachersAction());
    }, [dispatch]);

    function onSearch(data) {
        dispatch(GetTeacherByAggregation(data));
    }

    return (
        <div className={style.container}>
            <div className={style.searchSection}>
                <h1 className={style.title}>Педагоги</h1>
                <Search
                    onChange={(e) => onSearch(e.target.value)}
                    loading={loading}
                    rootClassName={style.search}
                    placeholder="Введите ключевое слово или часть слова, например: Ярмарка"
                    allowClear
                    onSearch={onSearch}
                />
            </div>
            {!loading && !!teachers.length ? (
                <div className={style.teachersSection}>
                    {teachers.map((teacher) => {
                        return (
                            <div className={style.teacherItem}>
                                <img alt="not found" src={profile_img} />
                                <span
                                    className={style.fullname}
                                >{`${teacher.lastname} ${teacher.name} ${teacher.middlename}`}</span>
                                <span className={style.state}>{teacher.position}</span>
                            </div>
                        );
                    })}
                </div>
            ) : !loading && !teachers.length ? (
                <div className={style.emptyContainer}>
                    <Empty description="Нет совпадений :(" />
                </div>
            ) : (
                <div className={style.spinnerContainer}>
                    <Spin />
                </div>
            )}
        </div>
    );
};

export default Teachers;
