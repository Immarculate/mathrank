// eslint-disable-next-line no-unused-vars
import React from 'react';

function SideBar() {
  return (
    <div className="h-full bg-white flex-col items-center  side-bar-div lg-bg-content">
      <div className='h-8 mt-6'>
      <div className="flex justify-center items-center div w-7 border-rounded-2"><i className="fas fa-wallet" style={{ color: 'black', fontSize: '25px', opacity: '0.5' }}></i> <p className='ml-1'>Wallet</p></div>
      <div className="flex justify-center items-center div w-7 border-rounded-2 mt-2"><i className="fas fa-compass" style={{ color: 'black', fontSize: '25px', opacity: '0.5' }}></i><p className='ml-1'>Wallet</p></div>
      <div className="flex justify-center items-center div w-7 border-rounded-2 mt-2"><i className="fas fa-bell" style={{ color: 'black', fontSize: '25px', opacity: '0.5' }}></i><p className='ml-1'>Wallet</p></div>
      <div className="flex justify-center items-center div w-7 border-rounded-2 mt-2"><i className="fas fa-cogs" style={{ color: 'black', fontSize: '25px', opacity: '0.5', hover: 'white' }}></i><p className='ml-1'>Wallet</p></div>
      </div>
    </div>
  );
}

export default SideBar;
