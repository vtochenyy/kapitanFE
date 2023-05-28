import { Button, Divider, Modal, Transfer } from 'antd';
import style from './style.module.css';

const DishTransferModal = ({
    isModalOpenTool,
    dataSourceTool,
    targetKeysTool,
    onTransferChange,
}) => {
    return (
        <Modal
            closable={false}
            centered
            footer={null}
            open={isModalOpenTool.isDishTransferModalOpen}
        >
            <div className={style.modalContainer}>
                <Transfer
                    className={style.transfer}
                    targetKeys={targetKeysTool.targetKeys}
                    dataSource={dataSourceTool.dataSource}
                    onChange={onTransferChange}
                    showSearch
                    render={(item) => item.title}
                />
                <Divider />
                <footer>
                    <Button
                        onClick={() => {
                            console.log(targetKeysTool.targetKeys);
                            dataSourceTool.setDataSource([]);
                            targetKeysTool.setTargetKeys([]);
                            isModalOpenTool.setIsDishTransferModalOpen(false);
                        }}
                        type="primary"
                    >
                        Подтвердить
                    </Button>
                    <Button
                        onClick={() => {
                            dataSourceTool.setDataSource([]);
                            targetKeysTool.setTargetKeys([]);
                            isModalOpenTool.setIsDishTransferModalOpen(false);
                        }}
                        type="default"
                    >
                        Отмена
                    </Button>
                </footer>
            </div>
        </Modal>
    );
};

export default DishTransferModal;
