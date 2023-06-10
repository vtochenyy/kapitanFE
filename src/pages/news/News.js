import { useEffect } from 'react';
import testIMG from '../../assets/test2.jpg';
import { GetNewsAction, GetNewsByAggregation } from '../../redux/actions/NewsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Empty, Spin } from 'antd';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';
import Search from 'antd/es/input/Search';

const News = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const news = useSelector((store) => store?.app?.news?.data);
    const loading = useSelector((store) => store?.app?.news?.loading);
    useEffect(() => {
        dispatch(GetNewsAction());
    }, [dispatch]);

    function onSearch(data) {
        dispatch(GetNewsByAggregation(data));
    }

    return (
        <div className={style.wrapper}>
            <div className={style.searchSection}>
                <h1 className={style.searchTitle}>Новости</h1>
                <Search
                    onChange={(e) => onSearch(e.target.value)}
                    loading={loading}
                    rootClassName={style.search}
                    placeholder="Введите ключевое слово или часть слова, например: Ярмарка"
                    allowClear
                    onSearch={onSearch}
                />
            </div>
            <div className={style.container}>
                {!loading && !!news.length ? (
                    news.map((newItem) => {
                        return (
                            <div
                                onClick={() => navigate(`/news/${newItem.id}`)}
                                className={style.newItem}
                                key={newItem.id}
                            >
                                <img
                                    className={style.preview_img}
                                    src={newItem.preview_img ?? testIMG}
                                    alt="not found"
                                />
                                <p>{newItem.title}</p>
                                <div>{newItem.description.slice(0, 100) + '...'}</div>
                            </div>
                        );
                    })
                ) : !loading && !news.length ? (
                    <div className={style.emptyContainer}>
                        <Empty description="Нет совпадений :(" />
                    </div>
                ) : (
                    <div className={style.spinnerContainer}>
                        <Spin />
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;
