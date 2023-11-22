import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import './loading.css';

const Loading = () => {
  return (
    <div className='loading-cnt'>
      <p className='loading-txt'>
        <AiOutlineLoading3Quarters />
      </p>
    </div>
  );
};

export default Loading;
