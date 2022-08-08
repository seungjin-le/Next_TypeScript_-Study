import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'



const Document = () => {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          type='text/javascript'
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env['NEXT_PUBLIC_KAKAO_MAP_API']}&libraries=services,clusterer?autoload=false`}
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}


export default  Document;
