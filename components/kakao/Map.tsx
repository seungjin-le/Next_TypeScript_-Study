import React, {useState} from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk"
import {CButton, CContainer} from '@coreui/react'


const Maps = () => {
  const [mapsLevel, setMapsLevel] = useState(3);
  return (
        <>
          <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: "100%", height: "360px" }}
            level={mapsLevel}
          >
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
              <div style={{ color: "#000" }}>Hello World!</div>
            </MapMarker>
          </Map>
          <CContainer>
            <CButton onClick={() => setMapsLevel(mapsLevel -1)}> 확대 </CButton>
            <CButton onClick={() => setMapsLevel(mapsLevel +1)}> 축소 </CButton>
          </CContainer>
        </>
  );
};

export default Maps;
