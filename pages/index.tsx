import type { NextPage } from 'next'
import {CContainer} from '@coreui/react'
import Kakao from './kakao'

const Home: NextPage = () => {
  return (
   <CContainer>
     <h1>Home</h1>
     <Kakao />
   </CContainer>
  )
}

export default Home
