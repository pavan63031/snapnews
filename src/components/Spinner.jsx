import React from 'react';
import reload from './reload.gif';

function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <img src={reload} alt="Loading..." style={{ height: '50px', width: '50px' }} />
    </div>
  );
}

export default Spinner;
