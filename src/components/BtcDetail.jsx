// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const BtcDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
 {/* small device */}
<div className={`w-6 btc-detail bg-white m-3 border-rounded-2 flex-col justify-between lg-bg-content shadow-box ${isExpanded ? 'expanded' : ''}`}>
      <div className="flex justify-between" style={{ cursor: 'pointer' }}>
        <div className="flex justify-center items-center mt-1">
          <i
            className="fab fa-bitcoin ml-1 mt-1"
            style={{
              color: "orange",
              fontSize: "40px",
              transform: "rotate(0deg)",
            }}
          ></i>
          <span className="opacity-1 ml-1 text-bold text-xl-1 body">Bitcoin</span>
        </div>
        <span className="opacity-50 mr-1 text-bold mt-2 text-xl-1 body">BTC</span>
      </div>

      <p className="body text-xl-2 text-bold ml-1 opacity-75">123456789 BTC</p>

      {isExpanded && (
        <div className="ml-1 mb-2 flex justify-between items-center">
          <span className="body font-bold text-bold opacity-50">$19.153 USD</span> 
          <button className="bg-red flex items-center text-white button-style mr-9">-2.32%</button>
        </div>
      )}

      <div className="flex justify-center  expandable-container mb-1" onClick={toggleExpand} style={{ cursor: 'pointer', opacity: '0.5'  }}>
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
      </div>
    </div>

    {/* large device */}
    <div className={`w-3 btc-detail bg-white m-3 border-rounded-2 flex-col justify-between sm-none shadow-box ${isExpanded ? 'expanded' : ''}`}>
      <div className="flex justify-between" style={{ cursor: 'pointer' }}>
        <div className="flex justify-center items-center mt-1">
          <i
            className="fab fa-bitcoin ml-1 mt-1"
            style={{
              color: "orange",
              fontSize: "40px",
              transform: "rotate(0deg)",
            }}
          ></i>
          <span className="opacity-1 ml-1 text-bold text-xl body">Bitcoin</span>
        </div>
        <span className="opacity-50 mr-1 text-bold mt-2 text-xl-1 body">BTC</span>
      </div>

      <p className="body text-xl-3 text-bold ml-1 opacity-75">123456789 BTC</p>

      {isExpanded && (
        <div className="ml-1 mb-2 flex items-center">
          <span className="body font-bold text-bold text-xl-1 opacity-50">$19.153 USD</span> 
          <button className="bg-red button-style text-white text-xl ml-4">-2.32%</button>
        </div>
      )}

      <div className="flex justify-center  expandable-container mb-1" onClick={toggleExpand} style={{ cursor: 'pointer', opacity: '0.5'  }}>
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
      </div>
    </div>
    </>
  );
};

export default BtcDetail;
