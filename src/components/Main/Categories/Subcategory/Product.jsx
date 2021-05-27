import s from "./Subcategory.module.scss";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { useState } from "react";
import { MyModal } from "../../../shared/myModal/MyModal";

export const Product = ({ product, ...props }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className={s.item}>
      <NavLink to={"/"}>
        <img src={product.img} alt="" />
        <div className={s.itemText}>
          <div className={s.itemTextId}>
            {props.category}&nbsp;{product.id}
          </div>
          <div className={s.itemTextName}>{product.name}</div>
          <div className={s.itemTextCost}>{product.price}&nbsp;₽</div>
        </div>
      </NavLink>
      <button
        className={cn("button", s.itemTextButton)}
        onClick={() => setIsModalVisible(true)}
      >
        Купить
      </button>
      <MyModal {...{ isModalVisible, setIsModalVisible }} product={product} />
    </div>
  );
};
