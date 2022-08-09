import React, {useEffect, useState} from 'react';
import Book from '../../components/kakao/Book'
import axios from 'axios'
import {CCol, CContainer, CRow} from '@coreui/react'
import SearchTextInput from '../../components/imput/SearchTextInput'


type Props = {
  props : any
}

const KakaoBook = ({props} : Props) => {
  const [data, setData] : any[]= useState();
  const [searchDate, setSearchDate] : string = useState('');
  useEffect(() => {
    if(props){
      setData(Object.keys(props).map(item => props[item]))
    }
  }, [props]);

  const searchBookOnChange = (e : any) => {
    setSearchDate(e.target.value)
  }

  const searchBookOnClick = () => {
    axios.get("https://dapi.kakao.com/v3/search/book?target=title", {
      params: {
        query: searchDate
      },
      headers: {
        "Authorization": `KakaoAK ${process.env['KAKAO_BOOK_API']}`
      },
    })
      .then(res => {
        console.log(res)
        setData(Object.keys(res.data.documents).map(item => res.data.documents[item]))
      })
      .catch(err => console.log(err))
  }

  return (
    <CContainer className='p-0'>
      <SearchTextInput
        placeHolder='Book Search'
        size='4'
        onChange={searchBookOnChange}
        onClick={searchBookOnClick}
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
          <CCol xs className=''>
            <Book props={value} index={index} key={index}/>
          </CCol>
        ))
      }
      </CRow>
    </CContainer>
  );
};

export async function getServerSideProps() {

  const data = await axios.get("https://dapi.kakao.com/v3/search/book?target=title", {
    params: {
      // 검색어
      query: '미움받을 용기'
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
        props: {...res.data.documents},
      };
    })
    .catch(err => console.log(err))
  return {
    props: data
  }
}
export default KakaoBook;
