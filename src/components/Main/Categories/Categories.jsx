import s from "./Categories.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export const Categories = () => {
  const categories = useSelector((state) => state.product.categories);
  return (
    <div className={s.wrap}>
      <div className="title" id={"extra"}>
        Категории
      </div>
      <div className={s.items}>
        {categories.map((el) => {
          return (
            <NavLink to={`/category/${el.url}`} key={el.id} className={s.item}>
              <img src={el.img} alt="" />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
