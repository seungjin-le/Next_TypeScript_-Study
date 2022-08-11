import { CFooter, CLink } from '@coreui/react';
import React from 'react';

const Footer = () => {
  return (
    <CFooter className='mt-2 flex-grow-0'>
      <div>
        <span><b>Bibiblg</b> {" "}</span>
        <span>&copy; <b>2022 Next.js + TypeScript Project</b></span>
      </div>
      <div>
        <span><b>Email :</b> {" "}</span>
        <CLink href="/">dltmdwls154@gmail.com</CLink>
      </div>
    </CFooter>
  );
};

export default Footer;
