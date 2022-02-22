import React from "react";
import { WeatherData } from "./../redux/types/types";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import moment from "moment"
import Loader from "../assist/Loader";

type WeatherBlock = {
  data: WeatherData | null;
};

const WeatherInfo: React.FC<WeatherBlock> = ({ data }) => {
  const loading = useSelector((state: RootStore) => state.weather.loading);
  const dataList = data?.list;
  //Obtain the temperature in celsius
  const celsius = (F:number)=>{return Math.round(F-273.15)};
  //Obtain the corresponding Day
  const theDay = (TS:number)=>{return moment(moment(TS*1000).unix() * 1000).format("ddd")};
  return (
    <>
      <div className="weather1">
        <div className="weather_content">
          {loading && <Loader />}
          {dataList?.map((item,index) =>(
            <>
              {index===0?
              <div className="weather__today" key={index}>
                <div style={{height:"20px"}}>
                  <span>Today</span>
                </div>
                <div className="weather_sub_content">
                  <div>
                    <img
                      src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                      alt={item.weather[0].description.toString()}
                    />
                  </div>
                  <div>
                    <span style={{fontSize:"4.2rem",fontWeight:600}}>{celsius(item.temp.day)}º</span><br/>
                    <span>{item.weather[0].main}</span>
                  </div>
                </div>
              </div>
              :
              <div className="weather__future_container">
                <div key={index} className="weather__future">
                  <div className="future_weather_sub_content">
                    <div>{theDay(item.dt)}</div>
                    <div>
                      <img
                        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                        alt={item.weather[0].description.toString()}
                      />
                    </div>
                    <div>{celsius(item.temp.day)}º</div>
                  </div>
                </div>
              </div>
              }
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeatherInfo;
