import React, {useEffect, useRef, useState} from 'react';
import {Map, MapMarker, MapTypeControl, ZoomControl} from "react-kakao-maps-sdk"
import {CToast, CToastBody, CToastHeader} from '@coreui/react'
/*global kakao*/

const Maps = () => {
  const [loding, setLoding] = useState(false);
  const [mapsLevel, setMapsLevel] = useState(3);
  const [mapsInfo, setMapsInfo] : Array<object>= useState([]);
  const mapRef = useRef();
  const [position, setPosition] = useState()
  const handlePostitionClick = (_t : any, {latLng} : any) => {
    console.log(position)
    setPosition({
      lat: latLng.getLat(),
      lng: latLng.getLng(),
    })
    setMapsInfo([
      {
        lat: latLng.getLat(),
        lng: latLng.getLng(),
      },
      ...mapsInfo
    ])
  }
  useEffect(() => {
    setLoding(true)
  }, []);
  return (
        <>
          <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            isPanto={true}
            style={{ width: "100%", height: "360px" }}
            level={mapsLevel}
            onClick={(_t, mouseEvent) => {
              handlePostitionClick(_t, mouseEvent)
            }}
          >
            { loding &&
              <>
                <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT}/><MapTypeControl
                position={kakao.maps.ControlPosition.TOPRIGHT}/>
              </>
            }
            {mapsInfo.map((v : any,i : any) =>
              <MapMarker position={v}>
                <div style={{ color: "#000" }}>Hello World!</div>
              </MapMarker>
            )}
          </Map>
          {mapsInfo.map((v : any,i : any) =>
              <CToast autohide={false} visible={true} key={i}>
                <CToastHeader closeButton>
                  <svg
                    className="rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                  >
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                  </svg>
                  <strong className="me-auto">클릭하신 위치 포지션</strong>
                  <small>7 min ago</small>
                </CToastHeader>
                <CToastBody>{`lat : ${v.lat}`}</CToastBody>
                <CToastBody>{`lng : ${v.lng}`}</CToastBody>
              </CToast>
            )
          }
        </>
  );
};

export default Maps;
