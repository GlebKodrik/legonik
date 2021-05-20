import s from "./Delivery.module.scss";
import DeliveryItem from "./DeliveryItem";

const Delivery = () => {
  return (
    <div className={"container"}>
      <div className={"title"}>Способы доставки</div>
      <div className={s.wrap}>
        <DeliveryItem />
      </div>
    </div>
  );
};

export default Delivery;
