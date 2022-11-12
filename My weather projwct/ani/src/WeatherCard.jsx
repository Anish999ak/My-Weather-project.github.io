import React from 'react'
import { useState } from 'react';

const WeatherCard = ({tempInfo}) => {

    const { temp,
        humidity,
        pressure,
        weathermood,
        name,
        wind,
        country,
        sunset,
    speed,} = tempInfo;

  setInterval(() => {
    const tine = new Date().toLocaleString()
    setDate(tine)
  }, 1000);

     let sec = sunset;
     let date = new Date(sec*1000);
     let timestr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
     <article className='widget'>
          <div className='weather-icon'>
          <i class="fa fa-sun"></i>
          </div>
    
          <div className='weatherinfo'>
             <div className='temp'>
              <span>{temp}&deg;</span>
             </div>
             <div className='weatherdetaile'>
               <div className='weathercondition'>
                {weathermood}
               </div>
               <div className='place'>
                {name}, {country}
               </div>
             </div>
          </div>

          <div className='date'>
            <spam>
              {new Date().toLocaleString()}
            </spam>
          </div>


          <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
              <i class="fa fa-sun"></i>
              </p>
              <p className="extra-info-leftside">
                {timestr} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
              <i class="fa fa-droplet"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
              <i class="fa fa-gem"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}<br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
              <i class="fa fa-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {speed}<br />
                Speed
              </p>
            </div>
          </div>
        </div>
        </article>
    </>
  )
}

export default WeatherCard