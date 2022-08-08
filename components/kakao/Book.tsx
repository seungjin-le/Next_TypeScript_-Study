import React from 'react';
import {CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle} from '@coreui/react'

type Props = {
  props?:object
  index:number
  value:object
}
type valueObj = {
  authors: Array<string>,
  contents: string,
  datetime: string,
  isbn: string,
  price: number,
  publisher: string,
  sale_price: number,
  status: string,
  thumbnail: string
  title: string,
  translators: Array<string>
  url: string
}


const Books = (value : valueObj, index : Props) => {
  console.log(value, index)
  //const {price} = value
  //{

  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src={value?.thumbnail} />
      <CCardBody>
        <CCardTitle>{value.title}</CCardTitle>
        <CCardText>
          {value.contents}
        </CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
  );
};



export default Books;
