import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../../redux/product-reducer";
import s from "./Subcategory.module.scss";
import { Product } from "./Product";
import { Loader } from "../../../shared/Loader/Loader";

export const Subcategory = () => {
  const dispatch = useDispatch();
  const { url } = useParams();

  const actualCategory = useSelector((state) => state.product.categories).find(
    (el) => el.url === url
  );

  const products = useSelector((state) => state.product.products, shallowEqual);

  useEffect(() => {
    if (actualCategory) {
      dispatch(getProducts(actualCategory.id));
    }
  }, [actualCategory, dispatch]);

  if (!products) {
    return <Loader />;
  }

  return (
    <>
      <div className={s.title}>
        Конструктор {actualCategory.name} товаров {products.length}
      </div>
      <div className={s.cardWrap}>
        {products?.map((el) => {
          return (
            <Product key={el.id} product={el} category={actualCategory.name} />
          );
        })}
      </div>
    </>
  );
};
