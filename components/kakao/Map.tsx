import React from 'react';
import { Map, MapMarker, useInjectKakaoMapApi } from "react-kakao-maps-sdk"



const Maps = () => {
  const { loading, error } = useInjectKakaoMapApi({
    appkey: "916ced9befd4ecf22b601f586949912d",
  })


  return (
    <>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
      />
    </>
  );
};

export default Maps;
