import style from './style.module.css';
import plus from '../../assets/plus.png';
import { useState } from 'react';
import AddItemModal from '../../components/addItemModal/AddItemModal';
import { useDispatch } from 'react-redux';
import { CreateContactAction, CreateNewAction } from '../../redux/actions/AdminActions';

const Admin = () => {
    const [isModalVisible, setISModalVisible] = useState(false);
    const [modalType, setModalType] = useState('');
    const dispatch = useDispatch();

    function handleItemClick(type) {
        setModalType(type);
        setISModalVisible(true);
    }

    function finaCB(data, type) {
        if (type === 'news') {
            dispatch(CreateNewAction(data));
        } else if (type === 'contacts') {
            dispatch(CreateContactAction(data));
        }
        setISModalVisible(false);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div onClick={() => handleItemClick('news')} className={style.adminItem}>
                    <img className={style.plusIMG} alt="not found" src={plus} />
                    <span>Добавить новость</span>
                </div>
                <div onClick={() => handleItemClick('contacts')} className={style.adminItem}>
                    <img className={style.plusIMG} alt="not found" src={plus} />
                    <span>Добавить контакт</span>
                </div>
                <div onClick={() => handleItemClick('news')} className={style.adminItem}>
                    <img className={style.plusIMG} alt="not found" src={plus} />
                    <span>Добавить информацию о школе</span>
                </div>
                <div onClick={() => handleItemClick('news')} className={style.adminItem}>
                    <img className={style.plusIMG} alt="not found" src={plus} />
                    <span>Добавить мероприятие</span>
                </div>
                <div onClick={() => handleItemClick('news')} className={style.adminItem}>
                    <img className={style.plusIMG} alt="not found" src={plus} />
                    <span>Добавить фотоальбом</span>
                </div>
                <div onClick={() => handleItemClick('news')} className={style.adminItem}>
                    <img className={style.plusIMG} alt="not found" src={plus} />
                    <span>Добавить педагога</span>
                </div>
            </div>
            <AddItemModal
                setIsOpen={setISModalVisible}
                finalCB={finaCB}
                type={modalType}
                isOpen={isModalVisible}
            />
        </div>
    );
};

export default Admin;
