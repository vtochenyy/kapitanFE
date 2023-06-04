import style from './style.module.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.header}>
            <Link to="/news">
                <Button type="text">Новости</Button>
            </Link>
            <Link to="/contacts">
                <Button type="text">Контакты</Button>
            </Link>
            <Link to="/about">
                <Button type="text">О школе</Button>
            </Link>
            <Link to="/mentions">
                {' '}
                <Button type="text">Мероприятия</Button>
            </Link>
            <Link to="/photoalbum">
                <Button type="text">Фотоальбом</Button>
            </Link>
            <Link to="/teachers">
                {' '}
                <Button type="text">Педагоги</Button>
            </Link>
            <Link to="/conditions">
                <Button type="text">Условия приёма</Button>
            </Link>
        </header>
    );
};

export default Header;
