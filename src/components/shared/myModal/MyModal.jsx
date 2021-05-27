import { Modal } from "antd";
import s from "./MyModal.module.scss";
import cn from "classnames";
import { useHistory } from "react-router-dom";

export const MyModal = ({ product, ...props }) => {
  const history = useHistory();

  const handleOk = () => {
    props.setIsModalVisible(false);
  };

  const handleCancel = () => {
    props.setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Корзина"
        visible={props.isModalVisible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
        width={680}
      >
        <div>
          <div className={s.topList}>
            <div className={s.lineBlock}>Картинка</div>
            <div className={s.lineBlockOne}>Название</div>
            <div>Цена</div>
          </div>
          <div className={s.product}>
            <img src={product.img} alt="" />
            <div className={s.productTitle}>{product.name}</div>
            <div className={s.productPrice}>{product.price}&nbsp;₽</div>
          </div>
          <div className={s.button}>
            <button
              className={cn("button", s.buttonOne)}
              onClick={() => props.setIsModalVisible(false)}
            >
              Продолжить покупки
            </button>
            <button
              className={cn("button", s.buttonTwo)}
              onClick={() => history.push("/buy")}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
