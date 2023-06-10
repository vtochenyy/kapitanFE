import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetContactsAction } from '../../redux/actions/ContactsActions';
import { Spin } from 'antd';
import style from './style.module.css';

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((store) => store?.app?.contacts?.data);
    const loading = useSelector((store) => store?.app?.contacts?.loading);
    useEffect(() => {
        dispatch(GetContactsAction());
    }, [dispatch]);
    return (
        <div className={style.contactsPageContainer}>
            <div className={style.contactsPageContainerBorder}>
                {!loading ? (
                    contacts?.map((contact) => {
                        return (
                            <div className={style.contactContainer} key={contact.id}>
                                <span>{`${contact.lastname} ${contact.name} ${contact.middlename}`}</span>
                                <span>{`${contact.position}`}</span>
                                <span>{`${contact.phoneNumber}`}</span>
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <Spin />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contacts;
