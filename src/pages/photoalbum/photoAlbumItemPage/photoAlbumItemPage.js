import style from './style.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HistoryOutlined, UserOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { GetPhotoAlbumByIdAction } from '../../../redux/actions/PhotoAlbumActions';

const PhotoAlbumItemPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const targetPhotoAlbumItem = useSelector((store) => store?.app?.photoalbum?.target);
    const loading = useSelector((store) => store?.app?.photoalbum?.loading);
    useEffect(() => {
        dispatch(GetPhotoAlbumByIdAction(params.id));
    }, [params, dispatch]);
    return (
        <div className={style.newItemPageContainer}>
            {!loading ? (
                <div className={style.newItemCardContainer}>
                    <div className={style.metadata}>
                        <h1>{targetPhotoAlbumItem?.title}</h1>
                        <div className={style.historyDataContainer}>
                            <div>
                                <HistoryOutlined />
                                <span>
                                    {new Date(targetPhotoAlbumItem?.createdAt).toLocaleString()}
                                </span>
                            </div>
                            <div>
                                <UserOutlined />
                                <span>{`${targetPhotoAlbumItem?.User?.name} ${targetPhotoAlbumItem?.User?.lastname} ${targetPhotoAlbumItem?.User?.middlename}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.description}>{targetPhotoAlbumItem?.description}</div>
                    {targetPhotoAlbumItem?.Photo?.map((imgItem) => {
                        return (
                            <div>
                                <img
                                    className={style.photoImage}
                                    src={imgItem.photo}
                                    alt="not found"
                                />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>
                    <Spin />
                </div>
            )}
        </div>
    );
};

export default PhotoAlbumItemPage;
