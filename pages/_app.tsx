import type { AppProps } from 'next/app'
import Main from '../components/layout/Main'
import '../node_modules/@coreui/coreui/scss/coreui.scss'
import '../styles/Layout.scss'
import '../styles/globals.scss'
import React from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f9b256f27ac94c60b3b60548d768b661&libraries=services,clusterer?autoload=false"
        strategy="beforeInteractive"
      >
      </script>
      <Component {...pageProps} />
    </Main>
  )
}

export default MyApp
