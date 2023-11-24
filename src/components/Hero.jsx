// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AreaChart, Label, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import BtcDetail from "./BtcDetail";

const Hero = () => {
  const calender = ["day", "week", "month", "year"];
  const [selectedPeriod, setSelectedPeriod] = useState("day");
  // eslint-disable-next-line no-unused-vars
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dataByPeriod = {
    day: [
      { name: "Jan", uv: 100, pv: 2400, amt: 2400 },
      { name: "Feb", uv: 200, pv: 1398, amt: 2210 },
      { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
      { name: "May", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
    ],
    week: [
      { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Jun", uv: 2390, pv: 3800, amt: 2800 },
      { name: "Jul", uv: 3590, pv: 4300, amt: 2100 },
    ],
    month: [
      { name: "Mar", uv: 100, pv: 9800, amt: 2290 },
      { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
      { name: "May", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
    ],
    year: [
      { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Mar", uv: 2600, pv: 9800, amt: 2290 },
      { name: "Apr", uv: 2780, pv: 3908, amt: 2100 },
      { name: "May", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Jun", uv: 2300, pv: 3800, amt: 2500 },
      { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
    ],
    // {
    //   name: 'Page A',
    //   uv: 4000,
    //   pv: 2400,
    //   amt: 2400,
    // },
    // {
    //   name: 'Page B',
    //   uv: 3000;
    //   pv: 1398;
    //   amt: 2210;
    // },
    // {
    //   name: 'Page C',
    //   uv: 2000,
    //   pv: 9800,
    //   amt: 2290,
    // },
    // {
    //   name: 'Page D',
    //   uv: 2780,
    //   pv: 3908,
    //   amt: 2000,
    // },
    // {
    //   name: 'Page E',
    //   uv: 1890,
    //   pv: 4800,
    //   amt: 2181,
    // },
    // {
    //   name: 'Page F',
    //   uv: 2390,
    //   pv: 3800,
    //   amt: 2500,
    // },
    // {
    //   name: 'Page G',
    //   uv: 3490,
    //   pv: 4300,
    //   amt: 2100,
    // },
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="flex justify-center items-center flex-col mt-3">
      <BtcDetail />

      {/* large device */}
      <div className="sm-none">
        <div className="mb-1 flex justify-center items-center flex-around">
          {calender.map((item) => (
            <div
              className="flex justify-center btn-hover items-center "
              key={item}
            >
              <button
                className={`button-style text-grey btn-hover ${
                  selectedPeriod === item ? "bg-grey text-white" : ""
                }`}
                onClick={() => handlePeriodChange(item)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        <div className="bg-white w-3 h-3 flex justify-center items-center shadow-box border-rounded-2">
          {/* <LineChart
            width={250}
            height={150}
            data={dataByPeriod[selectedPeriod]}
          >
            
            <Tooltip />
            <Legend />
           
            <Line
              className="graphshadow"
              type="monotone"
              dataKey="pv"
              style={{
                stroke: "url(#gradient)",
                strokeWidth: 3,
                filter: "url(#orangeShadow)",
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#FFAD5E", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FFCB4A", stopOpacity: 1 }}
                />
              </linearGradient>
              <filter id="orangeShadow" x="0" y="0" width="150%" height="150%">
                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="6" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
              </filter>
            </defs>
          </LineChart> */}
          <AreaChart className="flex justify-center items-center"
          width={250}
            height={140}
            data={dataByPeriod[selectedPeriod]}
          margin={{
            // top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
         
          <Tooltip />
          <Label value="dataByPeriod" offset={0} position="insideBottom" />
          <Area type="monotone" dataKey="uv" strokeWidth= "3" stroke="#FFA554" fill="#FFF7EE"  label='5678' style={{
                strokeWidth: 3,
               }} />
                 <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#FFAD5E", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FFCB4A", stopOpacity: 1 }}
                />
              </linearGradient>
              <filter id="orangeShadow" x="0" y="0" width="150%" height="150%">
                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="6" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
              </filter>
            </defs>
        </AreaChart>
        </div>
      </div>

      {/* small device */}
      <div className="lg-bg-content">
        <div className="mb-1 flex justify-center items-center flex-around">
          {calender.map((item) => (
            <div
              className="flex justify-center btn-hover items-center "
              key={item}
            >
              <button
                className={`button-style text-grey btn-hover ${
                  selectedPeriod === item ? "bg-grey text-white" : ""
                }`}
                onClick={() => handlePeriodChange(item)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        <div className="bg-white w-6 h-6 flex justify-center items-center shadow-box border-rounded-2">
        <AreaChart
          width={650}
          height={200}
          data={dataByPeriod[selectedPeriod]}
          margin={{
           top: 5,
            right: 40,
            left: 8,
            bottom: 2,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis /> */}
          <Tooltip />
          <Label value="name" offset={0} position="insideTop" />
          <Label value="day" offset={0} position="insideBottom" />
          <Area type="monotone"  dataKey="uv" strokeWidth= "3" stroke="#FFA554" fill="#FFF7EE" />
        </AreaChart>
        </div>
      </div>

      {/* large device */}
      <div className="flex flex-between mb-3 sm-none">
        <div className="bg-white flex flex-col flex-box box items-center justify-center border-rounded h-2 w-2 m-3 shadow-box ">
          <div className="flex justify-center items-center bg-blue-gradient border-rounded-3 h-4 w-4 mt-1">
            <i
              className="fas fa-dollar-sign"
              style={{ color: "white", fontSize: "20px" }}
            ></i>
          </div>
          <p className="text-xl opacity-50 text-bold body">Buy BTC</p>
        </div>

        <div className="bg-white flex flex-col box items-center justify-center border-rounded h-2 w-2 m-3 shadow-box ">
          <div className="flex justify-center items-center bg-orange-gradient border-rounded-3 h-4 w-4 mt-1">
            <i
              className="fas fa-dollar-sign"
              style={{ color: "white", fontSize: "20px" }}
            ></i>
          </div>
          <p className="text-xl opacity-50 text-bold body">Sell BTC</p>
        </div>
      </div>
      {/* small view */}
      <div className="flex flex-between mb-3 lg-bg-content">
        <div className="bg-white flex flex-col box items-center justify-center border-rounded h-7 w-7 m-3 shadow-box ">
          <div className="flex justify-center items-center bg-blue-gradient border-rounded-3  h-2 w-2 mt-1">
            <i
              className="fas fa-dollar-sign"
              style={{ color: "white", fontSize: "30px" }}
            ></i>
          </div>
          <p className="text-xl-1 opacity-50 text-bold body">Buy BTC</p>
        </div>

        <div className="bg-white flex flex-col box items-center justify-center border-rounded h-7 w-7 m-3 shadow-box ">
          <div className="flex justify-center items-center bg-orange-gradient border-rounded-3 h-2 w-2 mt-1">
            <i
              className="fas fa-dollar-sign"
              style={{ color: "white", fontSize: "30px" }}
            ></i>
          </div>
          <p className="text-xl-1 opacity-50 text-bold body">Sell BTC</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
