import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCol,
  CContainer,
  CRow
} from '@coreui/react'

const Kakao = () => {
  return (
    <CContainer>
      <CRow
        xs={{ cols: 1 }}
        sm={{ cols:2 }}
        md={{ cols: 3 }}
        lg={{ cols: 4 }}
        xl={{ cols: 5 }}
        xxl={{ cols: 6 }}
        className='g-4'
      >
      <CCol className='p-0'>
        <CCard className='h-100' style={{color:'black', maxHeight:'40rem'}}>
          <CCardImage className='p-1' orientation="top" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAyCAMAAABRcrRnAAAAY1BMVEX////90QD9zwD90AD9zgD+777+7bn+67T9zAD91jf91kL///3+44z+4YP90iT/+ej//PL+67D+8cj+89L/9+H+6KH92VX91kj90Rb+6an+5ZX92l3+9dj+78L92E/+33n+3Wy9XCD4AAADP0lEQVRYhe2X2babMAxFsawmTGEKhAA3If//lZVsY2xD2ty1+tB2oZcwHNi2JR2TKDriiP8vsrL++lzcfkP8y3gAxuePxRLjH3+Ge0YBp4/FIODgHtyD+3dys75Z75T1/Ez7W359x02uW3HoZtdxej6nvInC8LgzYJ7pEZxTBKkCn9Uu9wU4muHWq/hmxRRNYq5jES6Ty6VjEesR17EUUgKAFELC8i6XW7O4VYeDK76v4BH5YUS+jvNbbksyNF6dAcRpXj/OMz87bblK/FjFfX5+1C9XrLDY19fr6cZHl3fcQgqwN7tBL3hUAj3ThtzsLgTkllAbceuIvxhW6+OGj70kr9wXCPmMtnEiWBdyJ7kv5tcZ8VPaQ3oJCpnscgca0t0tChto185yOxZnO9qKxqMzyYko1hu9FOgW+8JV+drf0xMhe5+rlrDdFaeLeABnupozbrmcryUZYdykTD1uxeI3ZtNLs54vf4JlkEXDneiNQaVzZBRb7uQWYCC23ILG5qQto/P7hkv52pRJc3kmBQeN1ONSf8jbO7FY6od6tnArIKE7zrniZjF1hf+V1RQolRcAtYbHrVjs28/j7oo1l468Ak6o4pz56/kOYaGwGyFMF4q8CObbheLBF3+DS84s3MslG8/S51OYXxY7XcStAIvY5veTdabfVNpZUczSmdGmrgIxV265nLh1Bb+tK7pO44PXclW4lbPlViy25V84nvzdPjLGsXQ2Vaw13x2uNg7jCjSI1alXLvuGYxT1vm9EykIFGtcn7tqgO1y1ZRqjr8AdpOWWvk+mb3ySIuf60Fl189eF/avFvPOorFLmFh/VYlPGk7sOVPKrKOCy0mwNnBzlmlmTotjj0ioIqQuWHtOumT3StX+9xKlOcz6LfG5GO7Ae1ZV1t3F8kSFA2L+LWJhKaVzxfd3vGAZFXp/HxK2dLVft8frf4YVnKekDBbD7wj2uSqD+d6i+SUCJBxJbuxhQmhtCBlj6kALnf2gTL98uHSC5HuKliqoYzatqhHjdhx7x8gnRsZYeyJV4rab2RjfYQbH3FpmiatvWae/BGkDWdN2g1STZFXeueNTizIr1opzyeb6cy+iII4444p+Lnw9/K/gAI8FxAAAAAElFTkSuQmCC"} width={200} height={300}/>
          <CCardBody className='p-1'>
            <CCardTitle
              className='overflow-hidden'
              style={{maxHeight:'40px',minHeight:'40px', textOverflow:'ellipsis', whiteSpace:'nowrap'}}
            >Kakao Map</CCardTitle>
            <CButton href={'/kakao/KakaoMap'}>read more</CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol className='p-0'>
        <CCard className='h-100' style={{color:'black', maxHeight:'40rem'}}>
          <CCardImage className='p-1' orientation="top" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAyCAMAAABRcrRnAAAAY1BMVEX////90QD9zwD90AD9zgD+777+7bn+67T9zAD91jf91kL///3+44z+4YP90iT/+ej//PL+67D+8cj+89L/9+H+6KH92VX91kj90Rb+6an+5ZX92l3+9dj+78L92E/+33n+3Wy9XCD4AAADP0lEQVRYhe2X2babMAxFsawmTGEKhAA3If//lZVsY2xD2ty1+tB2oZcwHNi2JR2TKDriiP8vsrL++lzcfkP8y3gAxuePxRLjH3+Ge0YBp4/FIODgHtyD+3dys75Z75T1/Ez7W359x02uW3HoZtdxej6nvInC8LgzYJ7pEZxTBKkCn9Uu9wU4muHWq/hmxRRNYq5jES6Ty6VjEesR17EUUgKAFELC8i6XW7O4VYeDK76v4BH5YUS+jvNbbksyNF6dAcRpXj/OMz87bblK/FjFfX5+1C9XrLDY19fr6cZHl3fcQgqwN7tBL3hUAj3ThtzsLgTkllAbceuIvxhW6+OGj70kr9wXCPmMtnEiWBdyJ7kv5tcZ8VPaQ3oJCpnscgca0t0tChto185yOxZnO9qKxqMzyYko1hu9FOgW+8JV+drf0xMhe5+rlrDdFaeLeABnupozbrmcryUZYdykTD1uxeI3ZtNLs54vf4JlkEXDneiNQaVzZBRb7uQWYCC23ILG5qQto/P7hkv52pRJc3kmBQeN1ONSf8jbO7FY6od6tnArIKE7zrniZjF1hf+V1RQolRcAtYbHrVjs28/j7oo1l468Ak6o4pz56/kOYaGwGyFMF4q8CObbheLBF3+DS84s3MslG8/S51OYXxY7XcStAIvY5veTdabfVNpZUczSmdGmrgIxV265nLh1Bb+tK7pO44PXclW4lbPlViy25V84nvzdPjLGsXQ2Vaw13x2uNg7jCjSI1alXLvuGYxT1vm9EykIFGtcn7tqgO1y1ZRqjr8AdpOWWvk+mb3ySIuf60Fl189eF/avFvPOorFLmFh/VYlPGk7sOVPKrKOCy0mwNnBzlmlmTotjj0ioIqQuWHtOumT3StX+9xKlOcz6LfG5GO7Ae1ZV1t3F8kSFA2L+LWJhKaVzxfd3vGAZFXp/HxK2dLVft8frf4YVnKekDBbD7wj2uSqD+d6i+SUCJBxJbuxhQmhtCBlj6kALnf2gTL98uHSC5HuKliqoYzatqhHjdhx7x8gnRsZYeyJV4rab2RjfYQbH3FpmiatvWae/BGkDWdN2g1STZFXeueNTizIr1opzyeb6cy+iII4444p+Lnw9/K/gAI8FxAAAAAElFTkSuQmCC"} width={200} height={300}/>
          <CCardBody className='p-1'>
            <CCardTitle
              className='overflow-hidden'
              style={{maxHeight:'40px',minHeight:'40px', textOverflow:'ellipsis', whiteSpace:'nowrap'}}
            >Kakao Book</CCardTitle>
            <CButton href={'/kakao/KakaoBook'}>read more</CButton>
          </CCardBody>
        </CCard>
      </CCol>
      </CRow>
    </CContainer>
  );
};

export default Kakao;
