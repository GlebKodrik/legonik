import s from "./Subcategory.module.scss";
import { NavLink } from "react-router-dom";
import { BuyButton } from "../../../shared/BuyButton/BuyButton";

export const Product = ({ product, ...props }) => {
  return (
    <div className={s.item}>
      <NavLink to={`/product/${product.id}`}>
        <img src={product.img} alt="" />
        <div className={s.itemText}>
          <div className={s.itemTextId}>
            {props.category}&nbsp;{product.id}
          </div>
          <div className={s.itemTextName}>{product.name}</div>
          <div className={s.itemTextCost}>{product.price}&nbsp;₽</div>
        </div>
      </NavLink>
      <BuyButton product={product} />
    </div>
  );
};
