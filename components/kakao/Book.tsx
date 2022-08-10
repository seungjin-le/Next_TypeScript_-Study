import React from 'react';
import {CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CListGroup, CListGroupItem} from '@coreui/react'


type ValueObj = {
  props?:object,
  authors?: Array<string>,
  contents?: string,
  datetime?: string,
  isbn?: string,
  price?: number,
  publisher?: string,
  sale_price?: number,
  status?: string,
  thumbnail?: string,
  title?: string,
  translators?: Array<string>,
  url?: string,
  onClick:any,
}


const Books = ({props, onClick} : ValueObj ) => {
  const {title, thumbnail, datetime, publisher, price, sale_price}: ValueObj | any = props
  let bookData : string = ''
  if(datetime){
    let data = new Date(datetime)
    let year : number = data.getFullYear()
    let mon : number= data.getMonth()
    let day : number= data.getDay()
    bookData = `${year}년 ${mon+1}월 ${day}일`;
  }

  // overflow:hidden;
  //       text-overflow:ellipsis;
  //       white-space:nowrap;

  return (
    <CCard className='mb-2 h-100' style={{color:'black', maxHeight:'40rem'}}>
      <CCardImage className='p-1' orientation="top" src={thumbnail || "http://geojecci.korcham.net/images/no-image01.gif"} width={200} height={300}/>
      <CCardBody className='p-1'>
        <CCardTitle
          className='overflow-hidden'
          style={{maxHeight:'40px',minHeight:'40px', textOverflow:'ellipsis', whiteSpace:'nowrap'}}
        >{title}</CCardTitle>
        <CListGroup flush>
          <CListGroupItem>출판사 : {publisher}</CListGroupItem>
          <CListGroupItem>정상가 : {price}</CListGroupItem>
          <CListGroupItem>판매가 : {sale_price}</CListGroupItem>
          <CListGroupItem>출간일 : {bookData}</CListGroupItem>
        </CListGroup>
        <CButton onClick={(e) => onClick(e,props)}>자세히 보기</CButton>
      </CCardBody>
    </CCard>
  );
};



export default Books;
