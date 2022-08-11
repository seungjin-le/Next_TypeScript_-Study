import React, {ReactNode} from 'react';
import {CContainer} from '@coreui/react'

type Children = {
  children : ReactNode | ReactNode[]
}

const Layout = ({children} : Children) => {
  return (
    <CContainer sm className='min-vh-100 d-flex flex-column'>
      {children}
    </CContainer>
  );
};

export default Layout;
