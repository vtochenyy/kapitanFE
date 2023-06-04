import style from './style.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import testIMG from '../../../assets/test.jpg';
import { GetNewByIdAction } from '../../../redux/actions/admin/NewsActions';
import { HistoryOutlined, UserOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const NewItemPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const targetNewItem = useSelector((store) => store?.app?.news?.target);
    const loading = useSelector((store) => store?.app?.news?.loading);
    useEffect(() => {
        dispatch(GetNewByIdAction(params.id));
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
                                <span>{targetNewItem?.createdBy}</span>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="n/f"
                        className={style.preview_img}
                        src={targetNewItem?.preview_img ?? testIMG}
                    />
                    <span>{targetNewItem?.description}</span>
                </div>
            ) : (
                <div>
                    <Spin />
                </div>
            )}
        </div>
    );
};

export default NewItemPage;
