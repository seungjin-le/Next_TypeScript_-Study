import React, {ReactNode} from 'react';
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'
import {CContainer} from '@coreui/react'

type Children = {
  children : ReactNode | ReactNode[]
}

const Main = ({children} : Children) => {
  return (
    <Layout>
      <Header/>
      <CContainer fluid className='p-0 mb-4 flex-grow-1'>
        {children}
      </CContainer>
      <Footer />
    </Layout>
  );
};

export default Main;
