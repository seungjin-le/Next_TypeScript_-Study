import React, {useEffect, useState} from 'react';
import Book from '../../components/kakao/Book'
import axios from 'axios'
import {
  CButton,
  CCol,
  CContainer,
  CImage, CListGroup, CListGroupItem,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow
} from '@coreui/react'
import SearchTextInput from '../../components/imput/SearchTextInput'
import {get} from '../../core/api/axios'
import modal from '../../components/modal/Modal'


type Props = {
  props : any
}

const KakaoBook = ({props} : Props) => {
  const [data, setData] : any[]= useState();
  const [searchDate, setSearchDate] : any = useState('');
  const [showModal, setShowModal] : any = useState(false);
  const [modalData, setModalData] : any = useState({});

  useEffect(() => {
    if(props){
      setData(props)
    }
  }, []);

  const searchBookOnChange = (e : any) => {
    setSearchDate(e.target.value)
  }

  const searchBookOnClick = async () => {
    get(searchDate)
      .then((res) => {
        if(res.status === 200){
          setData(res.data.documents)
        }
      })
      .catch((err) => console.log(err))
  }

  const bookItemOnClick = (e : any, value : any) => {
    console.log(value)
    let bookDate
    if(value?.datetime){
      let data = new Date(value?.datetime)
      let year : number = data.getFullYear()
      let mon : number= data.getMonth()
      let day : number= data.getDay()
      bookDate = `${year}년 ${mon+1}월 ${day}일`;
      console.log(bookDate)
    }
    setModalData({
      ...value,
      datetime : bookDate
    })
    setShowModal(true)
  }

  useEffect(() => {
    console.log(modalData)
  }, [modalData]);

  return (
    <>
      <CContainer className='p-0'>
      <SearchTextInput
        placeHolder='Book Search'
        size='4'
        onChange={searchBookOnChange}
        onClick={searchBookOnClick}
        value={searchDate}
      />
      <CRow
        xs={{ cols: 1 }}
        sm={{ cols:2 }}
        md={{ cols: 3 }}
        lg={{ cols: 4 }}
        xl={{ cols: 5 }}
        xxl={{ cols: 6 }}
        className='g-4'>
      {data &&
        data.map((value : object, index : number) => (
          <CCol xs className='' key={index}>
            <Book props={value} key={index} onClick={bookItemOnClick}/>
          </CCol>
        ))
      }
      </CRow>
    </CContainer>
      <CModal
        size="lg"
        visible={showModal}
        onClick={() => setShowModal(false)}
      >
        <CModalHeader>
          <CModalTitle style={{color: 'black'}}>{modalData?.title}</CModalTitle>
        </CModalHeader>
        <CModalBody style={{color: 'black'}}>
          <CCol>
            <CImage className='m3' align="start" fluid src={modalData?.thumbnail}  width={200} height={200}/>
            <div>
              <CListGroup flush>
                <CListGroupItem>저자 : {modalData?.authors}</CListGroupItem>
                <CListGroupItem>출판사 : {modalData?.publisher}</CListGroupItem>
                <CListGroupItem>정상가 : {modalData?.price}</CListGroupItem>
                <CListGroupItem>판매가 : {modalData?.sale_price}</CListGroupItem>
                <CListGroupItem>출간일 : {modalData?.datetime}</CListGroupItem>
              </CListGroup>
            </div>
          </CCol>
        </CModalBody>
        <CModalBody style={{color: 'black'}}>
          {modalData?.contents}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setShowModal(false)}>Close</CButton>
          <CButton color="primary" href={modalData?.url}>자세히 보기</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export async function getServerSideProps() {
  const data = await axios.get("https://dapi.kakao.com/v3/search/book?target=title", {
    params: {
      // 검색어
      query: '어둠의 실력자'
      // 필수아닌 검색 조건들
      //결과 문서 정렬 방식
      //sort	String	, accuracy(정확도순) 또는 latest(발간일순), 기본값 accuracy
      //결과 페이지 번호
      //page	Integer	, 1~50 사이의 값, 기본 값 1
      //한 페이지에 보여질 문서 수
      //size	Integer	, 1~50 사이의 값, 기본 값 10
      //target	String	검색 필드 제한
      //사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
    },
    headers: {
      "Authorization": `KakaoAK ${process.env['KAKAO_BOOK_API']}`
    },
  })
    .then(res => {
      return {
        props: [...res.data.documents],
      };
    })
    .catch(err => console.log(err))
  return {
    props: data
  }
}

export default KakaoBook;
