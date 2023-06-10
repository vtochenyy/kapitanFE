import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import testIMG from '../../../assets/test.jpg';
import { HistoryOutlined, UserOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { GetMentionByIdAction } from '../../../redux/actions/MentionsActions';
import style from './style.module.css';

const MentionItemPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const targetNewItem = useSelector((store) => store?.app?.mentions?.target);
    const loading = useSelector((store) => store?.app?.mentions?.loading);
    useEffect(() => {
        dispatch(GetMentionByIdAction(params.id));
    }, [params, dispatch]);
    return (
        <div className={style.newItemPageContainer}>
            {!loading ? (
                <div className={style.newItemCardContainer}>
                    <div className={style.metadata}>
                        <h1>{targetNewItem?.title}</h1>
                        <div className={style.historyDataContainer}>
                            <div>
                                <HistoryOutlined />
                                <span>{new Date(targetNewItem?.createdAt).toLocaleString()}</span>
                            </div>
                            <div>
                                <UserOutlined />
                                <span>{`${targetNewItem?.User?.name} ${targetNewItem?.User?.lastname}`}</span>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="n/f"
                        className={style.preview_img}
                        src={targetNewItem?.preview_img ?? testIMG}
                    />
                    <div className={style.description}>{targetNewItem?.description}</div>
                </div>
            ) : (
                <div>
                    <Spin />
                </div>
            )}
        </div>
    );
};

export default MentionItemPage;
