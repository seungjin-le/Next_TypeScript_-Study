import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Main from '../components/layout/Main'
import '../node_modules/@coreui/coreui/scss/coreui.scss'
import '../styles/Layout.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  )
}

export default MyApp
