import React from 'react';
import {CButton, CCol, CForm, CFormInput, CFormLabel, CRow} from '@coreui/react'

type InputAtt = {
  id? : string
  value? : string
  placeHolder? : string
  size? : string
  label?:string
  onChange?: any
  onClick?: any
}

const SearchTextInput = (props : InputAtt) => {
  const {id, value, placeHolder,size, label, onChange, onClick} = props;
  return (
      <CForm className="row g-3 justify-content-end">
        <CCol xs={size}>
          <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
            {label}
          </CFormLabel>
          <CFormInput type="text" id={id} placeholder={placeHolder} value={value} onChange={onChange}/>
        </CCol>
        <CCol xs="auto">
          <CButton type="button" className="mb-3" onClick={onClick}>
            Search
          </CButton>
        </CCol>
      </CForm>

  );
};

export default SearchTextInput;
