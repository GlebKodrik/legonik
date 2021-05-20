import search from "./../../assets/img/search-cube.svg";
import logo from "./../../assets/img/logo.svg";
import s from "./Header.module.scss";
import { PhoneOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import { Messenger } from "../shared/Messenger/Messenger";
export const HeaderItem = () => {
  return (
    <>
      <div className="container">
        <div className={s.menu}>
          <div className={s.menuLinks}>
            <NavLink to="/delivery">Доставка и оплата</NavLink>
            <NavLink to="/feedback">Обратная связь</NavLink>
            <NavLink to="/about">Информация</NavLink>
            <NavLink to="/location">
              <img className={s.menuLinksIcon} src={search} alt="Иконка" />
              Где мы?
            </NavLink>
          </div>
        </div>
        <div>
          <div className={s.main}>
            <NavLink to={"/"}>
              <img className={s.mainLogo} src={logo} alt="Логотип" />
              <span className={s.mainLogoText}>Сеть магазинов LEGO</span>
            </NavLink>
            <div className={s.mainInfo}>
              <div className={s.mainPhone}>
                <PhoneOutlined rotate={90} className={s.mainPhoneIcon} />
                <a className={s.mainPhoneNumber} href="tel:88007003110">
                  8 (800) 700-31-10
                </a>
                <p className={s.mainPhoneSub}>9:00 — 22:00, ежедневно</p>
              </div>
              <Messenger />
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};
