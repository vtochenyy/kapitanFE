import { useEffect } from 'react';
import testIMG from '../../assets/test.jpg';
import { GetNewsAction } from '../../redux/actions/admin/NewsActions';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';

const News = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const news = useSelector((store) => store?.app?.news?.data);
    const loading = useSelector((store) => store?.app?.news?.loading);
    useEffect(() => {
        dispatch(GetNewsAction());
    }, [dispatch]);
    return (
        <div className={style.container}>
            {!loading ? (
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
            ) : (
                <div className={style.spinnerContainer}>
                    <Spin />
                </div>
            )}
        </div>
    );
};

export default News;
