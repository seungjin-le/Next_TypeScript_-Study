import Head from 'next/head';
import React from 'react';



const KakaoMap = (props : object) => {
  console.log(props)
  return (
    <div>
      <Head>
        <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=916ced9befd4ecf22b601f586949912d`} />
      </Head>
      <div id='map'>

      </div>
    </div>
  );
};

export async function getServerSideProps(context: object) {
  //let container = document.getElementById('map');
  // 위도, 경도
//916ced9befd4ecf22b601f586949912d
  //let options = {
  //     center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
  //     //레벨이 낮을수록 확대 높을수록 축소
  //     level: 3
  //     }
  //   };
  //   let map = new kakao.maps.Map(container, options);
  // }, [])
     return {
       props: { message: `${process.env.REAVT_APP_KAKAOMAP_API}` },
     }
}

export default KakaoMap;
