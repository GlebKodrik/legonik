import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "./../../assets/img/slider/1.jpg";
import slide2 from "./../../assets/img/slider/2.jpg";
import slide3 from "./../../assets/img/slider/3.jpg";
import slide4 from "./../../assets/img/slider/4.jpg";
import s from "./Main.module.scss";
import SwiperCore, {
  Navigation,
  A11y,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";
import { Categories } from "./Categories/Categories";

SwiperCore.use([Navigation, A11y, Pagination, EffectFade, Autoplay]);
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};
export const Main = () => {
  return (
    <>
      <Swiper
        pagination={pagination}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className={s.swipe}>
          <img src={slide3} alt="Слайдер" />
        </SwiperSlide>
        <SwiperSlide className={s.swipe}>
          <img src={slide1} alt="Слайдер" />
        </SwiperSlide>
        <SwiperSlide className={s.swipe}>
          <img src={slide2} alt="Слайдер" />
        </SwiperSlide>
        <SwiperSlide className={s.swipe}>
          <img src={slide4} alt="Слайдер" />
        </SwiperSlide>
      </Swiper>
      <Categories />
    </>
  );
};
