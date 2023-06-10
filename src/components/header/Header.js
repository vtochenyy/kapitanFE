import style from './style.module.css';
import { Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Me } from '../../redux/actions/UserActions';

const Header = () => {
    const location = useLocation();
    const user = useSelector((state) => state?.app?.user?.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Me());
    }, []);
    return (
        <header className={style.header}>
            <nav className={style.navContainer}>
                <Link to="/news">
                    <Button className={location.pathname === '/news' && style.selected} type="text">
                        Новости
                    </Button>
                </Link>
                <Link to="/contacts">
                    <Button
                        className={location.pathname === '/contacts' && style.selected}
                        type="text"
                    >
                        Контакты
                    </Button>
                </Link>
                <Link to="/about">
                    <Button
                        className={location.pathname === '/about' && style.selected}
                        type="text"
                    >
                        О школе
                    </Button>
                </Link>
                <Link to="/mentions">
                    <Button
                        className={location.pathname === '/mentions' && style.selected}
                        type="text"
                    >
                        Мероприятия
                    </Button>
                </Link>
                <Link to="/photoalbum">
                    <Button
                        className={location.pathname === '/photoalbum' && style.selected}
                        type="text"
                    >
                        Фотоальбом
                    </Button>
                </Link>
                <Link to="/teachers">
                    {' '}
                    <Button
                        className={location.pathname === '/teachers' && style.selected}
                        type="text"
                    >
                        Педагоги
                    </Button>
                </Link>
                <Link to="/conditions">
                    <Button
                        className={location.pathname === '/conditions' && style.selected}
                        type="text"
                    >
                        Условия приёма
                    </Button>
                </Link>
                {user.role === 'admin' && (
                    <Link className={style.adminLink} to="/admin">
                        <Button
                            className={location.pathname === '/admin' && style.selected}
                            type="text"
                        >
                            Администрирование
                        </Button>
                    </Link>
                )}
                <span className={style.userData}>{`${user?.name} ${user?.lastname}`}</span>
            </nav>
        </header>
    );
};

export default Header;
