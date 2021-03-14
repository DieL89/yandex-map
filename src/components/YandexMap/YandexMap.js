import React from 'react';
import { YMaps, Map, Placemark, Polygon, FullscreenControl, TypeSelector, ZoomControl } from 'react-yandex-maps';
import './yandexmap.css';
import balloon from './balloon.png';
import geoData from './geodata-jpn';

const YandexMap = () => (
  <YMaps query={{ apikey: 'e6763205-24a3-4522-ae07-e547c476f586' }}>
    <Map
      defaultState={{
        center: [35.652832, 139.839478],
        zoom: 5,
      }}
      width='100%'
      height='100%'
    >
      <Placemark
        geometry={[35.652832, 139.839478]}
        options={{
          iconLayout: 'default#image',
          iconImageHref: balloon,
          iconImageSize: [22, 40],
          iconImageOffset: [-11, -40]
        }}
      />

      <Polygon
        geometry={geoData}
        options={{
          fill: false,
          strokeColor: '#3c33e3',
          strokeOpacity: 0.6,
          strokeWidth: 2,
          strokeStyle: 'solid',
        }}
      />

      <ZoomControl />

      <TypeSelector />

      <FullscreenControl />
    </Map>
  </YMaps>
);

export default YandexMap;