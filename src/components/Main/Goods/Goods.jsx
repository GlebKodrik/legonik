import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./Goods.module.scss";
import { Avatar, Comment, Rate, Tabs, Tooltip } from "antd";
import { BuyButton } from "../../shared/BuyButton/BuyButton";
import Paragraph from "antd/es/typography/Paragraph";

const { TabPane } = Tabs;

export const Goods = () => {
  const { id } = useParams();
  const productAll = useSelector((state) => state.product.productsAll);
  const product = productAll.find((el) => el.id === parseInt(id));

  return (
    <>
      <div className="container">
        <div className={s.name}>{product.name}</div>
        <div className={s.item}>
          <img src={product.img} alt="" />
          <div className={s.itemInfo}>
            <div className={s.shortDescr}>{product.shortDescr}</div>
            <Rate defaultValue={product.recall} disabled />
            <div className={s.cost}>{product.price} ₽</div>
            <BuyButton product={product} />
          </div>
        </div>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Описание" key="1">
            <Paragraph>{product.description}</Paragraph>
          </TabPane>
          <TabPane tab="Отзывы" key="2">
            {product.reviews ? (
              product.reviews.map((el) => {
                return (
                  <Comment
                    author={<div>{el.name}</div>}
                    avatar={<Avatar src={el.img} alt={el.name} />}
                    content={<p>{el.text}</p>}
                    datetime={
                      <Tooltip title={el.date}>
                        <span>{el.date}</span>
                      </Tooltip>
                    }
                  />
                );
              })
            ) : (
              <div className={"title"}>Отзывов нет&#129324;</div>
            )}
          </TabPane>
          <TabPane tab="YouTube" key="3">
            <div className={"title"}>Пока обзоров нет&#128543;</div>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
