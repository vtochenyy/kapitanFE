import { useEffect } from 'react';
import testIMG from '../../assets/test2.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GetMentionsAction } from '../../redux/actions/MentionsActions';
import style from './style.module.css';
import { HistoryOutlined, UserOutlined } from '@ant-design/icons';

const Mentions = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mentions = useSelector((store) => store?.app?.mentions?.data);
    const loading = useSelector((store) => store?.app?.mentions?.loading);
    useEffect(() => {
        dispatch(GetMentionsAction());
    }, [dispatch]);
    return (
        <div className={style.container}>
            {!loading ? (
                mentions.map((mentionItem) => {
                    return (
                        <div
                            onClick={() => navigate(`/mentions/${mentionItem.id}`)}
                            className={style.mentionItem}
                            key={mentionItem.id}
                        >
                            <img
                                className={style.preview_img}
                                src={mentionItem.preview_img ?? testIMG}
                                alt="not found"
                            />
                            <div className={style.textContainer}>
                                <div className={style.textContent}>
                                    <h1 className={style.title}>{mentionItem.title}</h1>
                                    <div className={style.description}>
                                        {mentionItem.description.slice(0, 1000) + '...'}
                                    </div>
                                </div>
                                <div className={style.metadata}>
                                    <span>
                                        <HistoryOutlined />
                                        {new Date(mentionItem.createdAt).toLocaleString()}
                                    </span>
                                    <span className={style.createdBy}>
                                        <UserOutlined />
                                        {`${mentionItem.User.name} ${mentionItem.User.lastname}`}
                                    </span>
                                </div>
                            </div>
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

export default Mentions;
