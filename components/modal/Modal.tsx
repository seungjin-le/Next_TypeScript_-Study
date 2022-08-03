import React, {ReactNode} from 'react';
import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'

type Children = {
  children?: ReactNode | ReactNode[],
  props?: any
}

const Modal = ({children,props} : Children) => {

  return (
    <div></div>
  );
};

export default Modal;
