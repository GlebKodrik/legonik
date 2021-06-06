import { useDispatch, useSelector } from "react-redux";
import { BuyItem } from "./BuyItem";
import s from "./Buy.module.scss";
import { useEffect, useState } from "react";
import { clearPrice } from "../../../redux/product-reducer";
import { Button, Form, Input, Modal } from "antd";
import { validateName, validatePhone } from "../../../common/validate";
import {sendAPI} from "../../../api/api";

const validateMessages = {
  required: "Обязательное поле!",
  types: {
    email: "Неккоректный email!",
  },
};

export const Buy = () => {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.product.price);
  const basket = useSelector((state) => state.product.basket);
  const productsAll = useSelector((state) => state.product.productsAll);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const product = basket.map((item) => {
    return productsAll.find((el) => el.id === item.id);
  });

  const success = () => {
    Modal.success({
      title: "Заявка успешно оставлена!",
      content: "Оператор свяжется с вами в течении 24 часов.",
    });
  };

  useEffect(() => {
    localStorage.setItem("buy", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    return () => {
      dispatch(clearPrice(0));
    };
  }, []);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  return (
    <>
      {!basket.length ? (
        <div className={s.notBasket}>
          <div>Коризна пустая</div>
          <div>Самое время добавить в неё что-нибудь.</div>
        </div>
      ) : (
        <div className={s.basket}>
          <div className={s.basketTitle}>Корзина</div>
          <div className={s.cartLine}>
            <div className={s.cartLineImg}>Картинка</div>
            <div className={s.cartLineName}>Описание</div>
            <div className={s.cartLineCount}>Количество</div>
            <div>Сумма</div>
          </div>
          {product.map((el) => {
            return <BuyItem product={el} key={el.id} basket={basket} />;
          })}
          <div className={s.price}>
            <span>Итого:</span> {price} ₽
          </div>
          <div className={s.priceButton}>
            <Modal
              title="Оформиление заказа"
              visible={isModalVisible}
              onOk={() => setIsModalVisible(false)}
              onCancel={() => setIsModalVisible(false)}
              footer={null}
            >
              <div>
                <div>
                  <Form
                    name="login"
                    validateMessages={validateMessages}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={(values) => {
                      const product = basket.map(el => {
                        return el.id
                      })
                      dispatch(sendAPI.sendEmail({ products: product,...values}));
                      setIsModalVisible(false);
                      success();
                    }}
                  >
                    <Form.Item
                      {...layout}
                      label="Имя"
                      name="name"
                      rules={[
                        {
                          required: true,
                        },
                        {
                          pattern: new RegExp(validateName),
                          message: "Недопустимое имя",
                        },
                      ]}
                    >
                      <Input placeholder="Ваше имя" />
                    </Form.Item>
                    <Form.Item
                      {...layout}
                      label="Телефон"
                      name="phone"
                      rules={[
                        {
                          required: true,
                        },
                        {
                          pattern: new RegExp(validatePhone),
                          message: `Неккоректный номер (без "+")`,
                        },
                      ]}
                    >
                      <Input placeholder="Ваш телефон" />
                    </Form.Item>
                    <Form.Item className={s.request}>
                      <Button htmlType="submit">Оставить заявку</Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </Modal>
            <button
              className={"button"}
              onClick={() => setIsModalVisible(true)}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      )}
    </>
  );
};
