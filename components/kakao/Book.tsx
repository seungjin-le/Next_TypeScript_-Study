import React, {useState} from 'react';
import {CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CListGroup, CListGroupItem} from '@coreui/react'


type ValueObj = {
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


const Books = ({props} : ValueObj ) => {
  let bookData : string = ''
  if(props?.datetime){
    let data = new Date(props.datetime)
    let year : number = data.getFullYear()
    let mon : number= data.getMonth()
    let day : number= data.getDay()
    bookData = `${year}년 ${mon+1}월 ${day}일`;

  }

  return (
    <CCard className='mb-2 h-100' style={{color:'black', maxHeight:'40rem'}}>
      <CCardImage className='p-1' orientation="top" src={props?.thumbnail} width={200} height={300}/>
      <CCardBody className='p-1'>
        <CCardTitle className='.titleBox'>{props?.title}</CCardTitle>
        <CListGroup flush>
          <CListGroupItem>출판사 : {props?.publisher}</CListGroupItem>
          <CListGroupItem>정상가 : {props?.price}</CListGroupItem>
          <CListGroupItem>판매가 : {props?.sale_price}</CListGroupItem>
          <CListGroupItem>출간일 : {bookData}</CListGroupItem>
        </CListGroup>
        <CButton>자세히 보기</CButton>
      </CCardBody>
    </CCard>
  );
};



export default Books;
