import React, {ReactNode} from 'react';
import Header from './Header'
import Footer from './Footer'

type Children = {
  children : ReactNode | ReactNode[]
}

const Main = ({children} : Children) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Main;
