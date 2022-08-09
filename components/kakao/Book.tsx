import React, {useState} from 'react';
import {CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CListGroup, CListGroupItem} from '@coreui/react'

type Props = {
  props?:object
  index:number
  value:object
}
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
  //     authors,
  //     "contents": "『아들러 심리학을 읽는 밤』은 아들러 심리학에 관한 일본의 1인자 철학자 기시미 이치로와 베스트셀러 작가인 고가 후미타케가 공저한 《미움받을 용기》의 원전이 된 책이다. 저자 기시미 이치로가 우연히 아들러 심리학에 빠져들게 되면서 깨닫게 된 지식과 통찰, 그리고 수많은 상담을 통해 얻은 임상 경험과 사례들 중에서 ‘정수’만을 정리해서 명쾌하게 설명하고 있다.  그렇다면 왜 지금 아들러일까? 아들러를 흔히 ‘용기의 심리학자’라고 부르는 데서 그 이유를",
  //     "datetime": "2015-01-15T00:00:00.000+09:00",
  //     "isbn": "8952230647 9788952230645",
  //     "price": 13800,
  //     "publisher": "살림",
  //     "sale_price": 12420,
  //     "status": "정상판매",
  //     "thumbnail": "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F635470%3Ftimestamp%3D20220809173807",
  //     "title": "아들러 심리학을 읽는 밤",
  //     "translators": [
  //         "박재현"
  //     ],
  //     "url": "https://search.daum.net/search?w=bookpage&bookId=635470&q=%EC%95%84%EB%93%A4%EB%9F%AC+%EC%8B%AC%EB%A6%AC%ED%95%99%EC%9D%84+%EC%9D%BD%EB%8A%94+%EB%B0%A4"
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
