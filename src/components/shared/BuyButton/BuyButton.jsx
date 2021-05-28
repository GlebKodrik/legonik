import cn from "classnames";
import s from "../../Main/Categories/Subcategory/Subcategory.module.scss";
import { MyModal } from "../myModal/MyModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../../redux/product-reducer";

export const BuyButton = ({ product }) => {
  const basket = useSelector((state) => state.product.basket);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = () => {
    const find = basket.find((el) => el.id === product.id);
    if (!find) {
      dispatch(addBasket(product.id));
      setIsModalVisible(true);
    }
    setIsModalVisible(true);
  };
  useEffect(() => {
    localStorage.setItem("buy", JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      <button className={cn("button", s.itemTextButton)} onClick={handleClick}>
        Купить
      </button>
      <MyModal {...{ isModalVisible, setIsModalVisible }} product={product} />
    </>
  );
};
