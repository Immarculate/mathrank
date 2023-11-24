// eslint-disable-next-line no-unused-vars
import React from 'react';

function SideBar() {
  return (
    <div className="h-full bg-white flex-col items-center  side-bar-div lg-bg-content">
      <div className='h-8 mt-6'>
      <div className="flex items-center div w-7 border-rounded-2"><i className="fas fa-wallet" style={{ margin: '10px', color: 'black', fontSize: '25px', opacity: '0.5' }}></i> <p className='ml-1 body text-bold opacity-50'>Wallet</p></div>
      <div className="flex items-center div w-7 border-rounded-2 mt-2"><i className="fas fa-compass" style={{ margin: '10px', color: 'black', fontSize: '25px', opacity: '0.5' }}></i><p className='ml-1 body opacity-50 text-bold'>Compass</p></div>
      <div className="flex items-center div w-7 border-rounded-2 mt-2"><i className="fas fa-bell" style={{ margin: '10px', color: 'black', fontSize: '25px', opacity: '0.5' }}></i><p className='ml-1 body opacity-50 text-bold'>Notifications</p></div>
      <div className="flex ml-1 items-center div w-7 border-rounded-2 mt-2"><i className="fas fa-cogs" style={{ margin: '10px', color: 'black', fontSize: '25px', opacity: '0.5', hover: 'white' }}></i><p className='ml-1 body opacity-50 text-bold'>Settings</p></div>
      </div>
    </div>
  );
}

export default SideBar;
