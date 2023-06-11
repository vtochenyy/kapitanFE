import style from './style.module.css';

const Conditions = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>Условия приёма</h1>
                <div className={style.list}>
                    Перечень документов, необходимых для формирования личного дела ребёнка:
                </div>
                <div className={style.listItem}>1)Заявление родителей</div>
                <div className={style.listItem}>2)Медицинская карта (форма 026)</div>
                <div className={style.listItem}>3)Прививочная карта</div>
                <div className={style.listItem}>4)Копия свидетельства о рождении ребёнка</div>
                <div className={style.listItem}>
                    5)Копия паспорта родителей ( законного представителя )
                </div>
                <div className={style.listItem}>6)Копия медицинского полиса ребёнка</div>
                <div className={style.listItem}>7)Копия СНИЛС ребёнка</div>
                <div className={style.listItem}>8)Фотография 3х4 (2 шт) ребёнка</div>
            </div>
        </div>
    );
};

export default Conditions;
