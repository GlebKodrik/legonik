import s from "./Buy.module.scss";
import { useEffect, useState } from "react";
import ButtonGroup from "antd/es/button/button-group";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  addCount,
  removeBasket,
  setPrice,
} from "../../../redux/product-reducer";

export const BuyItem = ({ product, basket }) => {
  const dispatch = useDispatch();
  const counter = basket.find((el) => el.id === product.id);
  const [sum, setSum] = useState(counter.count);

  const handleClickSum = () => {
    setSum(sum + 1);
    if (sum >= 99) {
      setSum(99);
      return;
    }
    dispatch(setPrice(product.price));
  };
  const handleClickMin = () => {
    setSum(sum - 1);
    if (sum <= 1) {
      setSum(1);
      return;
    }
    dispatch(setPrice(product.price, "-"));
  };
  const handleClickRemove = () => {
    dispatch(removeBasket(product.id));
    dispatch(setPrice(product.price * sum, "-"));
  };

  useEffect(() => {
    dispatch(addCount(product.id, sum));
  }, [dispatch, product.id, product.price, sum]);

  useEffect(() => {
    dispatch(setPrice(product.price * sum));
  }, []);

  return (
    <>
      <div className={s.item}>
        <img src={product.img} alt="" />
        <div className={s.itemWrap}>
          <div className={s.itemTitle}>{product.name}</div>
          <ButtonGroup className={s.itemGroupButton}>
            <Button onClick={handleClickMin}>
              <MinusOutlined />
            </Button>
            <div className={s.itemCount}>{sum}</div>
            <Button onClick={handleClickSum}>
              <PlusOutlined />
            </Button>
          </ButtonGroup>
          <div>{product.price} ₽</div>
        </div>
        <button className={s.button} onClick={handleClickRemove}>
          Удалить
        </button>
      </div>
    </>
  );
};
