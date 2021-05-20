import React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import s from "./Map.module.scss";

const Location = () => {
  const mapState = {
    zoom: 16,
    center: [59.957081752277475, 30.354690299316395],
    controls: ["zoomControl", "fullscreenControl"],
  };

  const placeMark = {
    geometry: [59.957081752277475, 30.354690299316395],
    modules: ["geoObject.addon.balloon", "geoObject.addon.hint"],
  };

  return (
    <div className={"container"}>
      <div className="title">Где мы находимся</div>
      <div className={s.map}>
        <YMaps>
          <Map
            options={{ suppressMapOpenBlock: true }}
            width="100%"
            height="100%"
            state={mapState}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            <Placemark {...placeMark} />
          </Map>
        </YMaps>
      </div>
      <div className={s.subTitle}>
        <b>Где мы:</b> площадь Ленина, 8/8 Санкт-Петербург, Россия
      </div>
    </div>
  );
};

export default Location;
