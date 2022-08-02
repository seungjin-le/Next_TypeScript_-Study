import { CButton } from '@coreui/react';
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
import {CDropdownDivider, CDropdownToggle, CHeaderBrand, CHeaderToggler} from '@coreui/react'

const Header = () => {
  const [visible, setVisible] = useState(false)

  return (
    <CHeader>

      <CContainer fluid>
        <CHeaderBrand>Bibi Big</CHeaderBrand>
        <CHeaderToggler onClick={() => setVisible(!visible)} />
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
              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
          <CForm className="d-flex">
            <CFormInput className="me-2" type="search" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CHeader>
  );
};

export default Header;
