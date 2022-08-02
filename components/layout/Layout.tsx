import React, {ReactNode} from 'react';
import {CContainer} from '@coreui/react'

type Children = {
  children : ReactNode | ReactNode[]
}

const Layout = ({children} : Children) => {
  return (
    <CContainer sm>
      {children}
    </CContainer>
  );
};

export default Layout;
