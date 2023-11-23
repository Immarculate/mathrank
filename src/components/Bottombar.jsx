// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';


const Bottombar = () => {
  
  return (
    <div className='sm-none'>

      <div className="h-1 w-full flex bg-white items-center justify-between bottom-bar">
      <div className=""><i className="fas fa-wallet" style={{ color: 'black', fontSize: '25px', opacity: '0.5' }}></i></div>
      <div><i className="fas fa-compass" style={{ color: 'black', fontSize: '25px', opacity: '0.5' }}></i></div>
      <div><i className="fas fa-bell" style={{ color: 'black', fontSize: '25px', opacity: '0.5' }}></i></div>
      <div className=''><i className="fas fa-cogs" style={{ color: 'black', fontSize: '25px', opacity: '0.5' }}></i></div>
    </div>

    

    </div>
  );
}

export default Bottombar;
