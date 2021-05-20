import React from "react";
import lego from "./../../../assets/img/map_top.jpg";
import s from "./About.module.scss";
import legoMan from "./../../../assets/img/legoMan.png";
import years1932 from "./../../../assets/img/1932.png";
import years2009 from "./../../../assets/img/2009.png";
const About = () => {
  return (
    <>
      <div className={s.head}>
        <div className={s.headBlock}>
          <div className={s.headTitle}>
            <span>О нас.</span>
            История бренда LEGO <br />и сети сертифицированных магазинов в
            России.
          </div>

          <div className={s.headSubTitle}>
            Цифры и факты о том, как все начиналось и что стоит за всемирно
            известным брендом. Итак, начнем!
          </div>
        </div>

        <div className={s.headBlock}>
          <img src={lego} alt="" className="lh-head__img" />
        </div>
      </div>
      <div className={s.info}>
        <img src={legoMan} alt="" className={s.infoImg} />

        <h4 className={s.infoText}>
          Название LEGO – это аббревиатура, образованная из двух датских слов –{" "}
          <strong>le</strong>g <strong>go</strong>dt, что означает «играй
          хорошо». Это не просто имя. Это девиз LEGO!
        </h4>
      </div>

      <div className={s.years}>
        <div className={s.yearsCol}>
          <div>
            <img src={years1932} alt="" />
          </div>

          <div className={s.yearsDesc}>
            Сегодня бренд LEGO известен во всем мире. <br /> А основана компания
            была в далеком 1932 году Оле Кирком Кристиансеном. Сначала она
            перешла от отца к сыну. Сейчас же принадлежит внуку основателя.
          </div>
        </div>

        <div className={s.yearsCol}>
          <div>
            <img src={years2009} alt="" />
          </div>

          <div className={s.yearsDesc}>
            С 2009 года ведет свой отсчет история сети сертифицированных
            магазинов LEGO в России («Мир кубиков»), призванных поддерживать
            традиции бренда-легенды в нашей стране.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
