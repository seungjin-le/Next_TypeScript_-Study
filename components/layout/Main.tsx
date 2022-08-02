import React, {ReactNode} from 'react';
import Header from './Header'
import Footer from './Footer'
import Layout from './Layout'

type Children = {
  children : ReactNode | ReactNode[]
}

const Main = ({children} : Children) => {
  return (
    <Layout>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Layout>
  );
};

export default Main;
