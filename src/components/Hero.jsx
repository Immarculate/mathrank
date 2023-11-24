// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import {
  LineChart,
  Line,
  // eslint-disable-next-line no-unused-vars
  XAxis,
  // eslint-disable-next-line no-unused-vars
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
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
      { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
      { name: "May", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
    ],
    week: [
      { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Apr", uv: 2780, pv: 3908, amt: 2200 },
      { name: "May", uv: 1990, pv: 4800, amt: 2181 },
      { name: "Jun", uv: 2390, pv: 3800, amt: 2800 },
      { name: "Jul", uv: 3590, pv: 4300, amt: 2100 },
    ],
    month: [
      { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
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
            <div className="flex justify-center btn-hover items-center " key={item}>
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
          <LineChart
            width={250}
            height={150}
            data={dataByPeriod[selectedPeriod]}
          >
            <CartesianGrid stroke="#ccc" />
            {/* <XAxis dataKey="name" />
            <YAxis /> */}
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
     
     {/* small device */}
      <div className="lg-bg-content">
        <div className="mb-1 flex justify-center items-center flex-around">
          {calender.map((item) => (
            <div className="flex justify-center btn-hover items-center " key={item}>
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
          <LineChart
            width={650}
            height={200}
            data={dataByPeriod[selectedPeriod]}
          >
            <CartesianGrid stroke="#ccc" />
            {/* <XAxis dataKey="name" />
            <YAxis /> */}
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
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
