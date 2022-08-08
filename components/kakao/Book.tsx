import React from 'react';
import {GetServerSideProps} from 'next'

const Books = () => {
  return (
    <div>

    </div>
  );
};

export const getServerSideProps: (context: object) => Promise<void> = async (context : object) => {
  // ...
}

export default Books;
