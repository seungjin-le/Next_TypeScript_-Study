import { CButton, CCloseButton, CCol, CRow } from '@coreui/react';
import { CCollapse } from '@coreui/react';
import { CDropdown } from '@coreui/react';
import { CDropdownItem } from '@coreui/react';
import { CDropdownMenu } from '@coreui/react';
import { CForm } from '@coreui/react';
import { CFormInput } from '@coreui/react';
import { CContainer } from '@coreui/react';
import { CHeader } from '@coreui/react';
import { CHeaderNav } from '@coreui/react';
import { CNavItem } from '@coreui/react';
import { CNavLink } from '@coreui/react';
import React, {useState} from 'react';
import {CDropdownDivider, CDropdownToggle, CHeaderBrand} from '@coreui/react'

const Header = () => {
  const [visible, setVisible] = useState(false)

  return (
    <CHeader style={{minHeight:'auto'}} className='header'>
      <CContainer fluid>
        <CHeaderBrand>Bibibig</CHeaderBrand>
        <CButton type="button" color={ visible ? 'danger' :'success'} onClick={() => setVisible(!visible)}>
          {visible ? 'Close Menu' : 'Open Menu'}
        </CButton>
      </CContainer>
      <div className='menuBox'>
        <div className='menu'>
          <CCollapse className="header-collapse" visible={visible}>
          <CHeaderNav>
            <CNavItem>
              <CNavLink href="/" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item">
              <CDropdownToggle color="secondary">Menu</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CHeaderNav>
          <CForm className="d-flex">
            <CFormInput className="me-2" type="search" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
        </div>
      </div>
    </CHeader>
  );
};

export default Header;
