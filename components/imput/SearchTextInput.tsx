import React from 'react';
import {CButton, CCol, CForm, CFormInput, CFormLabel} from '@coreui/react'

type InputAtt = {
  id? : string
  value? : string
  placeHolder? : string
  size? : string
  label?:string
  onChange?: any
  onClick?: any
  onKeyPress?: any
}

const SearchTextInput = (props : InputAtt) => {
  const {id, value, placeHolder,size, label, onChange, onClick,onKeyPress} = props;
  return (
      <CForm className="row g-3 justify-content-end pb-2 pt-2">
        <CCol xs={size}>
          <CFormLabel className="visually-hidden">
            {label}
          </CFormLabel>
          <CFormInput type="text" className='visually-hidden'/>
          <CFormInput type="text" id={id} placeholder={placeHolder} value={value} onChange={onChange} onKeyPress={onKeyPress}/>
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
