import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetPhotoAlbumsAction } from '../../redux/actions/PhotoAlbumActions';
import { Empty, Spin } from 'antd';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';

const PhotoAlbum = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const photoalbums = useSelector((store) => store?.app?.photoalbum?.data);
    const loading = useSelector((store) => store?.app?.photoalbum?.loading);
    useEffect(() => {
        dispatch(GetPhotoAlbumsAction());
    }, [dispatch]);
    return (
        <div className={style.container}>
            {!loading && !!photoalbums.length ? (
                photoalbums.map((photoAlbumItem) => {
                    return (
                        <div
                            onClick={() => navigate(`/photoalbum/${photoAlbumItem.id}`)}
                            className={style.photoAlbumItem}
                            key={photoAlbumItem.id}
                        >
                            <h1>{photoAlbumItem.title}</h1>
                            <span>{photoAlbumItem?.description}</span>
                        </div>
                    );
                })
            ) : !loading && !photoalbums.length ? (
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

export default PhotoAlbum;
